import * as React from "react";

import { Card, Col, Row } from "react-bootstrap";

import ButtonSkeleton from "./ButtonSkeleton";

class ProductCustomerReviewSkeleton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className="app-skeleton">
                <div className="p-4">
                    <div className="skeleton-title skeleton-animation mb-4" />
                    <div className="mb-4">
                        <div className="skeleton-subtitle skeleton-animation mb-2" />
                        <div className="skeleton-main-title skeleton-animation" />
                    </div>
                    <Row className="align-items-center mb-5">
                        <Col>
                            <div className="skeleton-subtitle skeleton-animation mb-2" />
                        </Col>
                        <Col className="d-flex align-items-center justify-content-end">
                            <ButtonSkeleton />
                            <span className="mx-2"></span>
                            <ButtonSkeleton />
                        </Col>
                    </Row>
                    {[...Array(5)].map((item, index) => (
                        <div
                            key={index}
                            className={`${index < 4 ? "mb-5" : ""}`}
                        >
                            <div className="skeleton-subtitle skeleton-animation mb-3" />
                            <div className="skeleton-main-title skeleton-animation mb-2"></div>
                            <div className="skeleton-main-title skeleton-animation mb-2"></div>
                            <div className="skeleton-subtitle-2 skeleton-animation" />
                        </div>
                    ))}
                </div>
            </Card>
        );
    }
}

export default ProductCustomerReviewSkeleton;
