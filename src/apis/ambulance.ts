import apiHandler from ".";
interface AMBULANCE {
  id?: string;
}
export const ambulancesRead = async () => {
  try {
    const { data } = await apiHandler.get("/api/ambulances");
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const ambulanceRead = async (payload: AMBULANCE) => {
  try {
    const { data } = await apiHandler.get(`/api/ambulance/${payload?.id}`);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
