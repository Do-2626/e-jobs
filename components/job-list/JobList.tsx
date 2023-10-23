"use client";
import { FC, useEffect, useState } from "react";
import JobCard from "./JobCard";
import { userType } from "@/types/types";

interface JobListProps {
  url: string;
  user: userType;
}

interface JobCardProps {
  eng: userType;
  user: userType;
  fallBack: boolean;
  setFallBack: React.Dispatch<React.SetStateAction<boolean>>;
}

const fetchEngList = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  if (data?.success && data?.users.length > 0) {
    return data.users;
  } else {
    return null;
  }
};
const JobList: FC<JobListProps> = ({ user, url }: JobListProps) => {
  const [jobs, setJobs] = useState<JobCardProps[] | null>(null);
  const [fallBack, setFallBack] = useState(false);
  console.log("================jobs================[components\job-list\JobList.tsx]");
  console.log(jobs);
  useEffect(() => {
    fetchEngList(url).then((res) => {
      setJobs(res);

    });
  }, [fallBack]);

  if (!jobs) return null;

  return (
    <div className=" ">
      <h2 className="text-white">Count : ( {jobs?.length} )</h2>
      {jobs && jobs.length > 0 ? (
        jobs.map((job) => (
          <JobCard
            job={job}
          />
          // <JobCard
          //   title={"medo"}
          //   key={job?._id}
          //   fallBack={fallBack}
          //   setFallBack={setFallBack}
          // />
        ))
      ) : (
        <div>No Engineers Found</div>
      )}
    </div>
  );
};

export default JobList;
