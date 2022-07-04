import * as React from "react";

import ButtonSkeleton from "./ButtonSkeleton.js";
import { Card } from "react-bootstrap";

class ProductAddToCartSkeleton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className="app-skeleton">
                <Card.Header>
                    <div className="skeleton-title skeleton-animation" />
                </Card.Header>
                <Card.Body className="p-5">
                    <div className="mb-5">
                        <div className="skeleton-title skeleton-animation mb-3" />
                        <ButtonSkeleton />
                    </div>
                    <ButtonSkeleton />
                </Card.Body>
            </Card>
        );
    }
}

export default ProductAddToCartSkeleton;
