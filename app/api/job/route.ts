import Job from "@/DB/models/job.schema";
import {
  auth,
  transformToUserQuery,
} from "@/lib/serverUtils";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    // await connectToDB();
    const job = await auth();
    if (!job) {
      throw new Error("Unauthorized");
    }
    if (
      job.role !== "user" &&
      job.role !== "hr" &&
      job.role !== "admin" &&
      job.role !== "super-admin"
    ) {
      throw new Error("Unauthorized");
    }
    const query = transformToUserQuery(req, job);

    // const jobs = await Job.find(query, { password: 0 }).lean();
    const jobs = await Job.find();
    return NextResponse.json({
      success: true,
      msg: "",
      users: jobs,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        msg: error?.message || "Something went wrong",
      },
      { status: error?.message ? 400 : 500 }
    );
  }
};

