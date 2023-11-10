"use client"

import { userAndResumeSchemaType } from "@/ZodSchmeas/resume";
import TextWrapper from "@/components/TextWrapper";
import { Button } from "@/components/ui/button";
import { getUserDetails } from "@/lib/clientUltils/auth";
import { addViews, postSocialData } from "@/lib/socialUltils/auth";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiLike, BiSolidLike, BiShowAlt } from "react-icons/bi";
import { boolean } from "zod";

interface profileProps {
    params: {
        id: string;
    };
    react: any
}
const S: FC<profileProps> = ({ params, react }) => {

    const [statLike, setStatLike] = useState(false)
    const [l, setl] = useState(react ? react.likes.length : 0)

    // اضافة مشاهدة
    setTimeout(() => { addViews(params.id) }, 3000)


    const statLikeTrue = () => {
        setStatLike(true)
        setl(l + 1)
        addlike
    }
    const statLikeFalse = () => {
        setStatLike(false)
        setl(l - 1)
    }

    return (
        <div>
            <div className="flex justify-end text-end m-2">

                {/* زر ال لايك */}
                <Button
                    id="likeButton"
                    onClick={() => {
                        statLike == false
                            ? statLikeTrue()
                            : statLikeFalse()
                    }}
                    disabled={params.id == "self"}
                    variant={"outline"}
                    className="mr-2 text-lg hover:bg-[#e6e6eb] like gap-3">
                    {statLike ? (<span className="text-blue-600"><BiSolidLike /></span>) : (<BiLike />)}
                    <span>|</span>
                    <span id="l">
                        {l}
                    </span>
                </Button>

                {/* اظهار عدد المشاهدات */}
                <span className="show gap-3">
                    <span><BiShowAlt /></span>
                    <span>|</span>
                    <span
                    // onClick={show}
                    >
                        {react ? react.views.length : 0}
                    </span>
                </span>

                <Button
                    disabled={params.id !== "self"}
                    variant={"outline"}
                    className=""
                >
                    <Link href={"/profile"}>Update Profile</Link>
                </Button>
            </div>
        </div>
    )
}

export default S
