import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "summery",
            title: "Summery",
            type: "text",

        },
        {
            name: "technologies",
            title: "Technologies",
            type: "array",
            of: [{ type: "reference", to: { type: "skill" } }],

        },
        {
            name: "linkToBuild",
            title: "LinkToBuild",
            type: "url",
        },
    ],
})
