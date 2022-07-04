import * as React from "react";

import { Card, Col, Row } from "react-bootstrap";

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
                                <img
                                    src={this.props.cover}
                                    alt={this.props.title}
                                />
                            </div>
                        </div>
                        <p className="text-right font-14px mb-4 ml-4">
                            By (author){" "}
                            <span className="font-weight-semi">
                                {this.props.author}
                            </span>
                        </p>
                    </Col>
                    <Col md={9}>
                        <div className="p-4 text-justify">
                            <h5 className="mb-4 font-weight-semi">
                                {this.props.title}
                            </h5>
                            <p className="font-weight-medium mb-2">
                                Book description
                            </p>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: this.props.summary,
                                }}
                            />
                        </div>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default ProductInformation;
