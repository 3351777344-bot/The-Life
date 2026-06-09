<template>
  <div class="app">
    <div class="starfield" aria-hidden="true"></div>
    <div class="main-content">
      <ViewNav
        :currentView="currentView"
        @navigate="(v) => (currentView = v)"
      />

      <div
        v-if="statusMessage"
        class="status-toast"
        :class="`status-${statusType}`"
      >
        {{ statusMessage }}
      </div>

      <InputDialog
        :show="showInputDialog"
        :title="inputDialog.title"
        :message="inputDialog.message"
        :placeholder="inputDialog.placeholder"
        :defaultValue="inputDialog.defaultValue"
        :inputType="inputDialog.inputType || 'text'"
        @confirm="handleInputConfirm"
        @cancel="showInputDialog = false"
      />

      <div v-if="currentView === 'genesis'">
        <GenesisView
          :userInfo="userInfo"
          @update:userInfo="(v) => (userInfo = v)"
          @start-destiny="goToDestinyTree"
        />
      </div>

      <div v-else-if="currentView === 'destiny'">
        <DestinyView
          :treeNodes="treeNodes"
          :selectedNode="selectedNode"
          :selectedNodeData="selectedNodeData"
          :nodeCount="nodeCount"
          :leafCount="leafCount"
          :selectedDepth="selectedDepth"
          :treeTransformStyle="treeTransformStyle"
          :isPanning="isPanning"
          :selectedRoute="selectedRoute"
          @add-node="addNode"
          @zoom-in="zoomIn"
          @zoom-out="zoomOut"
          @reset-view="resetView"
          @export-tree="exportTree"
          @reset-tree="resetTree"
          @start-pan="startPan"
          @pan-move="onPanMove"
          @end-pan="endPan"
          @select-node="selectNode"
          @edit-node="editNode"
          @delete-node="deleteNode"
          @extend-branch="extendBranch"
          @go-to-genesis="goToGenesis"
          @go-to-divergence="goToDivergence"
        />
      </div>

      <div v-else-if="currentView === 'divergence'">
        <DivergenceView
          :aiRoutes="aiRoutes"
          :isGenerating="isGeneratingRoutes"
          :compareRoutes="compareRoutes"
          :customRoutes="customRoutes"
          :selectedRoute="selectedRoute"
          :generatedMedia="generatedMedia"
          :routeGenerationError="routeGenerationError"
          :uploadedPlanMeta="uploadedPlanMeta"
          :mode="mode"
          @generate-ai-routes="generateAIRoutes"
          @refine-route="refineRoute"
          @replace-route="replaceRoute"
          @toggle-compare="toggleCompare"
          @select-route="selectRoute"
          @add-custom-route="addCustomRoute"
          @remove-custom-route="removeCustomRoute"
          @file-upload="handleFileUpload"
          @generate-comic="generateComic"
          @generate-video="generateVideo"
          @generate-poster="generatePoster"
          @go-to-destiny="goToDestinyTree"
          @go-to-comparison="goToComparison"
          @go-to-reflection="goToReflection"
          @toggle-mode="toggleMode"
        />
      </div>

      <div v-else-if="currentView === 'comparison'">
        <ComparisonView
          :routes="compareRoutes"
          :attributes="attributes"
          :selectedRoute="selectedRoute"
          :userInfo="userInfo"
          @go-back="() => (currentView = 'divergence')"
          @route-selected="handleComparisonRouteSelected"
          @confirm-selection="handleComparisonConfirm"
        />
      </div>

      <div v-else-if="currentView === 'reflection'">
        <ReflectionView
          :attributes="attributes"
          :attributeHistory="attributeHistory"
          :impactHistory="impactHistory"
          :currentChart="currentChart"
          :radarAxes="radarAxes"
          :radarAxisPoints="radarAxisPoints"
          :radarPolygon="radarPolygon"
          :axisLabelMap="axisLabelMap"
          :socialFeed="socialFeed"
          :selectedRoute="selectedRoute"
          @show-radar="showRadarChart"
          @show-trend="showTrendChart"
          @show-impact="showImpactTrace"
          @refresh-social="refreshSocialData"
          @go-to-divergence="goToDivergence"
          @go-to-mentorship="goToMentorship"
        />
      </div>

      <div v-else-if="currentView === 'mentorship'">
        <MentorshipView
          :chatMessages="chatMessages"
          :isGeneratingAIResponse="isGeneratingAIResponse"
          :chatInput="chatInput"
          :currentAI瑙掕壊="currentAIRole"
          :currentAIDescription="currentAIDescription"
          :selectedRoute="selectedRoute"
          :advisorError="advisorError"
          :isListening="isListening"
          @send-message="sendMessage"
          @select-ai-role="selectAIRole"
          @toggle-voice="toggleVoiceInput"
          @go-to-reflection="goToReflection"
          @go-to-conclusion="goToConclusion"
        />
      </div>

      <div v-else-if="currentView === 'conclusion'">
        <ConclusionView
          :savedPaths="savedPaths"
          :regretLevel="regretLevel"
          :regretText="regretText"
          :regretAnalysis="regretAnalysis"
          :aiAdvice="aiAdvice"
          :reportError="reportError"
          :selectedRoute="selectedRoute"
          :totalSelections="totalSelections"
          :explorationTime="explorationTime"
          :achievementsUnlocked="achievementsUnlocked"
          :restartCount="restartCount"
          @go-to-mentorship="goToMentorship"
          @restart="restartJourney"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, defineAsyncComponent } from "vue";
import ViewNav from "./components/ViewNav.vue";
import InputDialog from "./components/InputDialog.vue";
import {
  buildFallbackRouteImpacts,
  getRoutePreviewValues,
} from "./services/routeStateService";
import {
  cloneData,
  createDefaultUserInfo,
  createDefaultScenario,
  createDefaultTreeNodes,
  createDefaultAttributes,
  createDefaultAttributeHistory,
  createDefaultImpactHistory,
  resetJourneyState,
} from "./services/journeyStateService";
import {
  requestRoutes,
  requestAdvisorReply,
  requestRegretReport,
  requestPlanningFileExtraction,
  resolveRouteAttributeDeltas,
} from "./services/lifeJourneyFacade";
import { SERVICE_META_KEY, SERVICE_SOURCE } from "./services/serviceContracts";

const DEFAULT_AI_ROLE = "Life Planner";
const DEFAULT_AI_DESCRIPTION =
  "Turns constraints and long-term goals into executable advice.";

import LoadingView from "./components/LoadingView.vue";

const createAsyncView = (loader) =>
  defineAsyncComponent({
    loader,
    loadingComponent: LoadingView,
    delay: 120,
  });

const GenesisView = createAsyncView(
  () => import("./components/GenesisView.vue"),
);
const DestinyView = createAsyncView(
  () => import("./components/DestinyView.vue"),
);
const DivergenceView = createAsyncView(
  () => import("./components/DivergenceView.vue"),
);
const ComparisonView = createAsyncView(
  () => import("./components/ComparisonView.vue"),
);
const ReflectionView = createAsyncView(
  () => import("./components/ReflectionView.vue"),
);
const MentorshipView = createAsyncView(
  () => import("./components/MentorshipView.vue"),
);
const ConclusionView = createAsyncView(
  () => import("./components/ConclusionView.vue"),
);

const formatDuration = (durationMs) => {
  const totalMinutes = Math.max(1, Math.round(durationMs / (1000 * 60)));
  if (totalMinutes < 60) return `${totalMinutes}鍒嗛挓`;

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return minutes > 0 ? `${hours}灏忔椂${minutes}鍒嗛挓` : `${hours}灏忔椂`;
};

// Minimal reactive state to keep components running
const currentView = ref("genesis");
const statusMessage = ref("");
const statusType = ref("info");
const routeGenerationError = ref("");
const reportError = ref("");
const advisorError = ref("");

// Dialog state
const showInputDialog = ref(false);
const inputDialog = ref({
  title: "Input",
  message: "Please enter a value",
  placeholder: "",
  defaultValue: "",
  onConfirm: null,
});

const userInfo = ref(createDefaultUserInfo());
const isCardFlipped = ref(false);
const currentScenario = ref(createDefaultScenario());
const defaultScenario = cloneData(currentScenario.value);

const treeNodes = ref(createDefaultTreeNodes());
const defaultTreeNodes = cloneData(treeNodes.value);
const selectedNode = ref("current");
const selectedNodeData = computed(() =>
  treeNodes.value.find((n) => n.id === selectedNode.value),
);
const nodeCount = computed(() => treeNodes.value.length);
const leafCount = computed(
  () =>
    treeNodes.value.filter((n) => !n.children || n.children.length === 0)
      .length,
);
const selectedDepth = computed(() => {
  const n = selectedNodeData.value;
  return n?.depth || 1;
});
const treeScale = ref(1);
const treeOffset = ref({ x: 0, y: 0 });
const panStart = ref({ x: 0, y: 0 });
const treeTransformStyle = computed(() => ({
  transform: `translate(${treeOffset.value.x}px, ${treeOffset.value.y}px) scale(${treeScale.value})`,
  transformOrigin: "center top",
}));
const isPanning = ref(false);

const aiRoutes = ref([]);
const defaultAiRoutes = [];
const isGeneratingRoutes = ref(false);
const isGeneratingAIResponse = ref(false);
const compareRoutes = ref([]);
const customRoutes = ref([]);
const selectedRoute = ref(null);
const generatedMedia = ref([]);
const mode = ref("ai");
const uploadedDocText = ref("");
const uploadedPlanMeta = ref(null);

const defaultAttributes = createDefaultAttributes();
const attributes = ref(cloneData(defaultAttributes));
const attributeHistory = ref(createDefaultAttributeHistory());
const defaultAttributeHistory = cloneData(attributeHistory.value);
const impactHistory = ref(createDefaultImpactHistory());
const defaultImpactHistory = cloneData(impactHistory.value);
const currentChart = ref("radar");
const radarAxes = ref([
  { key: "career", label: "鑱屼笟" },
  { key: "finance", label: "璐㈠姟" },
  { key: "relationship", label: "浜洪檯" },
  { key: "health", label: "鍋ュ悍" },
  { key: "growth", label: "鎴愰暱" },
]);
const radarAxisPoints = computed(() => {
  const centerX = 120;
  const centerY = 120;
  const r = 90;
  const total = radarAxes.value.length;
  return radarAxes.value.map((_, i) => {
    const angle = (Math.PI * 2 * i) / total - Math.PI / 2;
    return {
      x: centerX + Math.cos(angle) * r,
      y: centerY + Math.sin(angle) * r,
      lx: centerX + Math.cos(angle) * (r + 18),
      ly: centerY + Math.sin(angle) * (r + 18),
    };
  });
});
const radarPolygon = computed(() => {
  const centerX = 120;
  const centerY = 120;
  const maxR = 90;
  const total = radarAxes.value.length;
  return radarAxes.value
    .map((axis, i) => {
      const ratio =
        Math.max(0, Math.min(100, attributes.value[axis.key] || 0)) / 100;
      const angle = (Math.PI * 2 * i) / total - Math.PI / 2;
      const r = maxR * ratio;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      return `${x},${y}`;
    })
    .join(" ");
});
const axisLabelMap = ref({
  career: "鑱屼笟",
  finance: "璐㈠姟",
  relationship: "浜洪檯",
  health: "鍋ュ悍",
  growth: "鎴愰暱",
});
const socialFeed = ref([]);

const roleGreetingsInit = {
  "Career Mentor":
    "Hi, I am your career mentor. I can help with career planning, promotion strategy, skills growth, and workplace communication.",
  "Relationship Advisor":
    "Hi, I am your relationship advisor. I can help you think through family, social, and emotional decisions.",
  "Startup Coach":
    "Hi, I am your startup coach. I can help with business models, financing strategy, team building, and practical experiments.",
  "Life Planner":
    "Hi, I am your life planner. I can help balance career, finance, relationships, health, and long-term growth.",
};

const chatMessagesByRole = ref({
  "Career Mentor": [],
  "Relationship Advisor": [],
  "Startup Coach": [],
  "Life Planner": [
    {
      id: `ai_init_${Date.now()}`,
      role: "ai",
      content: roleGreetingsInit["Life Planner"],
      time: new Date().toLocaleTimeString("zh-CN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ],
});
const chatInput = ref("");
const isListening = ref(false);
const currentAIRole = ref(DEFAULT_AI_ROLE);
const currentAIDescription = ref(DEFAULT_AI_DESCRIPTION);

const chatMessages = computed(
  () => chatMessagesByRole.value[currentAIRole.value] || [],
);

const savedPaths = ref([]);
const regretLevel = ref(20);
const regretText = ref("鏆傛棤");
const regretAnalysis = ref("鏆傛棤");
const aiAdvice = ref("");
const journeyStartedAt = ref(Date.now());
const decisionCount = ref(0);
const restartCount = ref(0);

const roleDescMap = {
  "Career Mentor": "Career path, skills growth, and workplace decisions.",
  "Relationship Advisor": "Relationship boundaries, communication, and emotional support.",
  "Startup Coach": "Resources, risk management, and experiment cadence.",
  "Life Planner": "Career, finance, relationships, health, and growth balance.",
};

const totalSelections = computed(() => decisionCount.value);
const explorationTime = computed(() => {
  currentView.value;
  decisionCount.value;
  chatMessages.value.length;
  return formatDuration(Date.now() - journeyStartedAt.value);
});
const achievementsUnlocked = computed(() => {
  let count = 0;
  if (decisionCount.value >= 1) count += 1;
  if (compareRoutes.value.length >= 2) count += 1;
  if (generatedMedia.value.length > 0) count += 1;
  if (chatMessages.value.some((message) => message.role === "ai")) count += 1;
  return count;
});

// Simple helpers
const setStatusMessage = (msg, type = "info") => {
  statusMessage.value = msg;
  statusType.value = type;
  if (msg) {
    setTimeout(() => {
      statusMessage.value = "";
      statusType.value = "info";
    }, 2500);
  }
};

const incrementDecisionCount = (amount = 1) => {
  decisionCount.value += amount;
};

const recordAttributeHistory = () => {
  // snapshot current attributes with timestamp
  attributeHistory.value.push({
    ...attributes.value,
    time: new Date().toISOString(),
  });
  // keep a bounded history for charts
  if (attributeHistory.value.length > 24) attributeHistory.value.shift();
  // recompute lightweight regret after attribute change
  computeRegret();
};

const recordImpact = (title, changes) => {
  impactHistory.value.unshift({
    id: `impact_${Date.now()}`,
    title,
    changes,
    time: new Date().toLocaleString(),
  });
  if (impactHistory.value.length > 12) impactHistory.value.pop();
};

const appendChatMessage = (role, content) => {
  chatMessagesByRole.value[currentAIRole.value].push({
    id: `${role}_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    role,
    content,
    time: new Date().toLocaleTimeString("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  });
};

// compute simple trend points for a given attribute key from history
const getTrendPath = (key) => {
  const records = attributeHistory.value;
  if (!records.length) return "";
  const width = 400;
  const height = 180;
  const xStep = records.length > 1 ? width / (records.length - 1) : width;
  const pairs = records.map((h, idx) => {
    const v = Math.max(0, Math.min(100, h[key] != null ? h[key] : 0));
    const x = 20 + idx * xStep;
    const y = 200 - (v / 100) * height;
    return `${idx === 0 ? "M" : "L"}${x},${y}`;
  });
  return pairs.join(" ");
};

// Handle dialog input
const handleInputConfirm = (value) => {
  showInputDialog.value = false;
  if (inputDialog.value.onConfirm) {
    inputDialog.value.onConfirm(value);
  }
};

// simple heuristic regret computation
const computeRegret = () => {
  if (!attributeHistory.value.length) {
    regretLevel.value = 5;
    regretText.value = "Not started";
    regretAnalysis.value = "No history data yet";
    return;
  }
  // measure recent volatility across attributes
  const latest = attributeHistory.value[attributeHistory.value.length - 1];
  const prev =
    attributeHistory.value[attributeHistory.value.length - 2] || latest;
  let vol = 0;
  Object.keys(attributes.value).forEach((k) => {
    const d = Math.abs((latest[k] || 0) - (prev[k] || 0));
    vol += d;
  });
  // base regret on volatility and dropped averages
  const avgNow =
    Object.values(latest)
      .filter((v) => typeof v === "number")
      .reduce((a, b) => a + b, 0) / Object.keys(attributes.value).length;
  const base = Math.max(0, 100 - Math.round(avgNow));
  const computed = Math.min(100, Math.round(base + vol));
  regretLevel.value = computed;
  regretText.value = computed > 60 ? "瀛樺湪杈冮珮鍚庢倲椋庨櫓" : "鍚庢倲椋庨櫓鍙帶";
  regretAnalysis.value = `Recent volatility total ${Math.round(vol)}, attribute average ${Math.round(avgNow)}. Keep short-term changes lower and balance long-term goals.`;
  aiAdvice.value =
    regretLevel.value > 60
      ? "Diversify effort, improve stress tolerance, and delay gratification."
      : "Keep the current pace and validate smaller decisions step by step.";
};

const findNode = (id) => treeNodes.value.find((n) => n.id === id);

const collectSubtreeIds = (startId, acc = []) => {
  acc.push(startId);
  const node = findNode(startId);
  (node?.children || []).forEach((cid) => collectSubtreeIds(cid, acc));
  return acc;
};

const applyAttributeChanges = (title, impacts = {}) => {
  const changes = {};
  Object.keys(impacts).forEach((k) => {
    const delta = Number(impacts[k]) || 0;
    const before = attributes.value[k] || 0;
    const after = Math.max(0, Math.min(100, before + delta));
    attributes.value[k] = after;
    changes[k] = delta;
  });
  if (Object.keys(changes).length) {
    recordImpact(title, changes);
    recordAttributeHistory();
  }
};

const getStableRouteId = (route) =>
  String(route?.id || `${route?.title || "route"}_${route?.feasibility || 0}`);

const getRouteBranchKey = (routeId, parentId) => `${parentId || "current"}::${routeId}`;

const hashString = (value) => {
  let hash = 0;
  const text = String(value);
  for (let index = 0; index < text.length; index += 1) {
    hash = (hash << 5) - hash + text.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
};

const createTreeSafeId = (prefix, value) =>
  `${prefix}_${hashString(value)}_${Date.now().toString(36)}_${Math.random()
    .toString(36)
    .slice(2, 7)}`;

const buildRouteNodeDescription = (route) => {
  const parts = [
    route?.description,
    route?.meta?.selectedNodeTitle ? `琛嶇敓鑷細${route.meta.selectedNodeTitle}` : "",
    route?.feasibility != null ? `鍙鎬э細${route.feasibility}%` : "",
    route?.difficulty ? `闅惧害锛?{route.difficulty}` : "",
    route?.benefit ? `棰勬湡鏀剁泭锛?{route.benefit}` : "",
  ];
  return parts.filter(Boolean).join("\n");
};

const findRouteNode = (routeId, parentId = null) =>
  treeNodes.value.find(
    (node) =>
      node.nodeType === "route" &&
      node.routeId === routeId &&
      (parentId == null || node.parentId === parentId),
  );

const ensureRouteNode = (route, options = {}) => {
  if (!route) return null;

  const routeId = getStableRouteId(route);
  const parentId = options.parentId || selectedNode.value || "current";
  const parent = findNode(parentId) || findNode("current");
  if (!parent) return null;
  const routeBranchKey = getRouteBranchKey(routeId, parent.id);

  const existingNode = findRouteNode(routeId, parent.id);
  if (existingNode) {
    existingNode.title = route.title || existingNode.title;
    existingNode.description = buildRouteNodeDescription(route);
    existingNode.route = cloneData(route);
    existingNode.routeBranchKey = routeBranchKey;
    existingNode.updatedAt = new Date().toISOString();
    if (options.select) selectedNode.value = existingNode.id;
    return existingNode;
  }

  const nodeId = createTreeSafeId("route", routeBranchKey);
  const newNode = {
    id: nodeId,
    parentId: parent.id,
    title: route.title || "Untitled route",
    description: buildRouteNodeDescription(route),
    depth: (parent.depth || 1) + 1,
    timeline: new Date().toISOString(),
    children: [],
    nodeType: "route",
    routeId,
    routeBranchKey,
    source: options.source || "divergence",
    route: cloneData(route),
  };

  parent.children = Array.from(new Set([...(parent.children || []), nodeId]));
  treeNodes.value.push(newNode);
  if (options.select) selectedNode.value = nodeId;
  return newNode;
};

const syncRoutesToTree = (routes, options = {}) => {
  const parentId = options.parentId || selectedNode.value || "current";
  const routeNodes = (Array.isArray(routes) ? routes : [])
    .map((route) => ensureRouteNode(route, { ...options, parentId }))
    .filter(Boolean);
  selectedNode.value = parentId;
  return routeNodes;
};

const pruneRouteStateForRemovedNodes = (nodeIds) => {
  const removedRouteIds = treeNodes.value
    .filter((node) => nodeIds.includes(node.id) && node.nodeType === "route")
    .map((node) => node.routeId);

  savedPaths.value = savedPaths.value.filter(
    (savedRoute) =>
      !nodeIds.includes(savedRoute.nodeId) &&
      !removedRouteIds.includes(getStableRouteId(savedRoute.route)),
  );

  if (
    selectedRoute.value &&
    removedRouteIds.includes(getStableRouteId(selectedRoute.value))
  ) {
    selectedRoute.value = null;
  }
};

const removeRouteNode = (route) => {
  const routeId = getStableRouteId(route);
  const node = findRouteNode(routeId);
  if (!node || node.id === "current") return null;

  const parent = findNode(node.parentId);
  const idsToRemove = collectSubtreeIds(node.id);
  pruneRouteStateForRemovedNodes(idsToRemove);
  treeNodes.value = treeNodes.value.filter((candidate) => !idsToRemove.includes(candidate.id));

  if (parent) {
    parent.children = (parent.children || []).filter((childId) => childId !== node.id);
  }

  if (idsToRemove.includes(selectedNode.value)) {
    selectedNode.value = parent?.id || "current";
  }

  return parent?.id || "current";
};

// Navigation
const goToDestinyTree = () => (currentView.value = "destiny");
const goToDivergence = () => (currentView.value = "divergence");
const goToComparison = () => (currentView.value = "comparison");
const goToReflection = () => (currentView.value = "reflection");
const goToMentorship = () => (currentView.value = "mentorship");
const goToConclusion = async () => {
  const reportPayload = {
    userInfo: userInfo.value,
    selectedRoute: selectedRoute.value,
    savedPaths: savedPaths.value,
    attributes: attributes.value,
    attributeHistory: attributeHistory.value,
    impactHistory: impactHistory.value,
    decisionCount: decisionCount.value,
    currentAIRole: currentAIRole.value,
  };

  reportError.value = "";
  setStatusMessage("姝ｅ湪鐢熸垚缁堝眬鎶ュ憡...");

  const reportResult = await requestRegretReport(reportPayload);
  if (reportResult.ok) {
    const report = reportResult.data;
    if (report?.regretLevel != null)
      regretLevel.value = Number(report.regretLevel);
    if (report?.regretText) regretText.value = report.regretText;
    if (report?.analysis) regretAnalysis.value = report.analysis;
    if (report?.advice) aiAdvice.value = report.advice;
  } else {
    reportError.value =
      reportResult.error?.message || "Final report generation failed. Please try again later.";
    computeRegret();
    setStatusMessage(reportError.value, "error");
  }

  currentView.value = "conclusion";
};
const goToGenesis = () => (currentView.value = "genesis");

// Genesis handlers
const markDataEditable = () => setStatusMessage("鍙互淇敼淇℃伅");
const backupLocalData = () => {
  localStorage.setItem(
    "life_local_backup",
    JSON.stringify({ userInfo: userInfo.value }),
  );
  setStatusMessage("Backup saved");
};
const clearLocalData = () => {
  localStorage.removeItem("life_local_backup");
  setStatusMessage("Cleared");
};

// Simple chat
const sendMessage = (text) => {
  if (!text) return;
  appendChatMessage("user", text);
  isGeneratingAIResponse.value = true;
  const context = {
    role: currentAIRole.value,
    selectedRoute: selectedRoute.value?.title || "鏈€夋嫨璺嚎",
    selectedNode: selectedNodeData.value?.title || "褰撳墠浜虹敓鑺傜偣",
    attributes: attributes.value,
    recentImpacts: impactHistory.value.slice(0, 3),
  };
  advisorError.value = "";
  requestAdvisorReply(text, context)
    .then((result) => {
      if (result.ok) {
        appendChatMessage("ai", result.data || "Advice is temporarily unavailable. Please try again later.");
        return;
      }
      advisorError.value =
        result.error?.message || "Advisor is temporarily unavailable. Please try again later.";
      appendChatMessage("ai", advisorError.value);
      setStatusMessage(advisorError.value, "error");
    })
    .finally(() => {
      isGeneratingAIResponse.value = false;
    });
};

const selectAIRole = (role) => {
  const previousRole = currentAIRole.value;
  currentAIRole.value = role;
  currentAIDescription.value =
    roleDescMap[role] || "Decision advice based on the current node.";

  if (previousRole !== role && chatMessagesByRole.value[role].length === 0) {
    chatMessagesByRole.value[role].push({
      id: `ai_${Date.now()}`,
      role: "ai",
      content: roleGreetingsInit[role],
      time: new Date().toLocaleTimeString("zh-CN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
  }
};
const toggleVoiceInput = () => {
  isListening.value = !isListening.value;
  setStatusMessage(isListening.value ? "Voice input started" : "Voice input stopped");
};

// Minimal tree helpers
const addNode = () => {
  const parentId = selectedNode.value || "current";
  const parent = findNode(parentId);
  if (!parent) return;

  // Step 1: Get title
  const defaultTitle = `鍒嗘敮-${(parent.children?.length || 0) + 1}`;
  inputDialog.value = {
    title: "鏂板鑺傜偣",
    message: "璇疯緭鍏ヨ妭鐐规爣棰橈細",
    placeholder: "渚嬪锛氳€冭檻鍒涗笟",
    defaultValue: defaultTitle,
    inputType: "text",
    onConfirm: (title) => {
      if (!title) {
        setStatusMessage("Cancelled");
        return;
      }
      // Step 2: Get description
      inputDialog.value = {
        title: "鏂板鑺傜偣",
        message: "璇疯緭鍏ヨ妭鐐规弿杩帮細",
        placeholder: "渚嬪锛氬湪鐜版湁宸ヤ綔鍩虹涓婃帰绱㈡柊鏂瑰悜",
        defaultValue: "涓€娆℃柊鐨勫叧閿€夋嫨",
        inputType: "text",
        onConfirm: (desc) => {
          const nodeId = `node_${Date.now()}`;
          const newNode = {
            id: nodeId,
            parentId,
            title,
            description: desc || "涓€娆℃柊鐨勫叧閿€夋嫨",
            depth: (parent.depth || 1) + 1,
            timeline: new Date().toISOString(),
            children: [],
          };
          parent.children = [...(parent.children || []), nodeId];
          treeNodes.value.push(newNode);
          selectedNode.value = nodeId;
          recordAttributeHistory();
          incrementDecisionCount();
          setStatusMessage("Node added");
        },
      };
      showInputDialog.value = true;
    },
  };
  showInputDialog.value = true;
};
const zoomIn = () => {
  treeScale.value = Math.min(2, +(treeScale.value + 0.1).toFixed(2));
};
const zoomOut = () => {
  treeScale.value = Math.max(0.6, +(treeScale.value - 0.1).toFixed(2));
};
const resetView = () => {
  treeScale.value = 1;
  treeOffset.value = { x: 0, y: 0 };
};
const exportTree = () => {
  const payload = {
    exportedAt: new Date().toISOString(),
    userInfo: userInfo.value,
    treeNodes: treeNodes.value,
    attributes: attributes.value,
    savedPaths: savedPaths.value,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "life_tree_export.json";
  a.click();
  URL.revokeObjectURL(url);
  setStatusMessage("Tree exported");
};
const resetTree = () => {
  treeNodes.value = [
    {
      id: "current",
      parentId: null,
      title: "褰撳墠浜虹敓鑺傜偣",
      description: "Start from your baseline model and explore key choices.",
      depth: 1,
      timeline: new Date().toISOString(),
      children: [],
    },
  ];
  selectedNode.value = "current";
  setStatusMessage("鏍戠姸鍥惧凡閲嶇疆");
};
const startPan = (e) => {
  isPanning.value = true;
  panStart.value = {
    x: e.clientX - treeOffset.value.x,
    y: e.clientY - treeOffset.value.y,
  };
};
const onPanMove = (e) => {
  if (!isPanning.value) return;
  treeOffset.value = {
    x: e.clientX - panStart.value.x,
    y: e.clientY - panStart.value.y,
  };
};
const endPan = () => {
  isPanning.value = false;
};
const selectNode = (n) => {
  selectedNode.value = n;
  const node = findNode(n);
  if (node?.nodeType === "route" && node.route) {
    selectedRoute.value = node.route;
  }
};
const editNode = (id) => {
  const node = findNode(id);
  if (!node) return;
  inputDialog.value = {
    title: "缂栬緫鑺傜偣",
    message: "璇锋洿鏂拌妭鐐规爣棰橈細",
    placeholder: "杈撳叆鏂扮殑鑺傜偣鏍囬",
    defaultValue: node.title,
    inputType: "text",
    onConfirm: (title) => {
      if (!title) {
        setStatusMessage("Cancelled");
        return;
      }

      inputDialog.value = {
        title: "缂栬緫鑺傜偣",
        message: "璇锋洿鏂拌妭鐐规弿杩帮細",
        placeholder: "杈撳叆鏂扮殑鑺傜偣鎻忚堪",
        defaultValue: node.description || "",
        inputType: "text",
        onConfirm: (desc) => {
          node.title = title;
          node.description = desc || "";
          setStatusMessage("Node updated");
        },
      };
      showInputDialog.value = true;
    },
  };
  showInputDialog.value = true;
};
const deleteNode = (id) => {
  if (id === "current") {
    setStatusMessage("Root node cannot be deleted");
    return;
  }
  const node = findNode(id);
  if (!node) return;
  const idsToRemove = collectSubtreeIds(id);
  pruneRouteStateForRemovedNodes(idsToRemove);
  treeNodes.value = treeNodes.value.filter((n) => !idsToRemove.includes(n.id));
  const parent = findNode(node.parentId);
  if (parent)
    parent.children = (parent.children || []).filter((cid) => cid !== id);
  if (selectedNode.value === id) selectedNode.value = parent?.id || "current";
  setStatusMessage("鑺傜偣鍙婂叾瀛愬垎鏀凡鍒犻櫎");
};
const extendBranch = (id) => {
  const parent = findNode(id);
  if (!parent) return;

  inputDialog.value = {
    title: "寤朵几鍒嗘敮",
    message: "璇疯緭鍏ヨ鐢熸垚鐨勫垎鏀暟閲忥紙2-5锛夛細",
    placeholder: "杈撳叆鏁板瓧",
    defaultValue: "2",
    inputType: "number",
    onConfirm: (value) => {
      const count = Number(value || 2);
      const branchCount = Number.isFinite(count)
        ? Math.max(2, Math.min(5, count))
        : 2;
      const createdIds = [];
      for (let i = 1; i <= branchCount; i += 1) {
        const nodeId = `node_${Date.now()}_${i}`;
        const node = {
          id: nodeId,
          parentId: id,
          title: `${parent.title}-鍒嗘敮${i}`,
          description: `鍩轰簬 ${parent.title} 鐨勫垎鏀柟妗?${i}`,
          depth: (parent.depth || 1) + 1,
          timeline: new Date().toISOString(),
          children: [],
        };
        treeNodes.value.push(node);
        createdIds.push(nodeId);
      }
      parent.children = [...(parent.children || []), ...createdIds];
      recordAttributeHistory();
      incrementDecisionCount(branchCount);
      setStatusMessage(`Extended ${branchCount} branches`);
    },
  };
  showInputDialog.value = true;
};

// divergence implementations (lightweight but functional)
const generateAIRoutes = async () => {
  isGeneratingRoutes.value = true;
  routeGenerationError.value = "";
  try {
    const context = {
      selectedNode: selectedNodeData.value,
      treeNodes: treeNodes.value,
      city: userInfo.value.city,
      goals: userInfo.value.lifeGoals,
      attributes: attributes.value,
    };
    const result = await requestRoutes(userInfo.value, context);
    if (result.ok) {
      aiRoutes.value = result.data;
      const routeSource = result.meta?.[SERVICE_META_KEY.SOURCE];
      const sourceLabel =
        routeSource === SERVICE_SOURCE.MODEL
          ? "AI routes generated"
          : "Model unavailable, backend fallback routes used";
      const routeNodes = syncRoutesToTree(result.data, {
        parentId: selectedNode.value || "current",
        source: "ai",
      });
      setStatusMessage(`AI 璺嚎宸茬敓鎴愶紝骞跺悓姝ヤ负 ${routeNodes.length} 涓爲鑺傜偣`);
      setStatusMessage(`${sourceLabel}; synced ${routeNodes.length} tree nodes`);
      return;
    }

    routeGenerationError.value =
      result.error?.message || "Route generation failed. Please try again later.";
    setStatusMessage(routeGenerationError.value, "error");
  } finally {
    isGeneratingRoutes.value = false;
  }
};

const selectRoute = (route) => {
  if (!route) return;
  selectedRoute.value = route;
  const routeNode = ensureRouteNode(route, {
    parentId: selectedNode.value || "current",
    source: route.id?.startsWith("custom_") ? "custom" : "ai",
    select: true,
  });

  const routeId = route.id || `path_${Date.now()}`;
  const existingIndex = savedPaths.value.findIndex(
    (savedRoute) => savedRoute.id === routeId,
  );
  if (existingIndex >= 0) {
    savedPaths.value.splice(existingIndex, 1);
  }
  savedPaths.value.unshift({
    id: routeId,
    title: route.title,
    route,
    nodeId: routeNode?.id || null,
    date: new Date().toLocaleString(),
  });
  if (savedPaths.value.length > 12) savedPaths.value.pop();

  // Apply route impacts to attributes
  const impacts = resolveRouteAttributeDeltas(route, attributes.value);
  const changes = {};
  Object.keys(impacts).forEach((k) => {
    const targetValue = Number(impacts[k]) || 0;
    const before = attributes.value[k] || 0;
    const delta = Math.round(targetValue);
    const after = Math.max(0, Math.min(100, before + delta));
    attributes.value[k] = after;
    changes[k] = delta;
  });

  if (Object.keys(changes).length) {
    recordImpact(`閫夋嫨璺嚎锛?{route.title}`, changes);
    recordAttributeHistory();
  }
  incrementDecisionCount();

  setStatusMessage(`宸查€夋嫨璺嚎锛?{route.title}锛屽苟瀹氫綅鍒版爲鑺傜偣`);
};

const refineRoute = (index) => {
  const route = aiRoutes.value[index];
  if (!route) return;
  route.description = `${route.description}锛堢粏鍖栵細鎷嗚В涓哄搴﹁鍔ㄩ噷绋嬬锛屽苟璁剧疆鍙獙璇佹寚鏍囥€傦級`;
  route.feasibility = Math.min(100, Number(route.feasibility || 60) + 5);
  ensureRouteNode(route, { source: "ai" });
  setStatusMessage(`宸茬粏鍖栬矾绾匡細${route.title}`);
};
const replaceRoute = (index) => {
  const route = aiRoutes.value[index];
  if (!route) return;
  const parentId = removeRouteNode(route) || selectedNode.value || "current";
  const replacement = {
    id: `ai_route_replace_${Date.now()}`,
    title: `${route.title}-鏇夸唬鏂规`,
    description: "A lower-risk alternative for the same goal, validated in stages before expanding investment.",
    feasibility: Math.max(45, Number(route.feasibility || 60) - 8),
    difficulty: "涓瓑",
    benefit: route.benefit || "Balanced",
    tag: "鏇夸唬",
    tagColor: "mid",
    attributeDeltaMap: {
      career: Math.round(Math.random() * 12 - 2),
      finance: Math.round(Math.random() * 10 - 2),
      relationship: Math.round(Math.random() * 10 - 2),
      health: Math.round(Math.random() * 10 - 2),
      growth: Math.round(Math.random() * 12 - 2),
    },
    impacts: null,
  };
  aiRoutes.value.splice(index, 1, replacement);
  ensureRouteNode(replacement, { parentId, source: "ai" });
  setStatusMessage("Route replaced");
};
const toggleCompare = (route) => {
  const idx = compareRoutes.value.findIndex((r) => r.id === route.id);
  if (idx >= 0) compareRoutes.value.splice(idx, 1);
  else if (compareRoutes.value.length < 2) compareRoutes.value.push(route);
  else {
    compareRoutes.value.shift();
    compareRoutes.value.push(route);
  }

  if (compareRoutes.value.length === 2) {
    const [a, b] = compareRoutes.value;
    const deltas = Object.keys(attributes.value).map((k) => {
      const va = Number(getRoutePreviewValues(a)?.[k] || 0);
      const vb = Number(getRoutePreviewValues(b)?.[k] || 0);
      return `${axisLabelMap.value[k]}:${va >= vb ? `${a.title}浼?+${va - vb})` : `${b.title}浼?+${vb - va})`}`;
    });
    setStatusMessage(`鍙岃矾寰勫姣旓細${deltas.join(" / ")}`);
  }
};
const addCustomRoute = (route) => {
  const title = String(route?.title || "").trim();
  if (!title) {
    setStatusMessage("璇峰厛濉啓璺嚎鍚嶇О");
    return;
  }
  const desc = String(route?.description || "").trim();
  const feasibility = Math.max(
    0,
    Math.min(100, Number(route?.feasibility || 50)),
  );
  const custom = {
    id: `custom_${Date.now()}`,
    title,
    description:
      desc ||
      (uploadedDocText.value
        ? `鏂囨。鎽樿锛?{uploadedDocText.value.slice(0, 80)}...`
        : "Custom route"),
    feasibility,
    difficulty: route?.difficulty || "涓瓑",
    benefit: route?.benefit || "涓瓑",
    attributeDeltaMap: {
      career: Math.round((feasibility - 50) / 8),
      finance: Math.round((feasibility - 50) / 10),
      relationship: Math.round(Math.random() * 10 - 3),
      health: Math.round(Math.random() * 8 - 2),
      growth: Math.round(Math.random() * 14 - 3),
    },
    impacts: null,
    sourceFile: uploadedPlanMeta.value?.name || null,
  };
  customRoutes.value.unshift(custom);
  const routeNode = ensureRouteNode(custom, {
    parentId: selectedNode.value || "current",
    source: "custom",
  });
  setStatusMessage(
    routeNode ? "鑷畾涔夎矾绾垮凡娣诲姞锛屽苟鍚屾鍒拌妭鐐规爲" : "鑷畾涔夎矾绾垮凡娣诲姞",
  );
};
const removeCustomRoute = (index) => {
  const [removedRoute] = customRoutes.value.splice(index, 1);
  removeRouteNode(removedRoute);
  setStatusMessage("宸插垹闄よ嚜瀹氫箟璺嚎");
};
const handleFileUpload = async (event) => {
  const file = event?.target?.files?.[0];
  if (!file) return;

  try {
    const result = await requestPlanningFileExtraction(file);
    if (!result.ok) {
      uploadedDocText.value = "";
      uploadedPlanMeta.value = null;
      setStatusMessage(
        result.error?.message || "File reading failed. Please try another file.",
        "error",
      );
      return;
    }

    const { text, meta } = result.data;
    uploadedDocText.value = text;
    uploadedPlanMeta.value = meta;
    setStatusMessage(`宸叉帴鍏ユ枃浠讹細${file.name}`);
  } finally {
    if (event?.target) {
      event.target.value = "";
    }
  }
};
const buildMedia = (type, title) => ({
  id: `${type}_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
  type,
  title,
  description: `Based on ${selectedRoute.value?.title || "current route"}`,
  time: new Date().toLocaleString(),
});
const generateComic = () => {
  generatedMedia.value.unshift(buildMedia("comic", "浜虹敓鍒嗘敮婕敾"));
  setStatusMessage("Comic material generated");
};
const generateVideo = () => {
  generatedMedia.value.unshift(buildMedia("video", "15绉掑垎鏀煭瑙嗛"));
  setStatusMessage("鐭棰戠礌鏉愬凡鐢熸垚");
};
const generatePoster = () => {
  generatedMedia.value.unshift(buildMedia("poster", "Timeline poster"));
  setStatusMessage("Poster material generated");
};
const toggleMode = () => {
  mode.value = mode.value === "ai" ? "custom" : "ai";
};

const handleComparisonRouteSelected = (route) => {
  selectRoute(route);
};

const handleComparisonConfirm = () => {
  if (
    compareRoutes.value.length > 0 &&
    (!selectedRoute.value ||
      !compareRoutes.value.some(
        (route) => route.id === selectedRoute.value?.id,
      ))
  ) {
    selectRoute(compareRoutes.value[0]);
  }
  goToReflection();
};

const showRadarChart = () => {
  currentChart.value = "radar";
};
const showTrendChart = () => {
  currentChart.value = "trend";
};
const showImpactTrace = () => {
  currentChart.value = "impact";
};

const refreshSocialData = () => {
  socialFeed.value = [];
  setStatusMessage("Social data cleared");
};

const restartJourney = async () => {
  restartCount.value += 1;
  decisionCount.value = 0;
  journeyStartedAt.value = Date.now();
  resetJourneyState({
    currentView,
    isCardFlipped,
    currentScenario,
    treeNodes,
    selectedNode,
    treeScale,
    treeOffset,
    panStart,
    isPanning,
    aiRoutes,
    compareRoutes,
    customRoutes,
    selectedRoute,
    generatedMedia,
    mode,
    uploadedDocText,
    uploadedPlanMeta,
    attributes,
    attributeHistory,
    impactHistory,
    currentChart,
    socialFeed,
    chatMessages,
    chatInput,
    isListening,
    currentAIRole,
    currentAIDescription,
    savedPaths,
    regretLevel,
    regretText,
    regretAnalysis,
    aiAdvice,
    defaultAiRoutes,
    defaultImpactHistory,
    defaultAttributeHistory,
    defaultAttributes,
    defaultScenario,
    defaultTreeNodes,
    defaultAIRole: DEFAULT_AI_ROLE,
    defaultAIDescription: DEFAULT_AI_DESCRIPTION,
    userCity: userInfo.value.city,
  });
  computeRegret();
  setStatusMessage("Started a new journey");

  await generateAIRoutes();
};

onMounted(() => {
  const backup = localStorage.getItem("life_local_backup");
  if (backup) {
    try {
      const parsed = JSON.parse(backup);
      if (parsed?.userInfo)
        userInfo.value = { ...userInfo.value, ...parsed.userInfo };
    } catch {
      // ignore invalid backup
    }
  }
  computeRegret();
});
</script>

<style scoped>
.main-content {
  padding: var(--space-lg);
  max-width: 1200px;
  margin: 0 auto;
}
.status-toast {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1200;
  max-width: min(360px, calc(100vw - 48px));
  padding: 0.65rem 0.9rem;
  background: rgba(255, 248, 235, 0.96);
  color: #3b2a18;
  border-radius: 12px;
  border: 1px solid rgba(212, 165, 116, 0.35);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.18);
  text-align: center;
  line-height: 1.4;
  font-size: 0.88rem;
  pointer-events: none;
}
.status-toast.status-error {
  background: rgba(255, 107, 107, 0.16);
  color: #ffd7d7;
  border: 1px solid rgba(255, 107, 107, 0.4);
}
.status-toast.status-success {
  background: rgba(0, 208, 132, 0.16);
  color: #dff9ee;
  border: 1px solid rgba(0, 208, 132, 0.35);
}
.title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}
.view-loading {
  min-height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: var(--space-lg);
}
.view-loading__spinner {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 3px solid rgba(212, 165, 116, 0.25);
  border-top-color: var(--color-accent-gold);
  animation: view-spin 0.9s linear infinite;
}
.view-loading__text {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
}
@keyframes view-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
