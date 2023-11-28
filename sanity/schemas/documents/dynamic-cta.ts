import type { Rule } from 'sanity'
import { LayoutTemplate } from 'lucide-react'
import { PreviewDynamicCTA } from '../../components/preview/PreviewDynamicCTA'

export default {
    name: 'dynamicCta',
    type: 'document',
    title: 'Dynamic CTA',
    icon: LayoutTemplate,
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
    // preview: {
    //     select: {
    //         heading: 'heading',
    //         buttonText: 'button.text',
    //     },
    // },
    // components: {
    //     preview: PreviewDynamicCTA,
    // },
}
