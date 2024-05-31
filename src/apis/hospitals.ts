import apiHandler from ".";
import { handleQuery } from "../utils/query_handler";
interface HOSPITAL {
  id?: string;
}
interface HOSPITALSEARCH {
  city?: string;
  district?: string;
  speciality?: string;
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
export const searchHospitals = async (payload: HOSPITALSEARCH) => {
  const secondParam = handleQuery(payload);
  try {
    const { data } = await apiHandler.get(`/api/hospitals?${secondParam}`);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
