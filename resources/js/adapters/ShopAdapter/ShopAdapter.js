import bookApi from "../../api/bookApi.js";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";

const getAllCategories = () => {
    try {
        const response = bookApi.getAllCategories();
        return response;
    } catch (error) {
        return error;
    }
};

const getAllAuthors = () => {
    try {
        const response = bookApi.getAllAuthors();
        return response;
    } catch (error) {
        return error;
    }
};

const getAllRatingStars = () => {
    try {
        const response = bookApi.getAllRatingStars();
        return response;
    } catch (error) {
        return error;
    }
};

const shopAdapter = {
    getDataFilter: async () => {
        return await Promise.all([
            getAllCategories(),
            getAllAuthors(),
            getAllRatingStars(),
        ])
            .then((result) => {
                const data = [
                    {
                        title: "Category",
                        data: result[0].data.map(function (item) {
                            return item.category_name;
                        }),
                        icon: faBook,
                    },
                    {
                        title: "Author",
                        data: result[1].data.map(function (item) {
                            return item.author_name;
                        }),
                        icon: faUserPen,
                    },
                    {
                        title: "Rating Review",
                        data: result[2].data.map(function (item) {
                            return `${item.rating_star} Star`;
                        }),
                        icon: faStar,
                    },
                ];
                return data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
};

export default shopAdapter;
