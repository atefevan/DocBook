import apiHandler from ".";
interface DOCTOR {
  id?: string;
}
export const doctorsRead = async () => {
  try {
    const { data } = await apiHandler.get("/api/doctors");
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const doctorRead = async (payload: DOCTOR) => {
  try {
    const { data } = await apiHandler.get(`/api/doctor/${payload?.id}`);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
