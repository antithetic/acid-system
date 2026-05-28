import {defineField, defineType} from 'sanity'
import {BlockquoteIcon} from '@sanity/icons'

export default defineType({
  name: 'quoteBlock',
  title: 'Quote Block',
  type: 'object',
  icon: BlockquoteIcon,
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
    }),

    defineField({
      name: 'citation',
      title: 'Citation',
      type: 'string',
    }),
  ],
})
