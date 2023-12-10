import axiosWithConfig from "../axiosWithConfig";

export const getLandingPage = async () => {
  try {
    const response = await axiosWithConfig.get("api/v1/dashboards/landing-page");
    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const getReviews = async () => {
  try {
    const response = await axiosWithConfig.get("api/v1/dashboards/reviews");
    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
