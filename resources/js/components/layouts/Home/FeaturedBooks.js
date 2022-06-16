import * as React from 'react';
import {Row, Col, Button} from "react-bootstrap";
import {booksData} from '../../../../assets/data/books.js';
import CardProduct from '../../base/CardProduct/CartProduct.js';
import {bookCoverData} from '../../../../assets/data/bookcover';

class FeaturedBooks extends React.Component {
    render() {
        return (
            <>
                <div className="text-center mb-4">
                    <h4 className="font-weight-semi mb-4">
                        Featured Books
                    </h4>
                    <Button variant="blue" className="font-weight-semi">
                        Recommended
                    </Button>
                    <Button variant="link" className="font-weight-semi">
                        Popular
                    </Button>
                </div>
                <Row>
                    {booksData.map((item, index) => {
                        return (
                            <Col
                                key={index}
                                md={3}
                                className="pb-1 mb-4 align-items-stretch"
                            >
                                <CardProduct
                                    productImage={bookCoverData[item.image]}
                                    productName={item.name}
                                    productAuthor={item.author}
                                    productDiscountPrice={item.discount_price}
                                    productFinalPrice={item.final_price}
                                />
                            </Col>
                        )
                    })}
                </Row>
            </>
        )
    }
}

export default FeaturedBooks;
