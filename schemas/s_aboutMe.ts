import {Rule} from 'sanity'

export const id = 'aboutMe'
export const title = 'About Me'

export default {
  name: id,
  type: 'document',
  title: title,
  fields: [
    {
      name: 'location',
      type: 'string',
      title: 'Location',
    },
    {
      name: 'currentEmployment',
      type: 'labledLink',
      title: 'Currentely Working With',
    },
    {
      name: 'techSkills',
      type: 'array',
      of: [{type: 'labledList'}],
      title: 'Tech Skills',
    },
    {
      name: 'contactDetails',
      type: 'array',
      of: [{type: 'labledLink'}],
      title: 'Contact Details',
    },
    {
      name: 'cv',
      type: 'fileToDownload',
      title: 'Curriculum Vitae',
    },
  ],
}

export const labledLink = {
  name: 'labledLink',
  type: 'object',
  title: 'Labled Link',
  fields: [
    {
      name: 'lable',
      type: 'string',
      title: 'Lable',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link',
      validation: (Rule: Rule) => Rule.required().uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      })
    },
  ],
}

export const labledList = {
  name: 'labledList',
  type: 'object',
  title: 'Labled list',
  fields: [
    {
      name: 'lable',
      type: 'string',
      title: 'Lable',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'list',
      type: 'array',
      of: [{type: 'string'}],
      title: 'List',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}

export const fileToDownload = {
  name: 'fileToDownload',
  type: 'file',
  title: 'File To Download',
  fields: [
    {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
  ]
}
