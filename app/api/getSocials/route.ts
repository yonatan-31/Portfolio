
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { NextResponse } from "next/server";
import { Social } from "@/typings";

const query = groq`
*[_type == "social"]
`;


export async function GET() {
  const socials: Social[] = await sanityClient.fetch(query);

  return NextResponse.json({ socials });
}