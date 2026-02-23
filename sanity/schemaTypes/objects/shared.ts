import {defineField, defineType} from 'sanity'

export const navLinkType = defineType({
  name: 'navLink',
  title: 'Nav Link',
  type: 'object',
  fields: [
    defineField({name: 'label', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'href', type: 'string', validation: (Rule) => Rule.required()}),
  ],
})

export const ctaLinkType = defineType({
  name: 'ctaLink',
  title: 'CTA Link',
  type: 'object',
  fields: [
    defineField({name: 'label', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'href', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'variant',
      type: 'string',
      options: {list: ['primary', 'secondary', 'ghost']},
      initialValue: 'primary',
    }),
  ],
})

export const seoType = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
  ],
})

export const statType = defineType({
  name: 'stat',
  title: 'Stat',
  type: 'object',
  fields: [
    defineField({name: 'label', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'value', type: 'string', validation: (Rule) => Rule.required()}),
  ],
})

export const mentorshipStepType = defineType({
  name: 'mentorshipStep',
  title: 'Mentorship Step',
  type: 'object',
  fields: [
    defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'detail', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
  ],
})

export const mentorType = defineType({
  name: 'mentor',
  title: 'Mentor',
  type: 'object',
  fields: [
    defineField({name: 'id', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'name', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'role', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'focus', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'bio', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
    defineField({name: 'avatarUrl', type: 'url'}),
    defineField({name: 'company', type: 'string'}),
  ],
})

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'object',
  fields: [
    defineField({name: 'id', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
    defineField({name: 'format', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'price', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'ctaLabel', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'highlight', type: 'boolean', initialValue: false}),
  ],
})

export const pricingTierType = defineType({
  name: 'pricingTier',
  title: 'Pricing Tier',
  type: 'object',
  fields: [
    defineField({name: 'id', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'name', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'price', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'cadence', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
    defineField({
      name: 'features',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({name: 'highlight', type: 'boolean', initialValue: false}),
  ],
})

export const faqItemType = defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'object',
  fields: [
    defineField({name: 'id', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'question', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'answer', type: 'text', rows: 4, validation: (Rule) => Rule.required()}),
  ],
})

export const impactMetricType = defineType({
  name: 'impactMetric',
  title: 'Impact Metric',
  type: 'object',
  fields: [
    defineField({name: 'label', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'value', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'detail', type: 'string', validation: (Rule) => Rule.required()}),
  ],
})
