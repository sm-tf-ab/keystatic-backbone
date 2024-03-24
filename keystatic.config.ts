import { config, fields, collection, component } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },

    collections: {
        posts: collection({
            label: 'Posts',
            slugField: 'title',
            path: 'src/content/posts/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                tags: fields.array(fields.text({ label: 'Tag' }), {
                    label: 'Tags',
                    itemLabel: props => props.value,
                }),
                content: fields.document({
                    label: 'Post Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: true,
                    componentBlocks: {
                        quote: component({
                            preview: () => null,
                            label: 'Quotation',
                            schema: {
                                content: fields.text({
                                    label: 'Quote',
                                }),
                            },
                        }),
                    },
                }),
            },
        }),
    },
});
