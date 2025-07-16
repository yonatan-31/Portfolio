
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Project } from "../typings";

const query = groq`
*[_type == "project"] {
...,
technologies[]->
}
`;

export async function fetchProjects(): Promise<Project[]> {
  return await sanityClient.fetch(query);
}


