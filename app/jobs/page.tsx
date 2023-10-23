"use client";
import JobCard from "@/components/job-lits/JobCard";
import { getUserData, getJobData } from "@/lib/clientUltils/auth";
import { userType } from "@/types/types";
import { useRouter } from "next/navigation";
import { FC, use, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddJobForm from "@/components/addJobForm";
import Link from "next/link";

interface engineersListProps { }

const EngineersList: FC<engineersListProps> = ({ }) => {
  let router = useRouter();
  const [user, setUser] = useState<userType | null>(null);
  const [job, setJob] = useState([]);

  useEffect(() => {
    getJobData()
      .then((res) => {
        setJob(res?.jobs);
      })
      .catch((err) => {
        console.log("error on fetch Users !", err);
      });
    console.log(12)
  }, [router]);

  useEffect(() => {
    getUserData()
      .then((res) => {
        if (res?.success && res?.user) {
          if (
            res.user.role === "admin" ||
            res.user.role === "super-admin" ||
            res.user.role === "user" ||
            res.user.role === "hr"
          ) {
            setUser(res.user);
          } else {
            // router.push("/");
          }
        } else {
          // router.push("/");
          console.log("err");
          setUser(null);
        }
      })
      .catch((err) => {
        console.log("error on fetch Users !", err);
      });
  }, [router]);

  return (
    user && job && (
      <div className="sm:container  m-5 my-40 py-6 bg-gradient-44 rounded-2xl">
        <Tabs defaultValue="users" className=" ">
          <TabsList className="flex justify-between bg-transparent text-white ">
            <div className="shadow-lg">
              <TabsTrigger className="rounded-lg" value="users" >
                Jobs
              </TabsTrigger>

              {user.role === "super-admin" || user.role === "admin" ? (
                <Link href={`/jobs/add`}>
                  <TabsTrigger className="rounded-lg" value="recruiters" >
                    Add-Jobs
                  </TabsTrigger>
                </Link>
              ) : null}
            </div>
          </TabsList>

          <TabsContent value="users">
            <div className="p-4 sm:p-10 text-white ">
              <h1 className="text-2xl "> Jobs ({job.length})</h1>
              {
                job?.length > 0 ? (
                  job.map((j: any) => (
                    <JobCard
                      onClick={() => {
                        router.push(`/jobs`);
                      }}
                      key={j._id}
                      job={j}
                    />
                  ))
                ) : (
                  <div>No Jobs Found</div>
                )
              }
              {/* {job?.length > 0 ? (
                job.map((j: any) => (
                  <JobCard
                    key={j._id}
                    job={j}
                    onClick={() => {
                      router = 1
                      console.log(router)
                    }}
                  />
                ))
              ) : (
                <div>No Engineers Found</div>
              )} */}
            </div>
          </TabsContent>

          {user.role === "super-admin" || user.role === "admin" ? (
            <TabsContent value="recruiters">
              <div className="p-4 sm:p-10 text-white ">
                <h1 className="text-2xl ">...</h1>
              </div>
            </TabsContent>
          ) : null}

          {/* {user.role === "super-admin" && (
            <TabsContent value="admins">
              <div className=" p-4 sm:p-10  ">
                <h1 className="text-2xl text-white">Admins </h1>
                <JobCard job={123} />
              </div>
            </TabsContent>
          )} */}
        </Tabs>
      </div>
    )
  );
};

export default EngineersList;
