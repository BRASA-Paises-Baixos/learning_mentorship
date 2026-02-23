import {defineField, defineType} from 'sanity'

export const libraryItemType = defineType({
  name: 'libraryItem',
  title: 'Library Item',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'category', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'type', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', type: 'text', rows: 4}),
    defineField({name: 'thumbnail', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'gallery',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      options: {layout: 'grid'},
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'thumbnail',
    },
  },
})
