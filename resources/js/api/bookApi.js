import axiosClient from "./axiosClient.js";

let prefix = "/books";

const bookApi = {
    getTopTenOnSaleBooks: () => {
        const url = `${prefix}/getTopTenOnSaleBooks`;
        return axiosClient.get(url);
    },

    getRecommendedBooks: () => {
        const url = `${prefix}/getRecommendedBooks`;
        return axiosClient.get(url);
    },

    getPopularBooks: () => {
        const url = `${prefix}/getPopularBooks`;
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

    getBooks: ({
        page = undefined,
        perPage = undefined,
        category = undefined,
        author = undefined,
    } = {}) => {
        let url = `${prefix}/getAllBooks`;
        const queryStringArray = [];

        if (page) {
            queryStringArray.push(`page=${page}`);
        }

        if (perPage) {
            queryStringArray.push(`per_page=${perPage}`);
        }

        if (category) {
            queryStringArray.push(`category=${category}`);
        }

        if (author) {
            queryStringArray.push(`author=${author}`);
        }

        if (queryStringArray.length > 0) {
            for (const index in queryStringArray) {
                url +=
                    index === "0"
                        ? `?${queryStringArray[index]}`
                        : `&${queryStringArray[index]}`;
            }
        }

        return axiosClient.get(url);
    },
};

export default bookApi;
