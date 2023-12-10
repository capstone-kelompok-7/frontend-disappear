import axiosWithConfig from "../axiosWithConfig";

export const getUlasan = async (params) => {
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

    const url = query
      ? `/api/v1/products/reviews?${query}`
      : "/api/v1/products/reviews";
    const response = await axiosWithConfig.get(url);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const getDetailUlasan = async (id) => {
  try {
    const response = await axiosWithConfig.get(`api/v1/reviews/detail/${id}`);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
