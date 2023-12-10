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

  export const getDetailVoucher = async (id) => {
    try {
      const response = await axiosWithConfig.get(`api/v1/vouchers/${id}`);
  
      return response.data;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  };

  export const createVouchers = async (data) => {
    try {
      const newData = {
        ...data,
      };
  
      const response = await axiosWithConfig.post(`api/v1/vouchers`, newData);
  
      return response.data;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  };

  export const updateVouchers = async (data) => {
    const { id } = data;
    try {
      const newData = {
        ...data,
      };
  
      const response = await axiosWithConfig.put(
        `api/v1/vouchers/${id}`,
        newData
      );
  
      return response.data;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  };
  
  export const deleteVouchers = async (id) => {
    try {
      const response = await axiosWithConfig.delete(`api/v1/vouchers/${id}`);
  
      return response.data;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  };