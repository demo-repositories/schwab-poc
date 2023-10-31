import React from 'react';

function HighlightIcon() {
  return <span style={{ fontWeight: 'bold' }}>H</span>;
}
function HighlightDecorator(props) {
  const {children} = props
  return <span style={{ backgroundColor: 'yellow' }}>{children}</span>;
}

export default {
  name: 'storyRichText',
  title: 'Content',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          {
            title: 'Highlight',
            value: 'highlight',
            icon: HighlightIcon,
            component: HighlightDecorator,
          },
        ],
      },
    },
  ],
};
