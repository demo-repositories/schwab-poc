import { groq } from "next-sanity";
export default groq`*[_type == 'querySet' && _id == $_id][0]{
    slug,
    title,
    summary,
    _id,
    contentTypes,
    taxonomyFilters[]{
        taxonomyAttribute->{_id},
        terms[]->{...,},
    },
    bottomCta {
        ...,
        to->{...,}
    },
    featuredContent->{...},
}`;
