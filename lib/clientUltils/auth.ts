export const getAllUser = async () => {
  try {
    const res = await fetch("/api/user");
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
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
export const getUserDetails = async (id: string) => {
  try {
    const res = await fetch(`https://e-jobs02.netlify.app/api/user/${id}`);
    // const res = await fetch("/api/user/" + id);
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


