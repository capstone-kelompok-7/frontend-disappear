import axiosWithConfig from "../axiosWithConfig";

export const getAllProducts = async (params) => {
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

    const url = query ? `/api/v1/products?${query}` : "/api/v1/products";
    const response = await axiosWithConfig.get(url);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const getDetailProducts = async (id) => {
  try {
    const response = await axiosWithConfig.get(`api/v1/products/${id}`);

    return response.data;
  } catch (error) {
    throw Error("Failed to get product");
  }
};
