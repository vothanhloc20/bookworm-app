import * as Type from "../types/mainTypes.js";

const initState = {
    topTenOnSaleBooks: [],
    recommendedBooks: [],
    popularBooks: [],
};

const home = (state = initState, action) => {
    switch (action.type) {
        case Type.home_SET_TOP_TEN_ON_SALE_BOOKS:
            return {
                ...state,
                topTenOnSaleBooks: [...action.payload],
            };
        case Type.home_SET_RECOMMENDED_BOOKS:
            return {
                ...state,
                recommendedBooks: [...action.payload],
            };
        case Type.home_SET_POPULAR_BOOKS:
            return {
                ...state,
                popularBooks: [...action.payload],
            };
        default:
            return state;
    }
};

export default home;
