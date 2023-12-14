import axiosWithConfig from "../axiosWithConfig";

export const getAllOrder = async (params) => {
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

    const url = query ? `/api/v1/order?${query}` : "/api/v1/order";
    const response = await axiosWithConfig.get(url);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const updateOrder = async (data) => {
  const { order_id } = data;

  try {

    const newData = {
      ...data,
    };
    const response = await axiosWithConfig.put(`/api/v1/order/update-order`, newData);
    console.log(response.message);
  } catch (error) {
    throw Error(error.response.data.message);
  }
}

export const getDetailOrder = async (id) => {
  try {
    const response = await axiosWithConfig.get(`/api/v1/order/${id}`);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
