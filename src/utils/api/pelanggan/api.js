import axiosWithConfig from "../axiosWithConfig";

export const getAllUsers = async (params) => {
  try {
    let query = "";

    if (params) {
      const queryParams = [];

      let key;
      for (key in params) {
        queryParams.push(`${key}=${params[key]}`);
      }

      query = queryParams.join("&");
    }

    const url = query ? `/api/v1/users?${query}` : "/api/v1/users";
    const response = await axiosWithConfig.get(url);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const getPelangganDetail = async (id) => {
  try {
    const response = await axiosWithConfig.get(`api/v1/users/${id}`);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
export const getActivity = async (id) => {
  try {
    const response = await axiosWithConfig.get(
      `/api/v1/users/get-activities/${id}`
    );

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const deleteUsers = async (id) => {
  try {
    const response = await axiosWithConfig.delete(`api/v1/users/${id}`);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
