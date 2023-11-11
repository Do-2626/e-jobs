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
    const { uidProfile, views, likes } = data
    const res = await fetch("/api/social", {
      method: "POST",
      body: JSON.stringify({ uidProfile, views, likes }),
    });
    if (res.ok) {
    } else {
      throw new Error('failed not create socila');
    }
  } catch (error) {
    console.log(error);
  }
};


export const get1social = async (id: string) => {
  try {
    const res = await fetch(`/api/social/${id}`);
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addViews = async (id: string) => {
  try {
    const res = await fetch(`/api/social/${id}/views/${id_user}`);
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addLike = async (id: string) => {
  try {
    const res = await fetch(`/api/social/${id}/add/${id_user}`);
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const removeLike = async (id: string) => {
  try {
    const res = await fetch(`/api/social/${id}/remove/${id_user}`);
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

let id_user = "";
export const save_id_user = async (id: string) => { id_user == "" ? id_user = id : null }