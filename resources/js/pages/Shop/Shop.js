import * as React from "react";

import { Col, Row } from "react-bootstrap";
import {
    getBooks,
    getShopData,
} from "../../adapters/ShopAdapter/ShopAdapter.js";

import ButtonSkeleton from "../../components/base/Skeleton/ButtonSkeleton.js";
import Dropdown from "../../components/base/Dropdown/Dropdown.js";
import { FaFilter } from "react-icons/fa";
import RenderBookData from "../../components/layouts/Shop/Common/RenderBookData.js";
import RenderCurrentValueFilter from "../../components/layouts/Shop/Common/RenderCurrentValueFilter.js";
import RenderFilterData from "../../components/layouts/Shop/Common/RenderFilterData.js";
import RenderPagination from "../../components/layouts/Shop/Common/RenderPagination.js";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../adapters/ShopAdapter/ShopAdapter.js";
import { mapStateToProps } from "../../utils/useSelector.js";
import { showData } from "../../../assets/data/show.js";
import { sortData } from "../../../assets/data/sort.js";

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.getShopData();
    }

    getShopData = async () => {
        const { data, books } = await getShopData();
        this.props.setDataFilter(data);
        this.setBooks(books);
        this.props.setFirstLoading(false);
    };

    handlePerPage = async (event) => {
        this.handleStateData(1);
        await this.props.setCurrentPerPage(event);
        const { category, author, perPage } = this.handleStateAdvanced();
        const response = await getBooks({
            perPage,
            category,
            author,
        });
        this.setBooks(response);
    };

    getFilterBooks = async () => {
        const { category, author, perPage } = this.handleStateAdvanced();
        this.handleStateData(1);
        const response = await getBooks({
            perPage,
            category,
            author,
        });
        this.setBooks(response);
    };

    handleStateData = (pageNumber) => {
        this.props.setLoading(true);
        this.props.setBooks([]);
        this.props.setCurrentPage(pageNumber);
    };

    handleStateAdvanced = () => {
        let category;
        let author;
        let perPage;
        const filterStateArray = [...this.props.shop.current_filter];
        const categoryIndex = filterStateArray.findIndex(
            (item) => item.title === "Category"
        );
        const authorIndex = filterStateArray.findIndex(
            (item) => item.title === "Author"
        );
        if (categoryIndex !== -1) {
            category = filterStateArray[categoryIndex].item;
        }
        if (authorIndex !== -1) {
            author = filterStateArray[authorIndex].item;
        }
        if (this.props.shop.per_page !== 5) {
            perPage = this.props.shop.per_page;
        }
        return {
            category,
            author,
            perPage,
        };
    };

    setBooks = (payload) => {
        const { data, total, last_page, from, to } = payload.data;
        this.props.setBooks(data);
        if (data.length > 0) {
            this.props.setIndexItem({ from, to });
            this.props.setTotalPage(last_page);
        } else {
            this.props.setIndexItem({ from: 0, to: 0 });
            this.props.setTotalPage(0);
        }
        this.props.setItemsTotal(total);
        this.props.setLoading(false);
    };

    render() {
        return (
            <main>
                <section>
                    <div className="d-flex align-items-center">
                        <h4 className="font-weight-semi">Books</h4>
                        <RenderCurrentValueFilter />
                    </div>
                    <div className="app-divide mt-4 mb-5"></div>
                    <Row>
                        <Col md={3}>
                            <p className="mb-4 text-blue d-flex align-items-center">
                                <FaFilter />
                                <span className="flex-grow-1 font-weight-semi ml-2">
                                    Filter By
                                </span>
                            </p>
                            <RenderFilterData
                                getFilterBooks={this.getFilterBooks}
                            />
                        </Col>
                        <Col md={9}>
                            <Row className="align-items-center mb-2">
                                <Col>
                                    <p>
                                        Showing {this.props.shop.from} -{" "}
                                        {this.props.shop.to} of{" "}
                                        {this.props.shop.items_total > 1 ? (
                                            <span>
                                                {this.props.shop.items_total}
                                                &nbsp;books
                                            </span>
                                        ) : (
                                            <span>
                                                {this.props.shop.items_total}
                                                &nbsp;book
                                            </span>
                                        )}
                                    </p>
                                </Col>
                                <Col className="d-flex justify-content-end">
                                    {this.props.shop.first_loading ? (
                                        <div className="d-flex align-items-center justify-content-center">
                                            <ButtonSkeleton />
                                            <span className="mx-2"></span>
                                            <ButtonSkeleton />
                                        </div>
                                    ) : (
                                        <>
                                            <Dropdown
                                                variant="blue"
                                                currentSelect="Sort by on sale"
                                                selectData={sortData}
                                                size="sm"
                                                customClass="mr-4"
                                            />
                                            <Dropdown
                                                variant="blue"
                                                currentSelect={`Show ${this.props.shop.per_page}`}
                                                size="sm"
                                                selectData={showData}
                                                handleCurrentItem={
                                                    this.handlePerPage
                                                }
                                            />
                                        </>
                                    )}
                                </Col>
                            </Row>
                            <RenderBookData />
                            <RenderPagination
                                handleStateAdvanced={this.handleStateAdvanced}
                                handleStateData={this.handleStateData}
                                setBooks={this.setBooks}
                            />
                        </Col>
                    </Row>
                </section>
            </main>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
