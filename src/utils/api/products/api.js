import axiosWithConfig from "../axiosWithConfig";

export const getAllProducts = async () => {
  try {
    const response = await axiosWithConfig.get("api/v1/products");

    return response.data;
  } catch (error) {
    throw Error("Failed to get All Products");
  }
};
