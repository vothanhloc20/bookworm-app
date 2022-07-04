import * as React from "react";

import { Card, Col, Row } from "react-bootstrap";

class ProductInformationSkeleton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className="app-skeleton">
                <Row>
                    <Col md={3}>
                        <div className="skeleton-image mb-4">
                            <div className="skeleton-image-layout">
                                <div className="skeleton-image-layout-image skeleton-product-image skeleton-animation " />
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <div className="skeleton-title skeleton-animation" />
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className="p-4">
                            <div className="skeleton-title skeleton-animation mb-4" />
                            <div className="skeleton-subtitle skeleton-animation mb-3" />
                            {[...Array(8)].map((item, index) => (
                                <div
                                    key={index}
                                    className={`skeleton-main-title skeleton-animation ${
                                        index < 8 ? "mb-2" : ""
                                    }`}
                                />
                            ))}
                            <br />
                            {[...Array(2)].map((item, index) => (
                                <div
                                    key={index}
                                    className={`skeleton-main-title skeleton-animation ${
                                        index < 1 ? "mb-2" : ""
                                    }`}
                                />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default ProductInformationSkeleton;
