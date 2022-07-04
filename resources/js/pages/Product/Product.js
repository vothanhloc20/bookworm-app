import * as React from "react";

import { Col, Row } from "react-bootstrap";
import {
    getBookById,
    getReviewByBookId,
} from "../../adapters/ProductAdapter/ProductAdapter.js";

import FormReview from "../../components/layouts/Product/FormReview.js";
import RenderAddToCart from "../../components/layouts/Product/Common/RenderAddToCart.js";
import RenderCustomerReviews from "../../components/layouts/Product/Common/RenderCustomerReviews.js";
import RenderProductInformation from "../../components/layouts/Product/Common/RenderProductInformation.js";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../adapters/ProductAdapter/ProductAdapter.js";
import { mapStateToProps } from "../../utils/useSelector.js";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book_id: 0,
        };
    }

    async componentDidMount() {
        const bookId = await this.getIdBook();
        this.setState({ book_id: bookId });
        this.getBookById(bookId);
        this.getReviewByBookId(bookId);
    }

    getIdBook = () => {
        return Number.parseInt(window.location.pathname.split("/").at(-1));
    };

    getBookById = (bookId) => {
        getBookById(bookId).then((result) => {
            const { data } = result;
            this.props.setDetailBook(data);
        });
    };

    getReviewByBookId = (bookId) => {
        getReviewByBookId({ id: bookId }).then((result) => {
            this.setReviews(result);
            this.props.setFirstLoadingReview(false);
        });
    };

    handlePerPage = async (event) => {
        const per_page = Number.parseInt(event.split(" ")[1]);
        this.handleStateData(1);
        await this.props.setPerPage(per_page);
        this.handleSetReviews();
    };

    handleFilter = async (ratingStar) => {
        this.handleStateData(1);
        if (ratingStar === this.props.product.current_filter_star) {
            await this.props.setCurrentFilterStar(0);
        } else {
            await this.props.setCurrentFilterStar(ratingStar);
        }
        this.handleSetReviews();
    };

    handleSort = async (event) => {
        this.handleStateData(1);
        switch (event) {
            case "Sort by date: newest to oldest":
                await this.props.setSortReview({
                    sort_key: "Sort by date: newest to oldest",
                    sort_value: "desc",
                });
                break;
            case "Sort by date: oldest to newest":
                await this.props.setSortReview({
                    sort_key: "Sort by date: oldest to newest",
                    sort_value: "asc",
                });
                break;
        }
        this.handleSetReviews();
    };

    handleSetReviews = async () => {
        const { rating_star, perPage, sortValue, sortKey, id } =
            this.handleStateAdvanced();
        const result = await getReviewByBookId({
            id,
            perPage,
            ratingStar: rating_star,
            sortValue,
            sortKey,
        });
        this.setReviews(result);
    };

    handleStateData = (pageNumber) => {
        this.props.setSecondLoadingReview(true);
        this.props.setReviewData([]);
        this.props.setCurrentPageReview(pageNumber);
    };

    handleStateAdvanced = () => {
        let rating_star;
        let perPage;
        let sortKey;
        let sortValue;
        const id = this.state.book_id;

        if (this.props.product.current_filter_star !== 0) {
            rating_star = this.props.product.current_filter_star;
        }

        if (this.props.product.per_page !== 5) {
            perPage = this.props.product.per_page;
        }

        if (this.props.product.sort_key && this.props.product.sort_value) {
            sortValue = this.props.product.sort_value;
            sortKey = "review_date";
        }

        return {
            id,
            rating_star,
            perPage,
            sortKey,
            sortValue,
        };
    };

    setReviews = (payload) => {
        const response = payload.data;
        const {
            data,
            count_rating_star,
            from,
            to,
            last_page,
            total,
            general_total,
        } = response;
        this.props.setReviewData(data);
        if (count_rating_star !== null) {
            this.props.setCountRatingStar(count_rating_star);
        }
        if (data.length > 0) {
            this.props.setFromReview(from);
            this.props.setToReview(to);
            this.props.setTotalPageReview(last_page);
        } else {
            this.props.setFromReview(0);
            this.props.setToReview(0);
            this.props.setTotalPageReview(0);
        }
        this.props.setTotalReview(total);
        if (general_total !== null) {
            this.props.setAverageReview(
                parseFloat(general_total.average_rating_star).toFixed(2)
            );
        }
        this.props.setSecondLoadingReview(false);
    };

    render() {
        return (
            <main>
                <section>
                    <h4 className="font-weight-semi">Category Name</h4>
                    <div className="app-divide mt-4 mb-5"></div>
                    <Row className="mb-4">
                        <Col md={8}>
                            <RenderProductInformation />
                        </Col>
                        <Col md={4}>
                            <RenderAddToCart />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>
                            <RenderCustomerReviews
                                handleStateData={this.handleStateData}
                                handleStateAdvanced={this.handleStateAdvanced}
                                setReviews={this.setReviews}
                                handlePerPage={this.handlePerPage}
                                handleSort={this.handleSort}
                                handleFilter={this.handleFilter}
                            />
                        </Col>
                        <Col md={4}>
                            <FormReview />
                        </Col>
                    </Row>
                </section>
            </main>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
