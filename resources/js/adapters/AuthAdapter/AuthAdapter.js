import authApi from "../../api/authApi";

export const register = (body) => {
    return authApi.register(body);
};
