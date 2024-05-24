import apiHandler from ".";

interface SPECIALITY {
//   email: string;
//   password: string;
}

export const specialitiesRead = async (payload: SPECIALITIES) => {
  try {
    const { data } = await apiHandler.post("/api/user/signin", payload);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// export const signup = async (payload: SPECIALITY) => {
//   try {
//     const { data } = await apiHandler.post("/api/user/signup", payload);
//     return data;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };
