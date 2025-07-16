
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Skill } from "@/typings";

const query = groq`*[_type == "skill"]`;

export async function fetchSkills(): Promise<Skill[]> {
  return await sanityClient.fetch(query);
}
