import * as Type from "../types/mainTypes.js";

const initState = {
    status: false,
    headingTitle: "Login",
    contentButton: "Login",
};

const modal = (state = initState, action) => {
    switch (action.type) {
        case Type.modal_OPEN_MODAL:
            return {
                ...state,
                status: true,
            };
        default:
            return state;
    }
};

export default modal;
