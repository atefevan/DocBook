import apiHandler from ".";
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
