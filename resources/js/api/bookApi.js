import axiosClient from "./axiosClient.js";

const bookApi = {
    getAllCategories: () => {
        const url = "/books/getAllCategories";
        return axiosClient.get(url);
    },
};

export default bookApi;
