import axiosWithConfig from "../axiosWithConfig";

export const getVoucher = async (params) => {
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
  
      const url = query ? `api/v1/vouchers?${query}` : "api/v1/vouchers";
      const response = await axiosWithConfig.get(url);
  
      return response.data;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  };