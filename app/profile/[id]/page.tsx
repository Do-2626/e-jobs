"use client";
import { FC, useEffect, useState } from "react";
import "./page.css";
import R from "./R";
import S from "./S";
import { get1social, getSocialData, postSocialData } from "@/lib/socialUltils/auth";
import toast from "react-hot-toast";

interface profileProps {
  params: {
    id: string;
  };
}


const ProfileDetails: FC<profileProps> = ({ params }) => {

  const [socialReact, setSocialReact] = useState();

  useEffect(() => {
    getSocialData().then((res) => {
      get1social(params.id).then((res) => {
        if (!res.social) {
          postSocialData({ uidProfile: params.id, views: [], likes: [] })
        }
        console.log(res)
        setSocialReact(res.social.react)
      })
    });
  }, [params.id]);




  return (
    <div className="container p-2 shadow-2xl ">
      {/* header */}
      <S react={socialReact} params={params} />

      {/* informasion */}
      <R params={params} />
    </div>
  );
};

export default ProfileDetails;
