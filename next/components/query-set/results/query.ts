import { groq } from "next-sanity";
export default groq`*[_type in $contentTypes && slug.current != 'home' ]{_id, _type, _updatedAt, slug, title, summary, featuredImage{...}, taxonomy[]{...,}} | order(_updatedAt desc)[]`;
