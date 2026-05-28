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
