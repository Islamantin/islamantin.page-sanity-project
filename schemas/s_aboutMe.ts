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
      type: 'employment',
      title: 'Currentely Working With',
    },
    {
      name: 'techSkills',
      type: 'array',
      of: [{type: 'techSkillsSet'}],
      title: 'Tech Skills',
    },
    {
      name: 'contactDetails',
      type: 'contactDetails',
      title: 'Contact Details',
    },
    {
      name: 'cv',
      type: 'fileToDownload',
      title: 'Curriculum Vitae',
    },
  ],
}

export const employment = {
  name: 'employment',
  type: 'object',
  title: 'Employment',
  fields: [
    {
      name: 'organisationName',
      type: 'string',
      title: 'Organisation Name',
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link',
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

export const techSkillsSet = {
  name: 'techSkillsSet',
  type: 'object',
  title: 'Tech Skills Set',
  fields: [
    {
      name: 'fieldName',
      type: 'string',
      title: 'Field Name',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'technologies',
      type: 'array',
      of: [{type: 'string'}],
      title: 'Technologies',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}

export const contactDetails = {
  name: 'contactDetails',
  type: 'object',
  title: 'Contact Details',
  fields: [
    {
      name: 'email',
      type: 'string',
      title: 'E-mail',
      validation: (Rule: Rule) => Rule.email(),
    },
    {
      name: 'github',
      type: 'url',
      title: 'GitHub Link',
    },
    {
      name: 'linkedin',
      type: 'url',
      title: 'LinkedIn Link',
    },
  ],
}
