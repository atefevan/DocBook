import apiHandler from ".";

export const specialitiesRead = async () => {
  try {
    const { data } = await apiHandler.get("/api/specialists");
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
