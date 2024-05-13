import { groq } from "next-sanity";
export default groq`*[_type in $contentTypes && slug.current != "home" ]{
    _type,
    _id,
    title,
    summary,
    featuredImage{...},
    language,
    slug,
    taxonomy[]{
        ...
    }
}`;
