import * as Type from "../types/mainTypes.js";

const initState = {
    first_loading: true,
    loading: true,
    total_page: 0,
    current_page: 1,
    per_page: 5,
    items_total: 0,
    from: 0,
    to: 0,
    current_filter: [],
    books: [],
};

const shop = (state = initState, action) => {
    switch (action.type) {
        case Type.shop_SET_TOTAL_PAGES:
            return {
                ...state,
                total_page: action.payload,
            };
        case Type.shop_SET_CURRENT_PER_PAGE:
            return {
                ...state,
                per_page: action.payload,
            };
        case Type.shop_SET_BOOKS:
            return {
                ...state,
                books: [...action.payload],
            };
        case Type.shop_SET_ITEMS_TOTAL:
            return {
                ...state,
                items_total: action.payload,
            };
        case Type.shop_SET_CURRENT_PAGE:
            return {
                ...state,
                current_page: action.payload,
            };
        case Type.shop_SET_INDEX_ITEM:
            return {
                ...state,
                from: action.payload.from,
                to: action.payload.to,
            };
        case Type.shop_SET_CURRENT_FILTER:
            return {
                ...state,
                current_filter: [...state.current_filter, action.payload],
            };
        case Type.shop_EDIT_CURRENT_FILTER:
            return {
                ...state,
                current_filter: [
                    ...state.current_filter.slice(0, action.payload.index),
                    {
                        ...state.current_filter[action.payload.index],
                        item: action.payload.item,
                    },
                    ...state.current_filter.slice(action.payload.index + 1),
                ],
            };
        case Type.shop_REMOVE_CURRENT_FILTER:
            return {
                ...state,
                current_filter: state.current_filter
                    .slice(0, action.payload)
                    .concat(state.current_filter.slice(action.payload + 1)),
            };
        case Type.shop_SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case Type.shop_SET_FIRST_LOADING:
            return {
                ...state,
                first_loading: action.payload,
            };
        default:
            return state;
    }
};

export default shop;
