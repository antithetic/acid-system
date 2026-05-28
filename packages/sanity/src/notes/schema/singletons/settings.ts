import {defineField, defineType} from 'sanity'
import {Settings} from 'lucide-react'

export const notesSettings = defineType({
  name: 'notesSettings',
  title: 'Settings',
  type: 'document',
  icon: Settings,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
