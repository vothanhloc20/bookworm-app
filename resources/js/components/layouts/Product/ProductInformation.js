import * as React from "react";

import { Card, Col, Row } from "react-bootstrap";

import Book1 from "../../../../assets/bookcover/book1.jpg";

class ProductInformation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card id="app-product-information">
                <Row>
                    <Col md={3}>
                        <div className="pi-image mb-4">
                            <div className="image-layout">
                                <img src={Book1} alt="Book Cover" />
                            </div>
                        </div>
                        <p className="text-right font-14px">
                            By (author){" "}
                            <span className="font-weight-semi">Anna Banks</span>
                        </p>
                    </Col>
                    <Col md={9}>
                        <div className="p-4 text-justify">
                            <h5 className="mb-4 font-weight-semi">
                                Book Title
                            </h5>
                            <p className="mb-2">Book description</p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                            </p>
                            <br />
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy
                            </p>
                        </div>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default ProductInformation;
