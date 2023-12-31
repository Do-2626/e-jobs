"use client";
import EngList from "@/components/eng-list/EngList";
import { getUserData } from "@/lib/clientUltils/auth";
import { userType } from "@/types/types";
import { useRouter } from "next/navigation";
import { FC, use, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import Search from "@/components/ui/search";
import Search from "@/components/search/Search";


interface engineersListProps { }

const EngineersList: FC<engineersListProps> = ({ }) => {
  const router = useRouter();
  const [user, setUser] = useState<userType | null>(null);



  // getAllUser()

  useEffect(() => {
    getUserData()
      .then((res) => {
        // console.log(res);
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
  const [search, setSearch] = useState(<Search />);
  const handelClick = (object: any) => {
    const a = (object.target.getAttribute("data-state"))
    const b = (object.target.firstChild.nodeValue);
    (a == "active" && b == "Engineers") ? setSearch(<Search />) : setSearch(<></>);
  };
  return (
    user && (
      <div className="sm:container  m-5 my-40 py-6 bg-gradient-44 rounded-2xl">
        <Tabs defaultValue="users" className=" ">
          <TabsList className="flex justify-between bg-transparent text-white ">
            <div className="shadow-lg">
              <TabsTrigger className="rounded-lg" value="users" onClick={handelClick}>
                Engineers
              </TabsTrigger>

              {user.role === "super-admin" || user.role === "admin" ? (
                <TabsTrigger className="rounded-lg" value="recruiters" onClick={handelClick}>
                  Recruiters
                </TabsTrigger>
              ) : null}
              {user.role === "super-admin" && (
                <TabsTrigger className="rounded-lg" value="admins" onClick={handelClick}>
                  Admins
                </TabsTrigger>
              )}
            </div>
            {user.role !== "user" && (
              <div>
                <Search />
              </div>)}
          </TabsList>

          <TabsContent value="users">
            <div className="p-4 sm:p-10 text-white ">
              {/* {search} */}
              <h1 className="text-2xl "> Engineers</h1>
              <EngList user={user} url="/api/user?role=user" />
            </div>
          </TabsContent>

          {user.role === "super-admin" || user.role === "admin" ? (
            <TabsContent value="recruiters">
              <div className="p-4 sm:p-10 text-white ">
                <h1 className="text-2xl ">Recruiters</h1>
                <EngList user={user} url="/api/user?role=hr" />
              </div>
            </TabsContent>
          ) : null}

          {user.role === "super-admin" && (
            <TabsContent value="admins">
              <div className=" p-4 sm:p-10  ">
                <h1 className="text-2xl text-white">Admins </h1>
                <EngList user={user} url="/api/user?role=admin" />
              </div>
            </TabsContent>
          )}
        </Tabs>
      </div>
    )
  );
};

export default EngineersList;
