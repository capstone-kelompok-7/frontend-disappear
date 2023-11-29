import axiosWithConfig from "../axiosWithConfig";

export const getAllProducts = async (page) => {
  try {
    const response = await axiosWithConfig.get(`api/v1/products?page=${page}`);

    return response.data;
  } catch (error) {
    throw Error("Failed to get All Products");
  }
};
