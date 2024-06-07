import apiHandler from ".";
interface MEDICINE {
  id?: string;
}
export const medicinesRead = async () => {
  try {
    const { data } = await apiHandler.get("/api/medicines");
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// export const Read = async (payload: ) => {
//   try {
//     const { data } = await apiHandler.get(`/api/ambulance/${payload?.id}`);
//     return data;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };
