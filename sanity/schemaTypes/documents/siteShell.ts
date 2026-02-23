import {defineField, defineType} from 'sanity'

export const siteShellType = defineType({
  name: 'siteShell',
  title: 'Site Shell',
  type: 'document',
  fields: [
    defineField({name: 'slug', type: 'string', initialValue: 'default', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'navigation',
      type: 'object',
      fields: [
        defineField({
          name: 'brand',
          type: 'object',
          fields: [
            defineField({name: 'name', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'tagline', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'monogram', type: 'string', validation: (Rule) => Rule.required()}),
          ],
        }),
        defineField({name: 'links', type: 'array', of: [{type: 'navLink'}], validation: (Rule) => Rule.required()}),
        defineField({name: 'cta', type: 'ctaLink', validation: (Rule) => Rule.required()}),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'footer',
      type: 'object',
      fields: [
        defineField({name: 'summary', type: 'text', rows: 4, validation: (Rule) => Rule.required()}),
        defineField({name: 'links', type: 'array', of: [{type: 'navLink'}], validation: (Rule) => Rule.required()}),
        defineField({name: 'legal', type: 'string', validation: (Rule) => Rule.required()}),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'slug'},
    prepare: ({title}) => ({title: `Site Shell: ${title || 'default'}`}),
  },
})
