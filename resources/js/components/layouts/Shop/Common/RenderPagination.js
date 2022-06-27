import * as React from "react";

import { Col, Row } from "react-bootstrap";

import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import { getBooks } from "../../../../adapters/ShopAdapter/ShopAdapter";
import { mapStateToProps } from "../../../../utils/useSelector";

class RenderPagination extends React.Component {
    constructor(props) {
        super(props);
    }

    handlePageChange = async (pageNumber) => {
        let perPage;
        this.props.handleStateData(pageNumber);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        if (this.props.shop.per_page !== 5) {
            perPage = this.props.shop.per_page;
        }
        const response = await getBooks({
            page: pageNumber,
            perPage,
        });
        this.props.setBooks(response);
    };

    render() {
        let onPaginate;

        if (this.props.shop.total_page > 0) {
            onPaginate = (
                <Row className="pt-4 mt-4">
                    <Col className="d-flex justify-content-center">
                        <Pagination
                            activePage={this.props.shop.current_page}
                            itemsCountPerPage={Number.parseInt(
                                this.props.shop.per_page
                            )}
                            totalItemsCount={Number.parseInt(
                                this.props.shop.items_total
                            )}
                            pageRangeDisplayed={3}
                            prevPageText="Previous"
                            nextPageText="Next"
                            itemClass="page-item"
                            linkClass="page-link"
                            onChange={this.handlePageChange}
                        />
                    </Col>
                </Row>
            );
        }

        return <>{onPaginate}</>;
    }
}

export default connect(mapStateToProps, null)(RenderPagination);
