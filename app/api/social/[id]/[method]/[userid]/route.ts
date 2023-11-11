
import { connectToDB } from "@/DB/utils/connect";
import { NextResponse } from "next/server";
import Social from "@/DB/models/social.schema";
import { postSocialData } from "@/lib/socialUltils/auth";
import { getUserData } from "@/lib/clientUltils/auth";



  

export async function GET(request: any, { params }: any) {
  getUserData()
  .then((res) => {
    console.log({ res });
  })
  // عاوز اضيف userid
  const { id, method, userid } = params;
  await connectToDB();
  const social = await Social.findOne({ uidProfile: id });
  // فى حالة عدم وجود رياكت للبروفايل
  if (!social) { postSocialData({ uidProfile: id, views: [], likes: [] }) }
  // اضافة وحذف
  if (method == 'add') {
    social.react.likes.push(userid)
  } if (method != 'add') {
    const index = social.react.likes.indexOf(id)
    social.react.likes.splice(index, 1)

  } else {
    social.react.views.push(userid)
  }
  await social.save(social);
  return NextResponse.json({ social: social }, { status: 200 });
}

