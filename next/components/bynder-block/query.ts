import { groq } from "next-sanity";
export default groq`*[_type == "bynderBlock" && _id == $_id][0]{...,}`;
