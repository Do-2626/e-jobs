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



(
// const update = {
//   $push: {
//     "react.views": "65289e7b3fd85a392180cde3"
//   }
// };

// const query = {
//   _id: "654d4df838599c53b389f5c1"
// };

// socialCollection.updateOne(query, update, (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("Document updated:", result);
// });
)

// export async function GET(request: any, { params }: any) {
//   const { id } = params;
//   await connectToDB();
//   const job = await Job.findOne({ _id: id });
//   return NextResponse.json({ job }, { status: 200 });
// }