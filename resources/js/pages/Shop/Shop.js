import * as React from "react";

import { Col, Row } from "react-bootstrap";

import Dropdown from "../../components/base/Dropdown/Dropdown.js";
import FilterBy from "../../components/layouts/Shop/FilterBy.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListProduct from "../../components/base/ListProduct/ListProduct.js";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { mapStateToProps } from "../../utils/useSelector.js";
import { setDataFilter } from "../../redux/actions/filter.action.js";
import shopAdapter from "../../adapters/ShopAdapter/ShopAdapter.js";
import { showData } from "../../../assets/data/show.js";
import { sortData } from "../../../assets/data/sort.js";

class Shop extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getDataFilter();
    }

    getDataFilter = async () => {
        const dataFilter = await shopAdapter.getDataFilter();
        this.props.setDataFilter(dataFilter);
    };

    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
    };

    render() {
        return (
            <main>
                <section>
                    <h4 className="font-weight-semi">Books</h4>
                    <div className="app-divide mt-4 mb-5"></div>
                    <Row>
                        <Col md={3}>
                            <p className="mb-4 text-blue d-flex align-items-center">
                                <FontAwesomeIcon icon={faFilter} />
                                <span className="flex-grow-1 font-weight-semi ml-2">
                                    Filter By
                                </span>
                            </p>
                            <FilterBy data={this.props.filter.filters} />
                        </Col>
                        <Col md={9}>
                            <Row className="align-items-center mb-2">
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
                            <ListProduct customClass="p-2 align-items-stretch" />
                            <Row className="pt-4 mt-4">
                                <Col className="d-flex justify-content-center">
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
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
            </main>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDataFilter: (data) => dispatch(setDataFilter(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
