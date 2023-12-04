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
    const newData = {
      ...data,
    };
    const response = await axiosWithConfig.post("/api/v1/articles", newData);

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
