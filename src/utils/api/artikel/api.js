import axiosWithConfig from "../axiosWithConfig";

export const getArtikel = async (params) => {
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
    const url = query ? `/api/v1/articles?${query}` : "/api/v1/articles";
    const response = await axiosWithConfig.get(url);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const createArtikel = async (data) => {
  try {
    const formData = new FormData();
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key) && data[key]) {
        formData.append(key, data[key]);
      }
    }

    const response = await axiosWithConfig.post(`/api/v1/articles`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const updateArtikel = async (data) => {
  const { id } = data;
  try {
    const formData = new FormData();
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key) && data[key]) {
        formData.append(key, data[key]);
      }
    }

    const response = await axiosWithConfig.put(
      `/api/v1/articles/${id}`,
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

export const getDetailArtikel = async (id) => {
  try {
    const response = await axiosWithConfig.get(`/api/v1/articles/${id}`);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const deleteArtikel = async (id) => {
  try {
    const response = await axiosWithConfig.delete(`/api/v1/articles/${id}`);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const generateContent = async (data) => {
  try {
    const response = await axiosWithConfig.post(
      `/api/v1/assistant/generate-article`,
      data
    );
    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
