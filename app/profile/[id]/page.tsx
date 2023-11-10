"use client";
import { FC, useEffect, useState } from "react";
import "./page.css";
import R from "./R";
import S from "./S";
import { getSocialData } from "@/lib/socialUltils/auth";
import toast from "react-hot-toast";

// interface profileProps {
//   params: {
//     id: string;
//   };
// }
interface profileProps {
  params: {
    id: string;
  };
}


const ProfileDetails: FC<profileProps> = ({ params }) => {
  const [statLike, setStatLike] = useState(false);
  const [socialReact, setSocialReact] = useState();
  // <userType | null>(null)

  useEffect(() => {
    getSocialData().then((res) => {
      res.social.map((so: any) => {
        so.uidProfile == params.id ? setSocialReact(so.react) : null;
      });
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
