import axios from "axios";

const BASE_URL = "https://api.disappear-organization.my.id/api/v1/auth";

const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export default login;
