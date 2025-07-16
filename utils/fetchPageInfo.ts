
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { PageInfo } from "@/typings";

const query = groq`*[_type == "pageInfo"][0]`;

export async function fetchPageInfo(): Promise<PageInfo> {
  return await sanityClient.fetch(query);
}



