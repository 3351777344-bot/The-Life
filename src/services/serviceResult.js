export const createSuccessResult = (data, meta = {}) => ({
  ok: true,
  data,
  error: null,
  meta
})

export const createErrorResult = (message, meta = {}) => ({
  ok: false,
  data: null,
  error: {
    message,
    code: meta.code || 'UNKNOWN_ERROR'
  },
  meta
})
