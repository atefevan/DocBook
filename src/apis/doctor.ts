import apiHandler from ".";
import { handleQuery } from "../utils/query_handler";
interface DOCTOR {
  id?: string;
}

export const doctorsRead = async (payload?: any = {}) => {
  try {
    const { data } = await apiHandler.get(
      `/api/doctors?${handleQuery(payload)}`
    );
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
