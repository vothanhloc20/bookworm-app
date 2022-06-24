import * as Type from "../types/mainTypes.js";

const initState = {
    status: false,
};

const drawer = (state = initState, action) => {
    switch (action.type) {
        case Type.drawer_OPEN_DRAWER:
            return {
                ...state,
                status: true,
            };
        case Type.drawer_CLOSE_DRAWER:
            return {
                ...state,
                status: false,
            };
        default:
            return state;
    }
};

export default drawer;
