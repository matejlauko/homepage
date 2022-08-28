import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkBreaks from 'remark-breaks'

const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.md$/, ''),
  },
  perex: {
    type: 'string',
    resolve: (doc) => truncate(doc.body.html.replace(/(<\/?\w+>)|\n/g, ''), 140),
  },
}

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
  },
  computedFields,
}))

export const Thought = defineDocumentType(() => ({
  name: 'Thought',
  filePathPattern: `thoughts/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Thought],
  markdown: {
    remarkPlugins: [remarkBreaks],
  },
})

const truncate = (str, n) => {
  if (str.length <= n) {
    return str
  }

  const subString = str.slice(0, n - 1)

  return subString.slice(0, subString.lastIndexOf(' ')) + '…'
}
