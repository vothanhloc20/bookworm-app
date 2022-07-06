import axiosClient from "./axiosClient";

const prefix = "/auth";

const authApi = {
    register: (body) => {
        const url = `${prefix}/register`;
        return axiosClient.post(url, body);
    },
};

export default authApi;
