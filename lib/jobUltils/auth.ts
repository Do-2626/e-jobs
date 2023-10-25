export const getJobData = async () => {
  try {
    const res = await fetch("/api/jobs");
    if (!res.ok) throw new Error("Failed to fetch jobs");
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};