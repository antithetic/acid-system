import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {webhooksTrigger} from 'sanity-plugin-webhooks-trigger'
import {schemaTypes} from './schema'

export default defineConfig({
  name: 'acid-systems',
  title: 'Acid Systems',

  projectId: 'nmhp3u9m',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), webhooksTrigger()],

  schema: {
    types: schemaTypes,
  },
})
