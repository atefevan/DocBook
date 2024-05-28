import apiHandler from ".";

export const doctorsRead = async () => {
  try {
    const { data } = await apiHandler.get("/api/doctors");
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};