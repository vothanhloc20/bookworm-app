import * as React from "react";

import { Card, Col, Row } from "react-bootstrap";

import Chip from "../../base/Chip/Chip.js";
import Dropdown from "../../../components/base/Dropdown/Dropdown.js";
import Pagination from "react-js-pagination";
import RenderFilterRatingReview from "./Common/RenderFilterRatingReview.js";
import RenderListReviews from "./Common/RenderListReviews.js";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../adapters/ProductAdapter/ProductAdapter.js";
import { mapStateToProps } from "../../../utils/useSelector.js";
import { showData } from "../../../../assets/data/show.js";
import { sortReviewData } from "../../../../assets/data/review_sort.js";

class CustomerReviews extends React.Component {
    constructor(props) {
        super(props);
    }

    handlePageChange = (pageNumber) => {
        this.props.handleStateData(pageNumber);
    };

    handlePerPage = (event) => {
        this.props.handlePerPage(event);
    };

    handleSort = (event) => {
        this.props.handleSort(event);
    };

    handleFilter = (ratingStar) => {
        this.props.handleFilter(ratingStar);
    };

    render() {
        return (
            <Card className="bg-light-blue">
                <div className="p-4">
                    <p className="mb-4">
                        <span className="font-20px font-weight-semi">
                            Customer Reviews
                        </span>
                        {this.props.product.current_filter_star !== 0 && (
                            <>
                                &nbsp;
                                <span className="23text-grey font-14px">
                                    (Filtered by )
                                </span>
                            </>
                        )}
                    </p>
                    <div className="d-flex align-items-center mb-4">
                        <div>
                            <h4>{this.props.product.average}</h4>
                            <p>
                                <u>({this.props.product.total_review})</u>
                            </p>
                        </div>
                        <div className="flex-grow-1 ml-3">
                            <h4>Star</h4>
                            <RenderFilterRatingReview
                                handleFilter={this.handleFilter}
                            />
                        </div>
                    </div>
                    <Row className="align-items-center mb-5">
                        <Col>
                            <p>
                                Showing {this.props.product.from} -{" "}
                                {this.props.product.to} of{" "}
                                {this.props.product.total_review === 1
                                    ? `${this.props.product.total_review} review`
                                    : `${this.props.product.total_review} reviews`}{" "}
                            </p>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <Dropdown
                                variant="blue"
                                currentSelect={this.props.product.sort_key}
                                selectData={sortReviewData}
                                size="sm"
                                customClass="mr-4"
                                handleCurrentItem={this.handleSort}
                            />
                            <Dropdown
                                variant="blue"
                                currentSelect={`Show ${this.props.product.per_page}`}
                                size="sm"
                                selectData={showData}
                                handleCurrentItem={this.handlePerPage}
                            />
                        </Col>
                    </Row>
                    <RenderListReviews />
                    {this.props.product.total_page > 0 && (
                        <div className="mt-4 d-flex justify-content-center">
                            <Pagination
                                activePage={this.props.product.current_page}
                                itemsCountPerPage={Number.parseInt(
                                    this.props.product.per_page
                                )}
                                totalItemsCount={Number.parseInt(
                                    this.props.product.total_review
                                )}
                                pageRangeDisplayed={3}
                                prevPageText="Previous"
                                nextPageText="Next"
                                itemClass="page-item"
                                linkClass="page-link"
                                onChange={this.handlePageChange}
                            />
                        </div>
                    )}
                </div>
            </Card>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerReviews);
