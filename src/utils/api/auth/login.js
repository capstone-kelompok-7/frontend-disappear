import axiosWithConfig from "../axiosWithConfig";

const login = async (email, password) => {
  try {
    const response = await axiosWithConfig.post("/api/v1/auth/login", {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export default login;
