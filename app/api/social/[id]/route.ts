import { connectToDB } from "@/DB/utils/connect";
import { NextResponse } from "next/server";
import Social from "@/DB/models/social.schema";
export async function GET(request: any, { params }: any) {
  const { id } = params;
  await connectToDB();
  const social = await Social.findOne({ uidProfile: id });
  return NextResponse.json({ social: social }, { status: 200 });
}

