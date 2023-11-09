import Social from "@/DB/models/social.schema";
import { connectToDB } from "@/DB/utils/connect";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { views, likes } = await request.json();
  await connectToDB();
  await Social.create({ views, likes });
  return NextResponse.json({ message: "social added" }, { status: 201 });
}

export async function GET() {
  await connectToDB();
  const social = await Social.find();
  return NextResponse.json({ social });
}