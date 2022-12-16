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
      name: 'employment',
      type: 'employment',
      title: 'Currentely Working With',
    },
    {
      name: 'techSkills',
      type: 'array',
      of: [{type: 'techSkill'}],
      title: 'Tech Skills',
    },
    {
      name: 'education',
      type: 'education',
      title: 'Education',
    },
    {
      name: 'contactDetails',
      type: 'contactDetails',
      title: 'Contact Details',
    },
  ],
}

export const employment = {
  name: 'employment',
  type: 'object',
  title: 'Employment',
  fields: [
    {
      name: 'organisation',
      type: 'string',
      title: 'Organisation',
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link',
    },
  ],
}

export const education = {
  name: 'education',
  type: 'object',
  title: 'Education',
  fields: [
    {
      name: 'university',
      type: 'string',
      title: 'University',
    },
    {
      name: 'faculty',
      type: 'string',
      title: 'Faculty',
    },
    {
      name: 'degree',
      type: 'string',
      title: 'Degree',
    },
  ],
}

export const techSkill = {
  name: 'techSkill',
  type: 'object',
  title: 'Tech Skill',
  fields: [
    {
      name: 'fieldName',
      type: 'string',
      title: 'Field Name',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'content',
      type: 'string',
      title: 'Content',
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
