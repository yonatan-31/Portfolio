
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Social } from "@/typings";

const query = groq`
*[_type == "social"]
`;


export async function fetchSocials(): Promise<Social[]> {
  return await sanityClient.fetch(query);
}
