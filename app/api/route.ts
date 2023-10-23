import Resume from "@/DB/models/resume.schema";
import User from "@/DB/models/user.schema";
import { auth } from "@/lib/serverUtils";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const user = await auth();
    if (!user) {
      throw new Error("Unauthorized");
    }
    const id = params.id;
    if (id !== "self") {
      if (
        user.role !== "hr" &&
        user.role !== "user" &&
        user.role !== "admin" &&
        user.role !== "super-admin" &&
        String(user._id) !== params.id
      ) {
        throw new Error("Unauthorized");
      }
    }

    const query = { _id: id, deleted: false };
    if (id === "self") {
      query._id = user._id;
    } else if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid ID");
    }

    const userDetails = await User.findOne(query, { password: 0 });
    // .populate(
    //   "resume"
    // );

    if (!userDetails) {
      throw new Error("User not found");
    }
    const existedResume = await Resume.find();

    return NextResponse.json({
      success: true,
      msg: "",
      body: { ...userDetails._doc, resume: existedResume || {} },
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
