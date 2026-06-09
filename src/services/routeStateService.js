export const buildFallbackRouteImpacts = (feasibility = 60) => {
  const safeFeasibility = Number(feasibility) || 60;
  return {
    career: Math.round((safeFeasibility - 60) / 4),
    finance: Math.round((safeFeasibility - 55) / 5),
    relationship: Math.round((safeFeasibility - 65) / 8),
    health: Math.round((60 - safeFeasibility) / 10),
    growth: Math.round((safeFeasibility - 58) / 4),
  };
};

export const getRoutePreviewValues = (route) => {
  if (!route) return buildFallbackRouteImpacts();
  if (route.impactFactors) return route.impactFactors;
  if (route.attributeDeltaMap) return route.attributeDeltaMap;
  if (route.impacts) return route.impacts;
  return buildFallbackRouteImpacts(route.feasibility);
};

export const getRouteAttributeDeltas = (route, currentAttributes = {}) => {
  if (!route) return {};

  if (route.attributeDeltaMap) {
    return route.attributeDeltaMap;
  }

  if (route.impactFactors) {
    const deltas = {};
    Object.keys(route.impactFactors).forEach((key) => {
      const targetValue = Number(route.impactFactors[key]) || 0;
      const currentValue = currentAttributes[key] || 0;
      deltas[key] = Math.round(targetValue - currentValue);
    });
    return deltas;
  }

  return getRoutePreviewValues(route);
};

export const buildClientFallbackRoutes = (userInfo = {}, context = {}) => {
  const city = userInfo.city || context.city || "当前城市";
  const goal = userInfo.lifeGoals || context.goals || "长期目标";
  const selectedNode = context?.selectedNode || context?.selectedNodeData || {};
  const currentNodeTitle = selectedNode.title || "当前节点";
  const selectedNodeId = selectedNode.id || "current";
  const selectedDepth = Number(selectedNode.depth || 1);
  const treeNodes = Array.isArray(context?.treeNodes) ? context.treeNodes : [];
  const childCount = treeNodes.filter((node) => node.parentId === selectedNodeId).length;
  const seed = `${selectedNodeId}_${selectedDepth}_${childCount}_${Date.now()}`;
  const routeTypes = [
    {
      key: "stable",
      title: "稳态深化",
      description: `围绕“${currentNodeTitle}”继续深耕，在${city}保留现有资源和安全边界，用 3-6 个月验证下一步机会。目标聚焦：${goal}。`,
      feasibility: 82,
      difficulty: "中等",
      benefit: "稳定提升",
      personality: "稳健型",
      attributeDeltaMap: { career: 8, finance: 5, relationship: 2, health: 1, growth: 7 },
      milestones: ["明确一个可衡量目标", "完成一次能力补强", "拿到阶段性反馈"],
      opportunities: ["风险较低", "资源延续性强"],
      risks: ["成长速度可能偏慢", "容易被惯性锁住"],
    },
    {
      key: "growth",
      title: "跃迁试探",
      description: `从“${currentNodeTitle}”向外扩展，主动寻找更高平台、跨领域项目或关键人脉，用更密集的行动换取成长加速度。`,
      feasibility: 68,
      difficulty: "中高",
      benefit: "高成长",
      personality: "进取型",
      attributeDeltaMap: { career: 12, finance: 4, relationship: 5, health: -3, growth: 14 },
      milestones: ["筛选 3 个外部机会", "完成一次作品或案例展示", "做出是否转向的决策"],
      opportunities: ["成长速度快", "打开新资源面"],
      risks: ["短期压力上升", "结果不确定性更高"],
    },
    {
      key: "experiment",
      title: "低成本实验",
      description: `不立即押注单一路径，而是把“${currentNodeTitle}”拆成小实验：副业、学习、作品、访谈或城市机会都先小规模试跑。`,
      feasibility: 74,
      difficulty: "中等",
      benefit: "弹性收益",
      personality: "平衡型",
      attributeDeltaMap: { career: 6, finance: 2, relationship: 4, health: 0, growth: 10 },
      milestones: ["设计一个两周实验", "记录结果和成本", "保留、放大或放弃"],
      opportunities: ["回撤成本低", "能积累真实反馈"],
      risks: ["需要持续复盘", "前期收益不明显"],
    },
  ];

  return routeTypes.map((route, index) =>
    normalizeGeneratedRoute(
      {
        ...route,
        id: `fallback_route_${route.key}_${seed}_${index + 1}`,
        title: route.title,
        feasibility: Math.max(35, Math.min(92, route.feasibility - selectedDepth + childCount)),
      },
      index,
    ),
  );
};

const normalizeImpactFactors = (factors) => {
  if (!factors || typeof factors !== "object") return null;

  const normalized = {};
  const keys = ["career", "finance", "relationship", "health", "growth"];

  keys.forEach((key) => {
    const value = Number(factors[key]);
    if (!isNaN(value)) {
      if (value < 1) {
        normalized[key] = Math.round(value * 100);
      } else if (value >= 1 && value < 10) {
        normalized[key] = Math.round(value * 10);
      } else {
        normalized[key] = value;
      }
    }
  });

  return Object.keys(normalized).length > 0 ? normalized : null;
};

export const normalizeGeneratedRoute = (route, index = 0) => {
  const rawFeasibility = Number(route.feasibility ?? 60);
  const feasibility =
    rawFeasibility < 10 ? Math.round(rawFeasibility * 100) : rawFeasibility;

  const normalizedImpactFactors = normalizeImpactFactors(route.impactFactors);
  const fallbackImpacts = buildFallbackRouteImpacts(feasibility);

  return {
    id: route.id || `ai_route_${Date.now()}_${index}`,
    title: route.title || route.name || `AI路线${index + 1}`,
    description: route.description || "暂无描述",
    feasibility,
    difficulty: route.difficulty || "中等",
    benefit: route.benefit || "中",
    tag: route.personality || "推荐",
    tagColor: feasibility >= 75 ? "high" : feasibility >= 55 ? "mid" : "low",
    attributeDeltaMap:
      route.attributeDeltaMap ||
      route.impacts ||
      normalizedImpactFactors ||
      fallbackImpacts,
    impacts:
      route.impacts ||
      route.attributeDeltaMap ||
      normalizedImpactFactors ||
      fallbackImpacts,
    impactFactors:
      normalizedImpactFactors ||
      route.attributeDeltaMap ||
      route.impacts ||
      null,
    stages: route.stages || [],
    milestones: route.milestones || [],
    opportunities: route.opportunities || [],
    risks: route.risks || [],
  };
};
