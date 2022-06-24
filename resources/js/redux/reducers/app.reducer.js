import * as Type from "../types/mainTypes.js";

const initState = {
    width: 0,
};

const app = (state = initState, action) => {
    switch (action.type) {
        case Type.app_SET_WIDTH:
            return {
                ...state,
                width: action.payload,
            };
        default:
            return state;
    }
};

export default app;
