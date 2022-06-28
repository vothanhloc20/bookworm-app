import * as React from "react";

import { Button, Col, Row } from "react-bootstrap";
import {
    getPopularBooks,
    getRecommendedBooks,
    getTopTenOnSaleBooks,
    mapDispatchToProps,
} from "../../adapters/HomeAdapter/HomeAdapter.js";

import ButtonSkeleton from "../../components/base/Skeleton/ButtonSkeleton.js";
import { FaAngleRight } from "react-icons/fa";
import RenderOnFeatured from "../../components/layouts/Home/Common/RenderOnFeatured.js";
import RenderOnSale from "../../components/layouts/Home/Common/RenderOnSale.js";
import { connect } from "react-redux";
import { mapStateToProps } from "../../utils/useSelector.js";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getHomeBooksData();
    }

    getHomeBooksData = () => {
        getTopTenOnSaleBooks().then((result) => {
            this.props.setTopTenOnSaleBooks(result.data);
        });
        getRecommendedBooks().then((result) => {
            this.props.setRecommendedBooks(result.data);
            this.props.setTagFeaturedBooks(result.data);
        });
    };

    getPopularBooks = async () => {
        const { data } = await getPopularBooks();
        this.props.setPopularBooks(data);
        this.props.setTagFeaturedBooks(data);
    };

    handleTags = (tag) => {
        this.props.setIsRecommended(!this.props.home.isRecommended);
        if (tag === "recommended") {
            this.props.setTagFeaturedBooks(this.props.home.recommendedBooks);
        } else if (tag === "popular") {
            if (this.props.home.popularBooks.length === 0) {
                this.props.setTagFeaturedBooks([]);
                this.getPopularBooks();
            } else {
                this.props.setTagFeaturedBooks(this.props.home.popularBooks);
            }
        }
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
                            {this.props.home.topTenOnSaleBooks.length > 0 ? (
                                <Button
                                    variant="blue"
                                    className="font-weight-semi d-flex align-items-center"
                                >
                                    <span className="flex-grow-1">
                                        View All
                                    </span>
                                    &nbsp;
                                    <FaAngleRight />
                                </Button>
                            ) : (
                                <ButtonSkeleton />
                            )}
                        </Col>
                    </Row>
                    <RenderOnSale />
                </section>
                <section>
                    <div className="text-center mb-4">
                        <h4 className="font-weight-semi mb-4">
                            Featured Books
                        </h4>
                        {this.props.home.tagFeaturedBooks.length > 0 ? (
                            <>
                                <Button
                                    variant={
                                        this.props.home.isRecommended
                                            ? "blue"
                                            : "link"
                                    }
                                    className="font-weight-semi"
                                    disabled={this.props.home.isRecommended}
                                    onClick={() =>
                                        this.handleTags("recommended")
                                    }
                                >
                                    Recommended
                                </Button>
                                <Button
                                    variant={
                                        this.props.home.isRecommended
                                            ? "link"
                                            : "blue"
                                    }
                                    disabled={!this.props.home.isRecommended}
                                    className="font-weight-semi"
                                    onClick={() => this.handleTags("popular")}
                                >
                                    Popular
                                </Button>
                            </>
                        ) : (
                            <div className="d-flex align-items-center justify-content-center">
                                <ButtonSkeleton />
                                <span className="mx-2"></span>
                                <ButtonSkeleton />
                            </div>
                        )}
                    </div>
                    <RenderOnFeatured />
                </section>
            </main>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
