import axiosWithConfig from "../axiosWithConfig";

export const getArtikel = async () => {
  try {
    const response = await axiosWithConfig.get("/api/v1/articles");

    return response.data;
  } catch (error) {
    throw Error("Failed to get All Products");
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
    const newData = {
      ...data,
    };
    const response = await axiosWithConfig.put(
      `/api/v1/articles/${id}`,
      newData
    );

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
