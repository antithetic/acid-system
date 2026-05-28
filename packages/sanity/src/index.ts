import {visionTool} from '@sanity/vision'
import {Cannabis} from 'lucide-react'
import {defineConfig} from 'sanity'
import {media} from 'sanity-plugin-media'
import {references} from 'sanity-plugin-references'
import {structureTool} from 'sanity/structure'
import {webhooksTrigger} from 'sanity-plugin-webhooks-trigger'

import {schemaTypes} from './schema'

export default defineConfig({
  name: 'acid-systems',
  title: 'Acid Systems',

  projectId: 'nmhp3u9m',
  dataset: 'production',
  icon: Cannabis,

  plugins: [
    structureTool(),
    visionTool(),
    webhooksTrigger(),
    media(),
    references(),
  ],

  schema: {
    types: schemaTypes,
  },
})
