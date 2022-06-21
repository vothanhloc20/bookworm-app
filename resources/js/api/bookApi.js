import axiosClient from "./axiosClient.js";

let prefix = "/books";

const bookApi = {
    getTopTenOnSaleBooks: () => {
        const url = `${prefix}/getTopTenOnSaleBooks`;
        return axiosClient.get(url);
    },

    getAllCategories: () => {
        const url = `${prefix}/getAllCategories`;
        return axiosClient.get(url);
    },

    getAllAuthors: () => {
        const url = `${prefix}/getAllAuthors`;
        return axiosClient.get(url);
    },

    getAllRatingStars: () => {
        const url = `${prefix}/getAllRatingStars`;
        return axiosClient.get(url);
    },
};

export default bookApi;
