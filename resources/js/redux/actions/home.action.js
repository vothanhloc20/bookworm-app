import * as Type from "../types/mainTypes.js";

export const setTopTenOnSaleBooks = (data) => {
    return {
        type: Type.home_SET_TOP_TEN_ON_SALE_BOOKS,
        payload: data,
    };
};

export const setRecommendedBook = (data) => {
    return {
        type: Type.home_SET_RECOMMENDED_BOOKS,
        payload: data,
    };
};

export const setPopularBook = (data) => {
    return {
        type: Type.home_SET_POPULAR_BOOKS,
        payload: data,
    };
};
