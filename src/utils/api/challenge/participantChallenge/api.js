import axiosWithConfig from "../../axiosWithConfig";

export const getParticipant = async (params) => {
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

    const url = query
      ? `/api/v1/challenges/participants?${query}`
      : "/api/v1/challenges/participants";
    const response = await axiosWithConfig.get(url);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const getDetailParticipant = async (id) => {
  try {
    const response = await axiosWithConfig.get(`api/v1/${id}`);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
