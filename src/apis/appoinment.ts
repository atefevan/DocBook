import apiHandler from ".";
import { handleQuery } from "../utils/query_handler";

export const appointmentsRead = async (id?: any = {}) => {
  try {
    console.log("QUERY PART :: ", handleQuery(id));
    const { data } = await apiHandler.get(
      `/api/appointments?${handleQuery(id)}`
    );
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const appointmentAdd = async (payload?: any = {}) => {
  try {
    const { data } = await apiHandler.post(`/api/appointment`, payload);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
