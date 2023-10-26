"use client"


import { useState } from 'react';
import './search.css'
import { getAllUser } from "@/lib/clientUltils/auth";
import { any } from 'zod';



let all_users: any;
(getAllUser()
    .then((users) => {
        all_users = users.users
    })
)

function Search() {
    const [userList, setUserList] = useState([]);

    const hanelInput = (e: any) => {
        const v = (e.target.value)
        if (v == "") {
            setUserList([])
        } else {
            let user_selected = all_users.filter((user: any) => (user.email.startsWith(v)))
            setUserList(user_selected)
            // console.log(user_selected)
        }
    }



    return (
        <div className='relative'>
            <div className="flex justify-center gap-2">
                <div className='div'>
                    <span className='span'>
                        <svg className='svg' aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" >
                            <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
                        </svg>
                    </span>

                    <input onInput={hanelInput} className="input box-border m-0 overflow-visible w-full" placeholder="Search " aria-label="Search stars" aria-describedby="validation-34218b39-8273-4b17-8e6e-c1d92912d28e" type="search" data-test-selector="stars-repo-filter" data-target="primer-text-field.inputElement " name="q" id="search" />
                </div>


                <>
                    <summary role="button" data-view-component="true" className="btn">
                        {" "}
                        Type: All
                        <svg
                            aria-hidden="true"
                            height={16}
                            viewBox="0 0 16 16"
                            version="1.1"
                            width={16}
                            data-view-component="true"
                            className="octicon"
                        >
                            <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
                        </svg>
                    </summary>
                </>
            </div>
            <>
                {(userList.length > 0) ? (
                    <div className='absolute p-2 m-auto rounded-xl text-slate-950 bg-[#f0f3ffdb]'>
                        <ul>
                            {
                                userList.map(
                                    (user: any) => (
                                        <li>
                                            {user?.email}
                                        </li>
                                    ))
                            }
                        </ul>
                    </div>
                ) : (null)
                }
            </>
        </div >
    )
}

export default Search
