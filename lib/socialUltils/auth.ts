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