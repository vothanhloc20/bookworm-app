import * as React from "react";

import ButtonSkeleton from "./ButtonSkeleton";
import { Card } from "react-bootstrap";

class ProductFormReviewSkeleton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className="app-skeleton">
                <Card.Header>
                    <div className="skeleton-title skeleton-animation" />
                </Card.Header>
                <Card.Body>
                    <div className="mb-4">
                        <div className="skeleton-subtitle skeleton-animation mb-2" />
                        <div className="skeleton-main-title skeleton-animation" />
                    </div>
                    <div className="mb-4">
                        <div className="skeleton-subtitle skeleton-animation mb-2" />
                        <div className="skeleton-main-title skeleton-animation" />
                    </div>
                    <div>
                        <div className="skeleton-subtitle skeleton-animation mb-2" />
                        <div className="skeleton-main-title skeleton-animation" />
                    </div>
                </Card.Body>
                <Card.Footer>
                    <ButtonSkeleton />
                </Card.Footer>
            </Card>
        );
    }
}

export default ProductFormReviewSkeleton;
