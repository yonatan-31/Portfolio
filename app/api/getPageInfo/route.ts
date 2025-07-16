
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { NextResponse } from "next/server";
import { PageInfo } from "@/typings";

const query = groq`
  *[_type == "pageInfo"][0]
`;

export async function GET() {
  const pageInfo: PageInfo = await sanityClient.fetch(query);

  return NextResponse.json({ pageInfo });
}