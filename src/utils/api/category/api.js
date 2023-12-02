// import axiosWithConfig from "../axiosWithConfig";

// export const getCategory = async () => {
//   try {
//     const response = await axiosWithConfig.get("api/v1/categories");
//     return response.data;
//   } catch (error) {
//     throw Error(error.response.data.message);
//   }
// };

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
