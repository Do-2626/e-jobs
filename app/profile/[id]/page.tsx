
"use client";
import { userAndResumeSchemaType } from "@/ZodSchmeas/resume";
import TextWrapper from "@/components/TextWrapper";
import { Button } from "@/components/ui/button";
import { getUserDetails } from "@/lib/clientUltils/auth";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiLike, BiSolidLike, BiShowAlt } from "react-icons/bi";
import "./page.css";
import R from "./R";
import S from "./S";

interface profileProps {
  params: {
    id: string;
  };
}

const ProfileDetails: FC<profileProps> = ({ params }) => {
  // const [statLike, setStatLike] = useState(false)
  // const [user, setUser] = useState<
  //   (userAndResumeSchemaType & { role: string }) | null
  // >(null);

  // useEffect(() => {
  //   getUserDetails(params.id).then((res) => {
  //     if (res?.success && res?.body) {
  //       setUser(res.body);
  //     } else {
  //       toast.error(res?.msg);
  //     }
  //   });
  // }, [params.id]);






  // {/* عدد المشاهدات */ }
  // const show = (e: any) => {
  //   e.target.innerText = (parseInt(e.target.innerText) + 1)
  // }
  // setTimeout((() => { console.log(123) }), 5000)


  // ============================
  // const onSubmit = async (data: userDetailsType) => {
  //   try {
  //     const res = await fetch("/api/user", {
  //       method: "PUT",
  //       body: JSON.stringify(data),
  //     });
  //     const response = await res.json();
  //     if (response?.success) {
  //       toast.success("Updated Successfully");
  //       router.push("/");
  //     } else {
  //       toast.error(response?.msg);
  //     }
  //   } catch (error: any) {
  //     console.log(error?.message);
  //     toast.error(error?.message);
  //   }
  // };
  // ============================
  return (
    <div className="container p-2 shadow-2xl ">

      {/* header */}
      <S params={params} />


      {/* informasion */}
      <R params={params} />
    </div >
  );
};

export default ProfileDetails;
