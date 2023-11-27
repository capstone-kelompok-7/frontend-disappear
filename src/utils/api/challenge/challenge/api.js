import axiosWithConfig from "../../axiosWithConfig";

export const getChallenge = async () => {
  try {
    const response = await axiosWithConfig.get("api/v1/");

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const getDetailChallenge = async (id) => {
  try {
    const response = await axiosWithConfig.get(`api/v1/${id}`);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const deleteChallenge = async (id) => {
  try {
    const response = await axiosWithConfig.delete(`api/v1/${id}`);

    return response.data;
  } catch (error) {
    throw Error("Failed to delete a product");
  }
};
