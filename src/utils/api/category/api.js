import axiosWithConfig from "../axiosWithConfig";

export const getCategory = async () => {
  try {
    const response = await axiosWithConfig.get("api/v1/categories");
    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
