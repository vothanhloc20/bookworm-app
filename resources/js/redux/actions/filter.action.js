import * as Type from "../types/mainTypes.js";

export const setDataFilter = (data) => {
    return {
        type: Type.filter_SET_DATA_FILTER,
        payload: data,
    };
};
