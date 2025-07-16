import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        {
            name: "JobTitle",
            title: "JobTitle",
            type: "string",
        },
        {
            name: "companyImage",
            title: "Company Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "company",
            title: "Company",
            type: "text",

        },
        {
            name: "dateStarted",
            title: "DateStarted",
            type: "string"
        },
        {
            name: "dateEnded",
            title: "DateEnded",
            type: "date",
        },
        {
            name: "iscurrentlyWorkingHere",
            title: "IscurrentlyWorkingHere",
            type: "boolean"
        },
        {
            name: "technologies",
            title: "Technologies",
            type: "array",
            of: [{ type: "reference", to: { type: "skill" } }],

        },
        {
            name: "points",
            title: "Points",
            type:"array",
            of:[{ type: "string" }],

        },

    ],

})
