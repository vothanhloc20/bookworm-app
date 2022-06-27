import * as React from "react";

import { Col, Row } from "react-bootstrap";

import CardProduct from "../CardProduct/CardProduct";
import { bookCoverData } from "../../../../assets/data/bookcover";

class ListProduct extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row>
                {this.props.data.map((item, index) => {
                    return (
                        <Col
                            key={index}
                            xl={this.props.xl}
                            lg={this.props.lg}
                            md={this.props.md}
                            sm={this.props.sm}
                            className={this.props.customClass}
                        >
                            <CardProduct
                                productImage={
                                    bookCoverData[item.book_cover_photo]
                                }
                                productName={item.book_title}
                                productAuthor={item.author_name}
                                productDiscountPrice={item.discount_price}
                                productFinalPrice={item.book_price}
                            />
                        </Col>
                    );
                })}
            </Row>
        );
    }
}

export default ListProduct;
