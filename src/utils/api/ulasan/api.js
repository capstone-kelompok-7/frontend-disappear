import axiosWithConfig from "../axiosWithConfig";

export const getUlasan = async () => {
  try {
    const response = await axiosWithConfig.get("api/v1/products/reviews");

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const getDetailUlasan = async (id) => {
  try {
    const response = await axiosWithConfig.get(`api/v1/products/reviews${id}`);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
