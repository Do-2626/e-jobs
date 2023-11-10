export const getSocialData = async () => {
  try {
    const res = await fetch("/api/social");
    if (!res.ok) throw new Error("Failed to fetch social");
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};


export const postSocialData = async (data: any) => {
  try {
    console.log(data)
    const { uidProfile, views, likes } = data
    const res = await fetch("/api/social", {
      method: "POST",
      body: JSON.stringify({ uidProfile, views, likes }),
    });
    if (res.ok) {
      console.log("Create New Socila")
    } else {
      throw new Error('failed not create socila');
    }
  } catch (error) {
    console.log(error);
  }
};