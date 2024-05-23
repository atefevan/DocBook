import apiHandler from ".";

interface AUTH {
  email: string;
  password: string;
}

export const signin = async (payload: AUTH) => {
  try {
    const { data } = await apiHandler.post("/api/user/signin", payload);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const signup = async (payload: AUTH) => {
  try {
    const { data } = await apiHandler.post("/api/user/signup", payload);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
