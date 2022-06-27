import {
    setIsRecommended,
    setPopularBooks,
    setRecommendedBooks,
    setTagFeaturedBooks,
    setTopTenOnSaleBooks,
} from "../../redux/actions/home.action";

import bookApi from "../../api/bookApi";

export const mapDispatchToProps = (dispatch) => {
    return {
        setTopTenOnSaleBooks: (data) => dispatch(setTopTenOnSaleBooks(data)),
        setRecommendedBooks: (data) => dispatch(setRecommendedBooks(data)),
        setPopularBooks: (data) => dispatch(setPopularBooks(data)),
        setTagFeaturedBooks: (data) => dispatch(setTagFeaturedBooks(data)),
        setIsRecommended: (data) => dispatch(setIsRecommended(data)),
    };
};

export const getTopTenOnSaleBooks = () => {
    return bookApi.getTopTenOnSaleBooks();
};

export const getRecommendedBooks = () => {
    return bookApi.getRecommendedBooks();
};

export const getPopularBooks = () => {
    return bookApi.getPopularBooks();
};
