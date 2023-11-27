import { groq } from "next-sanity";
export default groq`*[_type == 'querySet' && _id == $_id][0]{slug, title, summary, bottomCta{...,}, contentTypes}`;
