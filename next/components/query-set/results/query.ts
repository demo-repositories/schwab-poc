import { groq } from "next-sanity";
export default groq`*[_type in $contentTypes][0...5]{_id, title, summary} | order(_updatedAt asc)`;
