import Job from "@/DB/models/job.schema";
import { connectToDB } from "@/DB/utils/connect";
import { NextResponse } from "next/server";


// export async function DELETE(request: any, { params }: any) {
//   const { id } = params;
//   // const id = request.nextUrl.searchParams.get("id");
//   await connectToDB();
//   await Job.findByIdAndDelete(id);
//   return NextResponse.json({ message: "Job deleted" }, { status: 200 });
// }
// export async function PUT(request: any, { params }: any) {
//   const { id } = params;
//   const { newTitle: title, newDescription: description } = await request.json();
//   await connectToDB();
//   await Job.findByIdAndUpdate(id, { title, description });
//   return NextResponse.json({ message: "Job updated" }, { status: 200 });
// }
// export async function GET(request: any, { params }: any) {
//   const { id } = params;
//   await connectToDB();
//   const job = await Job.findOne({ _id: id });
//   return NextResponse.json({ job }, { status: 200 });
// }