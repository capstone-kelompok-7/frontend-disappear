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
    const formData = new FormData();
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key) && data[key]) {
        formData.append(key, data[key]);
      }
    }

    const response = await axiosWithConfig.post("api/v1/carousel", formData, {
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

export const updateCarousel = async (data) => {
  const { id, ...restData } = data;
  try {
    const formData = new FormData();
    for (const key in restData) {
      if (Object.prototype.hasOwnProperty.call(restData, key) && restData[key]) {
        formData.append(key, restData[key]);
      }
    }

    const response = await axiosWithConfig.put(
      `api/v1/carousel/${id}`,
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
