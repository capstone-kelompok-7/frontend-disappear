import axiosWithConfig from "../axiosWithConfig";

export const getArtikel = async () => {
  try {
    const response = await axiosWithConfig.get("api/v1/articles");

    return response.data;
  } catch (error) {
    throw Error("Failed to get All Products");
  }
};
