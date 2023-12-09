import axiosWithConfig from "../axiosWithConfig";

export const getAllPayment = async (params) => {
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
      ? `/api/v1/order/payment?${query}`
      : "/api/v1/order/payment";
    const response = await axiosWithConfig.get(url);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const createStatusPaymentToConfirm = async (id) => {
  try {
    const response = await axiosWithConfig.post(`api/v1/order/confirm/${id}`);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const createStatusPaymentToCancel = async (id) => {
  try {
    const response = await axiosWithConfig.post(`api/v1/order/cancel/${id}`);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
