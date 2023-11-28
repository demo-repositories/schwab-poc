import { groq } from "next-sanity";
export default groq`*[_type == "dynamicCta" && _id == $_id][0]{...,}`;
