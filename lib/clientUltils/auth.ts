export const getUserData = async () => {
  try {
    const res = await fetch("/api/login");
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
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
export const getUserDetails = async (id: string) => {
  try {
    const res = await fetch("/api/user/" + id);
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const logOut = async () => {
  const res = await fetch("/api/login", { method: "DELETE" });
  const response = await res.json();
  return response;
};
