import axiosWithConfig from "../axiosWithConfig";

export const getCategory = async (params) => {
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

    const url = query ? `api/v1/categories?${query}` : "api/v1/categories";
    const response = await axiosWithConfig.get(url);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const createCategory = async (data) => {
  try {
    const formData = new FormData();
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key) && data[key]) {
        formData.append(key, data[key]);
      }
    }

    const response = await axiosWithConfig.post("api/v1/categories", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const deleteCategory = async (id) => {
  try {
    const response = await axiosWithConfig.delete(`api/v1/categories/${id}`);
    return response.status;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const getDetailCategory = async (id) => {
  try {
    const response = await axiosWithConfig.get(`api/v1/categories/${id}`);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const updateCategory = async (id, data) => {
  console.log(id);
  try {
    const formData = new FormData();
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key) && data[key]) {
        formData.append(key, data[key]);
      }
    }

    const response = await axiosWithConfig.put(
      `api/v1/categories/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
