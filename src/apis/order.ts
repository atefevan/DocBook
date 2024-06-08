import apiHandler from ".";
import { handleQuery } from "../utils/query_handler";
interface ORDER {
  user_id?: any;
  products?: any;
  total_price?: Number;
  name?: String;
  email?: String;
  address?: String;
  payment_method?: String;
  transaction_id?: String;
  phone_no?: String;
}

export const addOrder = async (payload?: ORDER) => {
  try {
    const { data } = await apiHandler.post("/api/order", payload);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const orderList = async (id?: any) => {
  try {
    const { data } = await apiHandler.get(`/api/orders?user_id=${id}`);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
