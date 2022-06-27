import { FaBook, FaStar, FaUserEdit } from "react-icons/fa";
import {
    editCurrentFilter,
    removeCurrentFilter,
    setBooks,
    setCurrentFilter,
    setCurrentPage,
    setCurrentPerPage,
    setIndexItem,
    setItemsTotal,
    setTotalPage,
} from "../../redux/actions/shop.action.js";

import bookApi from "../../api/bookApi.js";
import { setDataFilter } from "../../redux/actions/filter.action.js";

export const getAllCategories = () => {
    return bookApi.getAllCategories();
};

export const getAllAuthors = () => {
    return bookApi.getAllAuthors();
};

export const getAllRatingStars = () => {
    return bookApi.getAllRatingStars();
};

export const getBooks = ({
    page = undefined,
    perPage = undefined,
    category = undefined,
    author = undefined,
} = {}) => {
    return bookApi.getBooks({
        page,
        perPage,
        category,
        author,
    });
};

export const getShopData = async () => {
    return Promise.all([
        getAllCategories(),
        getAllAuthors(),
        getAllRatingStars(),
        getBooks(),
    ]).then((result) => {
        const data = [
            {
                title: "Category",
                data: result[0].data.map((item) => item.category_name),
                icon: <FaBook />,
            },
            {
                title: "Author",
                data: result[1].data.map((item) => item.author_name),
                icon: <FaUserEdit />,
            },
            {
                title: "Rating Review",
                data: result[2].data.map((item) =>
                    item.rating_star === 1
                        ? `${item.rating_star} Star`
                        : `${item.rating_star} Stars`
                ),
                icon: <FaStar />,
            },
        ];
        const books = result[3];
        return {
            data,
            books,
        };
    });
};

export const mapDispatchToProps = (dispatch) => {
    return {
        setDataFilter: (data) => dispatch(setDataFilter(data)),
        setTotalPage: (data) => dispatch(setTotalPage(data)),
        setItemsTotal: (data) => dispatch(setItemsTotal(data)),
        setCurrentPage: (data) => dispatch(setCurrentPage(data)),
        setIndexItem: (data) => dispatch(setIndexItem(data)),
        setBooks: (data) => dispatch(setBooks(data)),
        setCurrentPerPage: (data) => dispatch(setCurrentPerPage(data)),
        setCurrentFilter: (data) => dispatch(setCurrentFilter(data)),
        editCurrentFilter: (data) => dispatch(editCurrentFilter(data)),
        removeCurrentFilter: (data) => dispatch(removeCurrentFilter(data)),
    };
};
