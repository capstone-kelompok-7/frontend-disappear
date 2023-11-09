import { axiosConfig } from "../axiosConfig";

export const getArtikel = async () => {
    try {
        const response = await axiosConfig();

        return response.data;
    } catch (eror) {
        throw Error("Failed to get Artikel");
    }
}