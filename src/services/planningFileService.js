const TEXT_FILE_EXTENSIONS = new Set(['txt', 'md', 'json', 'csv', 'tsv'])
const OFFICE_FILE_EXTENSIONS = new Set(['doc', 'docx'])
const MAX_TEXT_LENGTH = 4000

const getFileExtension = (filename = '') => {
  const parts = String(filename).toLowerCase().split('.')
  return parts.length > 1 ? parts.pop() : ''
}

const normalizeWhitespace = (text = '') => String(text).replace(/\s+/g, ' ').trim()

const buildFallbackSummary = (file, extension) => {
  const fileName = file?.name || '未命名文件'

  if (extension === 'docx') {
    return `已上传规划文档《${fileName}》。当前前端版本暂未对 .docx 做浏览器内完整正文提取，将先记录文件元信息供路线描述使用。`
  }

  if (extension === 'doc') {
    return `已上传 Word 文档《${fileName}》。当前前端版本暂未对旧版 .doc 做浏览器内正文提取，将先记录文件元信息供路线描述使用。`
  }

  return `已上传文件《${fileName}》，当前以前端兜底摘要形式接入。`
}

export const extractPlanningFileContent = async (file) => {
  if (!file) {
    throw new Error('未检测到文件')
  }

  const extension = getFileExtension(file.name)
  const baseMeta = {
    name: file.name,
    extension,
    size: file.size,
    uploadedAt: new Date().toISOString()
  }

  if (TEXT_FILE_EXTENSIONS.has(extension)) {
    const rawText = await file.text()
    const normalizedText = normalizeWhitespace(rawText).slice(0, MAX_TEXT_LENGTH)

    return {
      text: normalizedText,
      meta: {
        ...baseMeta,
        extractionMode: 'text',
        summary: normalizedText
          ? `已提取 ${file.name} 的文本内容，可作为自定义路线参考。`
          : `已上传 ${file.name}，但文件内容为空。`
      }
    }
  }

  if (OFFICE_FILE_EXTENSIONS.has(extension)) {
    return {
      text: buildFallbackSummary(file, extension),
      meta: {
        ...baseMeta,
        extractionMode: 'metadata-only',
        summary: buildFallbackSummary(file, extension)
      }
    }
  }

  throw new Error(`暂不支持 .${extension || 'unknown'} 文件，请上传 txt、md、json、csv、tsv、doc 或 docx`)
}
