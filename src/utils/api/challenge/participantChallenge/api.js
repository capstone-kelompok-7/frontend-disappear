import axiosWithConfig from "../../axiosWithConfig";

export const getParticipant = async () => {
  try {
    const response = await axiosWithConfig.get("api/v1/");

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const getDetailParticipant = async (id) => {
  try {
    const response = await axiosWithConfig.get(`api/v1/${id}`);

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
