import * as React from "react";

import { Button, Col, Row } from "react-bootstrap";

import FeaturedBooks from "../../components/layouts/Home/FeaturedBooks.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GridSkeleton from "../../components/base/Skeleton/GridSkeleton.js";
import OnSale from "../../components/layouts/Home/OnSale.js";
import { connect } from "react-redux";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import homeAdapter from "../../adapters/HomeAdapter/HomeAdapter.js";
import { mapStateToProps } from "../../utils/useSelector.js";
import { setTopTenOnSaleBooks } from "../../redux/actions/home.action.js";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getTopTenOnSaleBooks();
    }

    getTopTenOnSaleBooks = async () => {
        const { data } = await homeAdapter.getTopTenOnSaleBooks();
        this.props.setTopTenOnSaleBooks(data);
    };

    render() {
        return (
            <main>
                <section className="mb-5">
                    <Row className="align-items-center mb-4">
                        <Col>
                            <h4 className="font-weight-semi">On Sale</h4>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <Button variant="blue" className="font-weight-semi">
                                View All &nbsp;
                                <FontAwesomeIcon icon={faChevronRight} />
                            </Button>
                        </Col>
                    </Row>
                    {this.props.home.topTenOnSaleBooks.length === 0 && (
                        <GridSkeleton columns={3} quantity={4} />
                    )}
                    {this.props.home.topTenOnSaleBooks.length > 0 && (
                        <OnSale data={this.props.home.topTenOnSaleBooks} />
                    )}
                </section>
                <section>{/* <FeaturedBooks /> */}</section>
            </main>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTopTenOnSaleBooks: (data) => dispatch(setTopTenOnSaleBooks(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
