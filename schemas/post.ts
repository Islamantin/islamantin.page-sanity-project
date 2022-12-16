import { Rule } from "sanity";

export default {
    name: 'post',
    type: 'document',
    title: 'Posts',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: 'thumbnail',
            type: 'image',
            title: 'Thumbnail',
            options: {
                hotspot: true
            }
        },
        {
            name: 'content',
            type: 'array',
            of: [{type: 'block'}],
            title: 'Content'
        },
    ]
}