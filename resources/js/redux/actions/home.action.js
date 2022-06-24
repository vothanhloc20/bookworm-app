import * as Type from "../types/mainTypes.js";

export const setTopTenOnSaleBooks = (data) => {
    return {
        type: Type.home_SET_TOP_TEN_ON_SALE_BOOKS,
        payload: data,
    };
};

export const setRecommendedBooks = (data) => {
    return {
        type: Type.home_SET_RECOMMENDED_BOOKS,
        payload: data,
    };
};

export const setPopularBooks = (data) => {
    return {
        type: Type.home_SET_POPULAR_BOOKS,
        payload: data,
    };
};

export const setTagFeaturedBooks = (data) => {
    return {
        type: Type.home_SET_TAG_FEATURED_BOOKS,
        payload: data,
    };
};
