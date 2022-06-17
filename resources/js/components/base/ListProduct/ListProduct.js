import * as React from "react";

import { Col, Row } from "react-bootstrap";

import CardProduct from "../CardProduct/CardProduct";
import { bookCoverData } from "../../../../assets/data/bookcover";
import { booksData } from "../../../../assets/data/books";

class ListProduct extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row>
                {booksData.map((item, index) => {
                    return (
                        <Col
                            key={index}
                            md={3}
                            className={this.props.customClass}
                        >
                            <CardProduct
                                productImage={bookCoverData[item.image]}
                                productName={item.name}
                                productAuthor={item.author}
                                productDiscountPrice={item.discount_price}
                                productFinalPrice={item.final_price}
                            />
                        </Col>
                    );
                })}
            </Row>
        );
    }
}

export default ListProduct;
