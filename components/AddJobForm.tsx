"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function AddJobForm() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();



  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (!title || !description) {
      alert("title and description are required")
      return;
    }

    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.push('/jobs')
      } else {
        throw new Error('failed not create job');
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <form className="p-2" onSubmit={onSubmit}>
      <div className="border-2 p-6 flex gap-4 flex-wrap flex-col">

        <input
          className="p-2 text-slate-950"
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="p-2 text-slate-950"
          type="text"
          name="description"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="p-2 bg-gray-50 text-cyan-900 text-xl"
          type="submit">Submit</button>
      </div>

    </form>
  )
}

export default AddJobForm;
