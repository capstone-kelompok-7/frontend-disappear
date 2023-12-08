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
    const response = await axiosWithConfig.get(
      `api/v1/challenges/participants/${id}`
    );

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const updateParticipant = async (data) => {
  const { id } = data;
  try {
    const formData = new FormData();
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key) && data[key]) {
        formData.append(key, data[key]);
      }
    }

    const response = await axiosWithConfig.put(
      `api/v1/challenges/participants/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
