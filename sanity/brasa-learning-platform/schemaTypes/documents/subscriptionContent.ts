import {defineField, defineType} from 'sanity'

export const subscriptionContentType = defineType({
  name: 'subscriptionContent',
  title: 'Subscription Content',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'gumroadProductId', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', type: 'text'}),
    defineField({name: 'thumbnail', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'pdfFile',
      type: 'file',
      options: {accept: 'application/pdf'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'videoFile', type: 'file', options: {accept: 'video/*'}}),
    defineField({name: 'externalVideoUrl', type: 'url'}),
    defineField({name: 'order', type: 'number'}),
  ],
})
