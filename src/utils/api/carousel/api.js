import axiosWithConfig from "../axiosWithConfig";

export const getAllCarousel = async (params) => {
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

    const url = query ? `/api/v1/carousel?${query}` : "/api/v1/carousel";
    const response = await axiosWithConfig.get(url);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const createCarousel = async (data) => {
  try {
    const newData = {
      ...data,
    };

    const response = await axiosWithConfig.post("api/v1/carousel", newData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const deleteCarousel = async (id) => {
  try {
    const response = await axiosWithConfig.delete(`api/v1/carousel/${id}`);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
