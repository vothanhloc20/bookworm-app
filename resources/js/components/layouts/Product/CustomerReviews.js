import * as React from "react";

import { Card, Col, Row } from "react-bootstrap";

import Dropdown from "../../../components/base/Dropdown/Dropdown.js";
import Pagination from "react-js-pagination";
import { showData } from "../../../../assets/data/show.js";
import { sortData } from "../../../../assets/data/sort.js";

class CustomerReviews extends React.Component {
    constructor(props) {
        super(props);
    }

    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
    };

    render() {
        return (
            <Card className="bg-light-blue">
                <div className="p-4">
                    <p className="mb-4">
                        <span className="font-20px font-weight-semi">
                            Customer Reviews
                        </span>
                        &nbsp;
                        <span className="text-grey font-14px">
                            (Filtered by 5 star)
                        </span>
                    </p>
                    <div className="d-flex align-items-center mb-4">
                        <div>
                            <h4>4.6</h4>
                            <p>
                                <u>(3,134)</u>
                            </p>
                        </div>
                        <div className="flex-grow-1 ml-3">
                            <h4>Star</h4>
                            <ul className="d-flex align-items-center">
                                <li className="pr-2 app-border-right">
                                    <u>5 star (200)</u>
                                </li>
                                <li className="px-2 app-border-right">
                                    <u>4 star (200)</u>
                                </li>
                                <li className="px-2 app-border-right">
                                    <u>3 star (200)</u>
                                </li>
                                <li className="px-2 app-border-right">
                                    <u>2 star (200)</u>
                                </li>
                                <li className="pl-2">
                                    <u>1 star (200)</u>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Row className="align-items-center mb-5">
                        <Col>
                            <p>Showing 1 - 12 of 126 books</p>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <Dropdown
                                variant="blue"
                                currentSelect="Sort by on sale"
                                selectData={sortData}
                                size="sm"
                                customClass="mr-4"
                            />
                            <Dropdown
                                variant="blue"
                                currentSelect="Show 5"
                                size="sm"
                                selectData={showData}
                            />
                        </Col>
                    </Row>
                    <div className="mb-3">
                        <div className="mb-3">
                            <span className="font-20px font-weight-semi mr-2">
                                Review Title
                            </span>
                            <span className="app-border-right"></span>
                            <span className="text-grey font-14px ml-2">
                                5 star
                            </span>
                        </div>
                        <div className="mb-2">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy
                            </p>
                        </div>
                        <div>
                            <p className="font-14px">May 20, 2022</p>
                        </div>
                    </div>
                    <div className="app-divide-2"></div>
                    <div className="mt-4 d-flex justify-content-center">
                        <Pagination
                            activePage={1}
                            itemsCountPerPage={5}
                            totalItemsCount={450}
                            pageRangeDisplayed={3}
                            prevPageText="Previous"
                            nextPageText="Next"
                            itemClass="page-item"
                            linkClass="page-link"
                            onChange={this.handlePageChange}
                        />
                    </div>
                </div>
            </Card>
        );
    }
}

export default CustomerReviews;
