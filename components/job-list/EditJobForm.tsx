"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

function EditJobForm({ job }: any) {
    const [newTitle, setNewTitle] = useState(job.title)
    const [newDescription, setNewDescription] = useState(job.description)
    const router = useRouter()

    const handileSubmit = async (e: any) => {
        e.preventDefault()
        try {
            const res = await fetch(`http://localhost:3000/api/jobs/${job._id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ newTitle, newDescription })
            })

            if (!res.ok) {
                throw new Error("Could not update post")
            }
            router.push("/jobs")
        } catch (error) {
            console.log("Error", error);
        }
    }



    return (
        <form className="p-2" onSubmit={handileSubmit} >
            <div className="border-2 p-6 flex gap-4 flex-wrap flex-col">

                <input
                    onChange={(e) => { setNewTitle(e.target.value) }}
                    value={newTitle}
                    className="p-2 text-slate-950"
                    type="text"
                    name="title"
                    placeholder="title"

                />
                <input
                    onChange={(e) => { setNewDescription(e.target.value) }}
                    value={newDescription}
                    className="p-2 text-slate-950"
                    type="text"
                    name="description"
                    placeholder="description"

                />
                <button
                    className="p-2 bg-gray-50 text-cyan-900 text-xl"
                    type="submit">Submit</button>
            </div>

        </form>
    )
}

export default EditJobForm
