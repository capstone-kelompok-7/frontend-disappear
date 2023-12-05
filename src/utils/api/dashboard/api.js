import axiosWithConfig from "../axiosWithConfig";

export const getDashboardCard = async () => {
  try {
    const response = await axiosWithConfig.get("api/v1/dashboards/card");
    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const getDashboardChart = async () => {
  try {
    const response = await axiosWithConfig.get("api/v1/dashboards/chart");
    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const getDashboardTransaction = async () => {
  try {
    const response = await axiosWithConfig.get("api/v1/dashboards/transactions");
    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
