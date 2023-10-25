"use client"

// import RemoveButton from "@/components/RemoveButton";
import RemoveButton from "./RemoveButton";
import EdieButton from "../EdieButton";


const JobCard = (props: any) => {
  return (
    <div id={props.job._id} className="grid w-full border-b-2 my-2 text-white">
      <div className="col-span-5 md:col-span-3">
        <div className="flex justify-between p-2 m-2 w-full">
          <div className="flex flex-col w-full" >
            <p className="font-bold">{props.job.title}</p>
            {/* <hr className="w-[15%]" /> */}
            <p className="mt-3 ">{props.job.description}</p>
          </div>
          <div className="flex m-2 gap-4">

            <RemoveButton id={props.job._id} />
            <EdieButton id={props.job._id} />

          </div>
        </div>
      </div>
    </div>
  )
};

export default JobCard;
