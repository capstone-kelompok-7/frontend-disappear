import axios from "axios";

const BASE_URL = "https://test.disappear-organization.my.id/api/v1/auth";

const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default login;