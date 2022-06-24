import * as Type from "../types/mainTypes.js";

export const setWidth = (payload) => {
    return {
        type: Type.app_SET_WIDTH,
        payload: payload,
    };
};
