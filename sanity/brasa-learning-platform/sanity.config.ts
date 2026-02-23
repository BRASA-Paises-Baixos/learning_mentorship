import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'brasa learning platform',

  projectId: 'evuraf8q',
  dataset: 'brasa',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
