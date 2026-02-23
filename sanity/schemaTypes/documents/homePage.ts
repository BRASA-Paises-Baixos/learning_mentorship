import {defineField, defineType} from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({name: 'slug', type: 'string', initialValue: 'home', validation: (Rule) => Rule.required()}),
    defineField({name: 'seo', type: 'seo', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'content',
      type: 'object',
      fields: [
        defineField({
          name: 'hero',
          type: 'object',
          fields: [
            defineField({name: 'eyebrow', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'subtitle', type: 'text', rows: 4, validation: (Rule) => Rule.required()}),
            defineField({name: 'primaryCta', type: 'ctaLink', validation: (Rule) => Rule.required()}),
            defineField({name: 'secondaryCta', type: 'ctaLink', validation: (Rule) => Rule.required()}),
            defineField({name: 'highlights', type: 'array', of: [{type: 'string'}], validation: (Rule) => Rule.required()}),
            defineField({name: 'stats', type: 'array', of: [{type: 'stat'}], validation: (Rule) => Rule.required()}),
          ],
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'about',
          type: 'object',
          fields: [
            defineField({name: 'eyebrow', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'body', type: 'text', rows: 4, validation: (Rule) => Rule.required()}),
            defineField({name: 'bullets', type: 'array', of: [{type: 'string'}], validation: (Rule) => Rule.required()}),
          ],
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'mentorship',
          type: 'object',
          fields: [
            defineField({name: 'eyebrow', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'body', type: 'text', rows: 4, validation: (Rule) => Rule.required()}),
            defineField({name: 'steps', type: 'array', of: [{type: 'mentorshipStep'}], validation: (Rule) => Rule.required()}),
          ],
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'mentors',
          type: 'object',
          fields: [
            defineField({name: 'eyebrow', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'subtitle', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
            defineField({name: 'mentors', type: 'array', of: [{type: 'mentor'}], validation: (Rule) => Rule.required()}),
          ],
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'products',
          type: 'object',
          fields: [
            defineField({name: 'eyebrow', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'subtitle', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
            defineField({name: 'products', type: 'array', of: [{type: 'product'}], validation: (Rule) => Rule.required()}),
          ],
          validation: (Rule) => Rule.required(),
        }),
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
          name: 'impact',
          type: 'object',
          fields: [
            defineField({name: 'eyebrow', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'subtitle', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
            defineField({name: 'metrics', type: 'array', of: [{type: 'impactMetric'}], validation: (Rule) => Rule.required()}),
            defineField({name: 'initiatives', type: 'array', of: [{type: 'string'}], validation: (Rule) => Rule.required()}),
          ],
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'cta',
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'subtitle', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
            defineField({name: 'primaryCta', type: 'ctaLink', validation: (Rule) => Rule.required()}),
            defineField({name: 'secondaryCta', type: 'ctaLink', validation: (Rule) => Rule.required()}),
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
    prepare: ({title}) => ({title: `Home Page: ${title || 'home'}`}),
  },
})
