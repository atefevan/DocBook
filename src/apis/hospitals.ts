import apiHandler from ".";
interface HOSPITAL {
  id?: string;
}
export const hospitalsRead = async () => {
  try {
    const { data } = await apiHandler.get("/api/hospitals");
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const hospitalRead = async (payload: HOSPITAL) => {
  try {
    const { data } = await apiHandler.get(`/api/hospital/${payload?.id}`);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
