import apiHandler from ".";

export const appointmentsRead = async () => {
  try {
    const { data } = await apiHandler.get(`/api/appointments`);
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
