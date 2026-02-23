import {defineField, defineType} from 'sanity'

export const pricingPageType = defineType({
  name: 'pricingPage',
  title: 'Pricing Page',
  type: 'document',
  fields: [
    defineField({name: 'slug', type: 'string', initialValue: 'pricing', validation: (Rule) => Rule.required()}),
    defineField({name: 'seo', type: 'seo', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'content',
      type: 'object',
      fields: [
        defineField({
          name: 'pricing',
          type: 'object',
          fields: [
            defineField({name: 'eyebrow', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'subtitle', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
            defineField({name: 'tiers', type: 'array', of: [{type: 'pricingTier'}], validation: (Rule) => Rule.required()}),
            defineField({name: 'footnote', type: 'string'}),
          ],
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'faq',
          type: 'object',
          fields: [
            defineField({name: 'eyebrow', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'subtitle', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
            defineField({name: 'items', type: 'array', of: [{type: 'faqItem'}], validation: (Rule) => Rule.required()}),
          ],
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'contact',
          type: 'object',
          fields: [
            defineField({name: 'eyebrow', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'subtitle', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
            defineField({name: 'email', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'location', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'responseTime', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'socialLinks', type: 'array', of: [{type: 'navLink'}], validation: (Rule) => Rule.required()}),
          ],
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'slug'},
    prepare: ({title}) => ({title: `Pricing Page: ${title || 'pricing'}`}),
  },
})
