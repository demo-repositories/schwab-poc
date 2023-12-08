/**
 * Used to confirm a slug is unique
 */
export async function isUniqueAcrossAllDocuments(slug, context) {
    const { document, getClient } = context
    const { _type } = document
    const client = getClient({ apiVersion: '2022-12-07' })
    const id = document._id.replace(/^drafts\./, '')
    const params = {
        draft: `drafts.${id}`,
        published: id,
        slug,
        _type,
    }
    const query = `!defined(*[_type == $_type && !(_id in [$draft, $published]) && slug.current == $slug][0]._id)`
    const result = await client.fetch(query, params)
    return result
}
