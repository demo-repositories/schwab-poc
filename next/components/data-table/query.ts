import { groq } from "next-sanity";
export default groq`*[_type == "dataTable" && _id == $_id][0]{...,}`;
