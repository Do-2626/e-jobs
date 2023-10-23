

// import { connectToDB } from "@/DB/utils/connect";
// import Job from "@/DB/models/job.schema";

// export const POST = async (data: {
//   fullName: string;
//   email: string;
//   password: string;
// }) => {
//   console.log(1)
//   try {
//     console.log(2)
//     const job = new Job({
//       fullName: data.fullName,
//       email: data.email,
//       password: data.password
//     });
//     console.log(3)

//     await connectToDB();
//     await job.save();

//     return true;
//   } catch (error) {
//     console.log(error);
//     return false;
//   }
// };






import Job from "@/DB/models/job.schema";
import { connectToDB } from "@/DB/utils/connect";
import { auth, generateToken } from "@/lib/serverUtils";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { default as bcrypt } from "bcryptjs";

export const POST = async (req: NextRequest) => {

  console.log(2468345347)
  console.log(req)
  try {
    console.log(24234565645247)


    const data = await req.json();
    const { email, password } = data;
    console.log(1)
    await connectToDB();
    console.log(2)
    console.log(2)
    
    const user = await Job.findOne({ email });

    const token = generateToken({ userId: user._id });
    const cookieStore = cookies();
    cookieStore.set("E-Jobs", token, {
      secure: true,
    });



    return NextResponse.json({
      success: true,
      msg: "",
    });



  } catch (error: any) {
    console.log(error?.message);
    return NextResponse.json(
      {
        success: false,
        msg: error?.message || "Something went wrong",
      },
      { status: error?.message ? 400 : 500 }
    );
  }
};



// export const GET = async (req: NextRequest) => {
//   try {
//     const cookieStore = cookies();
//     const token = cookieStore.get("E-Jobs");
//     if (!token) {
//       throw new Error("Unauthorized !!");
//     }
//     const user = await auth();
//     user.password = null;
//     delete user.password;
//     return NextResponse.json({
//       success: true,
//       msg: "",
//       user,
//     });
//   } catch (error: any) {
//     return NextResponse.json({
//       success: false,
//       msg: error?.message || "Something went wrong",
//     });
//   }
// };


// export const DELETE = async (req: NextRequest) => {
//   try {
//     const cookieStore = cookies();

//     cookieStore.delete("E-Jobs");

//     console.log("cookie deleted");
//     return NextResponse.json({ success: true, msg: "" });
//   } catch (error: any) {
//     return NextResponse.json({
//       success: false,
//       msg: error?.message || "Something went wrong",
//     });
//   }
// };
