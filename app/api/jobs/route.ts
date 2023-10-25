import Job from "@/DB/models/job.schema";
import { connectToDB } from "@/DB/utils/connect";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { title, description } = await request.json();
  await connectToDB();
  await Job.create({ title, description });
  return NextResponse.json({ message: "Job added" }, { status: 201 });
}

export async function GET() {
  await connectToDB();
  const jobs = await Job.find();
  return NextResponse.json({ jobs });
}