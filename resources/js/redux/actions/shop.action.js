import * as Type from "../types/mainTypes.js";

export const setTotalPage = (data) => {
    return {
        type: Type.shop_SET_TOTAL_PAGES,
        payload: data,
    };
};

export const setCurrentPerPage = (data) => {
    return {
        type: Type.shop_SET_CURRENT_PER_PAGE,
        payload: data,
    };
};

export const setBooks = (data) => {
    return {
        type: Type.shop_SET_BOOKS,
        payload: data,
    };
};

export const setItemsTotal = (data) => {
    return {
        type: Type.shop_SET_ITEMS_TOTAL,
        payload: data,
    };
};

export const setCurrentPage = (data) => {
    return {
        type: Type.shop_SET_CURRENT_PAGE,
        payload: data,
    };
};

export const setIndexItem = (data) => {
    return {
        type: Type.shop_SET_INDEX_ITEM,
        payload: data,
    };
};

export const setCurrentFilter = (data) => {
    return {
        type: Type.shop_SET_CURRENT_FILTER,
        payload: data,
    };
};

export const editCurrentFilter = (data) => {
    return {
        type: Type.shop_EDIT_CURRENT_FILTER,
        payload: data,
    };
};

export const removeCurrentFilter = (data) => {
    return {
        type: Type.shop_REMOVE_CURRENT_FILTER,
        payload: data,
    };
};
