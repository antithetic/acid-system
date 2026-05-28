import {visionTool} from '@sanity/vision'
import {Cannabis, BrainCog} from 'lucide-react'
import {defineConfig} from 'sanity'
import {media} from 'sanity-plugin-media'
import {references, referencesView} from 'sanity-plugin-references'
import {singletonTools} from 'sanity-plugin-singleton-management'
import {structureTool} from 'sanity/structure'
import {tags} from 'sanity-plugin-tags-v4'

import {webhooksTrigger} from 'sanity-plugin-webhooks-trigger'

import {acidSystemsSchema, notesSchema} from './schema'

export const sharedConfig = {
  projectId: 'nmhp3u9m',
  dataset: 'production',
}

export const sharedPlugins = {
  plugins: [
    structureTool({
      defaultDocumentNode: (S) =>
        S.document().views([S.view.form(), referencesView(S)]),
    }),
    visionTool(),
    webhooksTrigger(),
    media(),
    references(),
    tags(),
    singletonTools(),
  ],
}
export default defineConfig([
  {
    basePath: '/acid-systems',
    name: 'acid-systems',
    title: 'Acid Systems',
    icon: Cannabis,

    ...sharedConfig,
    ...sharedPlugins,

    schema: {
      types: [...acidSystemsSchema],
    },
  },

  {
    basePath: '/notes',
    name: 'notes',
    title: 'Notes',
    icon: BrainCog,

    ...sharedConfig,
    ...sharedPlugins,

    schema: {
      types: [...notesSchema],
    },
  },
])
