import apiHandler from ".";
interface REVIEW {
  id?: string;
}

export const reviewAdd = async (payload?: any = {}) => {
  try {
    const { data } = await apiHandler.post(`/api/review`, payload);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const reviewRead = async (payload: REVIEW) => {
  try {
    const { data } = await apiHandler.get(`/api/review/${payload?.id}`);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
