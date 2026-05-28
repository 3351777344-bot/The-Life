import {
  generateRoute,
  getAIAdvice,
  generateScenario,
  calculateRegret,
} from "./ollamaService";
import {
  requestBackendScenario,
  requestBackendRoutes,
  requestBackendAdvisorReply,
  requestBackendRegretReport,
  requestBackendPlanningFileExtraction,
} from "./backendService";
import { extractPlanningFileContent } from "./planningFileService";
import {
  getRouteAttributeDeltas,
  normalizeGeneratedRoute,
} from "./routeStateService";
import { buildRegretReportPayload } from "./journeyStateService";
import { createSuccessResult, createErrorResult } from "./serviceResult";
import {
  SERVICE_MODE,
  activeServiceMode,
  getServiceModeLabel,
} from "./serviceConfig";
import {
  SERVICE_ERROR_CODE,
  SERVICE_META_KEY,
  SERVICE_SOURCE,
} from "./serviceContracts";

const isBackendApiMode = activeServiceMode === SERVICE_MODE.BACKEND_API;
const TEXT_FILE_EXTENSIONS = new Set(["txt", "md", "json", "csv", "tsv"]);

const getFileExtension = (filename = "") => {
  const parts = String(filename).toLowerCase().split(".");
  return parts.length > 1 ? parts.pop() : "";
};

const normalizeBackendResult = (result, fallbackMessage, errorCode) => {
  if (result?.ok) {
    return result;
  }

  return createErrorResult(result?.error?.message || fallbackMessage, {
    code: result?.error?.code || errorCode,
    ...(result?.meta || {}),
  });
};

export const requestScenario = async (userInfo) => {
  if (isBackendApiMode) {
    try {
      const response = await requestBackendScenario(userInfo);
      return normalizeBackendResult(
        response,
        "场景生成失败，请稍后重试。",
        SERVICE_ERROR_CODE.SCENARIO_REQUEST_FAILED,
      );
    } catch {
      return createErrorResult("场景生成失败，请稍后重试。", {
        code: SERVICE_ERROR_CODE.SCENARIO_REQUEST_FAILED,
        [SERVICE_META_KEY.MODE]: activeServiceMode,
        [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel(),
      });
    }
  }

  try {
    const scenario = await generateScenario(userInfo);
    return createSuccessResult(scenario, {
      [SERVICE_META_KEY.SOURCE]: SERVICE_SOURCE.MODEL,
      [SERVICE_META_KEY.MODE]: activeServiceMode,
      [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel(),
    });
  } catch {
    return createErrorResult("场景生成失败，请稍后重试。", {
      code: SERVICE_ERROR_CODE.SCENARIO_REQUEST_FAILED,
      [SERVICE_META_KEY.MODE]: activeServiceMode,
      [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel(),
    });
  }
};

export const requestRoutes = async (userInfo, context) => {
  if (isBackendApiMode) {
    try {
      const response = await requestBackendRoutes(userInfo, context);

      if (response?.ok) {
        const routesData = response.data;
        let routesArray = [];

        if (Array.isArray(routesData)) {
          routesArray = routesData;
        } else if (
          routesData &&
          typeof routesData === "object" &&
          Array.isArray(routesData.routes)
        ) {
          routesArray = routesData.routes;
        }

        if (routesArray.length > 0) {
          const normalizedRoutes = routesArray
            .slice(0, 5)
            .map((route, index) => normalizeGeneratedRoute(route, index));
          return createSuccessResult(normalizedRoutes, {
            [SERVICE_META_KEY.SOURCE]: SERVICE_SOURCE.MODEL,
            [SERVICE_META_KEY.COUNT]: normalizedRoutes.length,
            [SERVICE_META_KEY.MODE]: activeServiceMode,
            [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel(),
          });
        }
      }
      return normalizeBackendResult(
        response,
        "路线生成失败，请稍后重试。",
        SERVICE_ERROR_CODE.ROUTE_REQUEST_FAILED,
      );
    } catch (error) {
      return createErrorResult("路线生成失败，请稍后重试。", {
        code: SERVICE_ERROR_CODE.ROUTE_REQUEST_FAILED,
        [SERVICE_META_KEY.MODE]: activeServiceMode,
        [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel(),
      });
    }
  }

  try {
    const response = await generateRoute(userInfo, context);
    const routes = Array.isArray(response?.routes) ? response.routes : [];
    return createSuccessResult(
      routes
        .slice(0, 5)
        .map((route, index) => normalizeGeneratedRoute(route, index)),
      {
        [SERVICE_META_KEY.SOURCE]: SERVICE_SOURCE.MODEL,
        [SERVICE_META_KEY.COUNT]: routes.length,
        [SERVICE_META_KEY.MODE]: activeServiceMode,
        [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel(),
      },
    );
  } catch {
    return createErrorResult("路线生成失败，请稍后重试。", {
      code: SERVICE_ERROR_CODE.ROUTE_REQUEST_FAILED,
      [SERVICE_META_KEY.MODE]: activeServiceMode,
      [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel(),
    });
  }
};

export const requestAdvisorReply = async (question, context) => {
  if (isBackendApiMode) {
    try {
      const response = await requestBackendAdvisorReply(question, context);
      return normalizeBackendResult(
        response,
        "顾问暂时无法回复，请稍后重试。",
        SERVICE_ERROR_CODE.ADVISOR_REQUEST_FAILED,
      );
    } catch {
      return createErrorResult("顾问暂时无法回复，请稍后重试。", {
        code: SERVICE_ERROR_CODE.ADVISOR_REQUEST_FAILED,
        [SERVICE_META_KEY.MODE]: activeServiceMode,
        [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel(),
      });
    }
  }

  try {
    const reply = await getAIAdvice(question, context);
    return createSuccessResult(reply, {
      [SERVICE_META_KEY.SOURCE]: SERVICE_SOURCE.MODEL,
      [SERVICE_META_KEY.MODE]: activeServiceMode,
      [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel(),
    });
  } catch {
    return createErrorResult("顾问暂时无法回复，请稍后重试。", {
      code: SERVICE_ERROR_CODE.ADVISOR_REQUEST_FAILED,
      [SERVICE_META_KEY.MODE]: activeServiceMode,
      [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel(),
    });
  }
};

export const requestRegretReport = async (payload) => {
  if (isBackendApiMode) {
    try {
      const reportPayload = buildRegretReportPayload(payload);
      const response = await requestBackendRegretReport(reportPayload);
      return normalizeBackendResult(
        response,
        "终局报告生成失败，请稍后重试。",
        SERVICE_ERROR_CODE.REPORT_REQUEST_FAILED,
      );
    } catch {
      return createErrorResult("终局报告生成失败，请稍后重试。", {
        code: SERVICE_ERROR_CODE.REPORT_REQUEST_FAILED,
        [SERVICE_META_KEY.MODE]: activeServiceMode,
        [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel(),
      });
    }
  }

  try {
    const reportPayload = buildRegretReportPayload(payload);
    const report = await calculateRegret(reportPayload);
    return createSuccessResult(report, {
      [SERVICE_META_KEY.SOURCE]: SERVICE_SOURCE.MODEL,
      [SERVICE_META_KEY.MODE]: activeServiceMode,
      [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel(),
    });
  } catch {
    return createErrorResult("终局报告生成失败，请稍后重试。", {
      code: SERVICE_ERROR_CODE.REPORT_REQUEST_FAILED,
      [SERVICE_META_KEY.MODE]: activeServiceMode,
      [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel(),
    });
  }
};

export const requestPlanningFileExtraction = async (file) => {
  if (isBackendApiMode) {
    try {
      const extension = getFileExtension(file?.name);
      const payload = {
        name: file?.name,
        size: file?.size,
        extension,
      };

      if (TEXT_FILE_EXTENSIONS.has(extension)) {
        payload.text = await file.text();
      }

      const response = await requestBackendPlanningFileExtraction(payload);
      return normalizeBackendResult(
        response,
        "文件处理失败，请更换文件后重试。",
        SERVICE_ERROR_CODE.FILE_EXTRACTION_FAILED,
      );
    } catch (error) {
      return createErrorResult(
        error?.message || "文件处理失败，请更换文件后重试。",
        {
          code: SERVICE_ERROR_CODE.FILE_EXTRACTION_FAILED,
          [SERVICE_META_KEY.MODE]: activeServiceMode,
          [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel(),
        },
      );
    }
  }

  try {
    const result = await extractPlanningFileContent(file);
    return createSuccessResult(result, {
      [SERVICE_META_KEY.SOURCE]: SERVICE_SOURCE.FILE,
      [SERVICE_META_KEY.EXTRACTION_MODE]:
        result?.meta?.extractionMode || "unknown",
      [SERVICE_META_KEY.MODE]: activeServiceMode,
      [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel(),
    });
  } catch (error) {
    return createErrorResult(
      error?.message || "文件处理失败，请更换文件后重试。",
      {
        code: SERVICE_ERROR_CODE.FILE_EXTRACTION_FAILED,
        [SERVICE_META_KEY.MODE]: activeServiceMode,
        [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel(),
      },
    );
  }
};

export const resolveRouteAttributeDeltas = (route, currentAttributes) =>
  getRouteAttributeDeltas(route, currentAttributes);
