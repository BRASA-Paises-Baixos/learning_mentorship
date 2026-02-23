import {defineField, defineType} from 'sanity'

export const subscriptionContentType = defineType({
  name: 'subscriptionContent',
  title: 'Subscription Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gumroadProductId',
      title: 'Gumroad Product ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF File',
      type: 'file',
      options: {accept: 'application/pdf'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      options: {accept: 'video/*'},
    }),
    defineField({
      name: 'externalVideoUrl',
      title: 'External Video URL',
      type: 'url',
    }),
    defineField({name: 'order', title: 'Order', type: 'number'}),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'gumroadProductId',
      media: 'thumbnail',
    },
  },
})
