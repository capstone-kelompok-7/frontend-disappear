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
    throw Error(error.response.data.message);
  }
};

export const createProducts = async (data) => {
  try {
    const newData = {
      ...data,
    };

    const response = await axiosWithConfig.post(`api/v1/products`, newData);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const createImageProducts = async (data) => {
  try {
    const formData = new FormData();
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key) && data[key]) {
        formData.append(key, data[key]);
      }
    }
    const response = await axiosWithConfig.post(
      `api/v1/products/images`,
      formData
    );

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const updateProducts = async (data) => {
  const { id } = data;
  try {
    const newData = {
      ...data,
    };

    const response = await axiosWithConfig.put(
      `api/v1/products/${id}`,
      newData
    );

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const deleteProducts = async (id) => {
  try {
    const response = await axiosWithConfig.delete(`api/v1/products/${id}`);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
