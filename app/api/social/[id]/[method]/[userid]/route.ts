
import { connectToDB } from "@/DB/utils/connect";
import { NextResponse } from "next/server";
import Social from "@/DB/models/social.schema";
import { postSocialData } from "@/lib/socialUltils/auth";

export async function GET(request: any, { params }: any) {
  // عاوز اضيف userid
  const { id, method, userid } = params;
  console.log(params)
  await connectToDB();
  const social = await Social.findOne({ uidProfile: id });
  // فى حالة عدم وجود رياكت للبروفايل
  if (!social) { postSocialData({ uidProfile: id, views: [], likes: [] }) }
  // اضافة وحذف
  if (method == 'add') {
    social.react.views.push(userid)
    await social.save(social);
  } else {
    const index = social.react.views.indexOf(id)
    social.react.views.splice(index, 1)
    await social.save(social);
  }
  return NextResponse.json({ social: social }, { status: 200 });
}

