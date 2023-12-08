import axiosWithConfig from "../../axiosWithConfig";

export const getChallenge = async (params) => {
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
    const url = query ? `/api/v1/challenges?${query}` : "/api/v1/challenges";
    const response = await axiosWithConfig.get(url);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const getDetailChallenge = async (id) => {
  try {
    const response = await axiosWithConfig.get(`api/v1/challenges/${id}`);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const createChallenge = async (data) => {
  try {
    const formData = new FormData();
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key) && data[key]) {
        formData.append(key, data[key]);
      }
    }

    const response = await axiosWithConfig.post(`api/v1/challenges`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const updateChallenge = async (data) => {
  const { id } = data;
  try {
    const formData = new FormData();
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key) && data[key]) {
        formData.append(key, data[key]);
      }
    }

    const response = await axiosWithConfig.put(
      `api/v1/challenges/${id}`,
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

export const deleteChallenge = async (id) => {
  try {
    const response = await axiosWithConfig.delete(`api/v1/challenges/${id}`);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
