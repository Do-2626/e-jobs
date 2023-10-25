// import EditJobForm from '@/components/EditJobForm'
import EditJobForm from '@/components/job-list/EditJobForm'



const getJobById = async (id: any) => {
  try {
    const res = await fetch(`https://e-jobs02.netlify.app/api/jobs/${id}`, {
      "cache": "no-cache"
    });

    if (!res.ok) {
      throw new Error("Could not find job");
    }
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}



async function page({ params }: any) {
  const { id } = params;

  const { job } = await getJobById(id)
  // console.log(job)
  // const {}

  return (
    <div className="sm:container  m-5 my-40 py-6 bg-gradient-44 rounded-2xl">
      <EditJobForm job={job} />
    </div>
  )
}

export default page
