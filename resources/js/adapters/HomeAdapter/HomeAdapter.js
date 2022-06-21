import bookApi from "../../api/bookApi";

const homeAdapter = {
    getTopTenOnSaleBooks: async () => {
        try {
            const response = bookApi.getTopTenOnSaleBooks();
            return response;
        } catch (error) {
            return error;
        }
    },
};

export default homeAdapter;
