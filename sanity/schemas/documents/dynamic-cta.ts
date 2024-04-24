import type { Rule } from 'sanity'
import { MousePointerSquareIcon } from 'lucide-react'

export default {
    name: 'dynamicCta',
    type: 'document',
    title: 'Dynamic CTA',
    icon: MousePointerSquareIcon,
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            validation: (rule: Rule) => rule.required(),
        },
        {
            name: 'button',
            title: 'Button',
            type: 'button',
            validation: (rule: Rule) => rule.required(),
        },
    ],
    preview: {
        select: {
            title: 'heading',
        },
        prepare({ title }) {
            return {
                title: title,
                subtitle: 'Dynamic CTA',
                media: MousePointerSquareIcon,
            }
        },
    },
}
