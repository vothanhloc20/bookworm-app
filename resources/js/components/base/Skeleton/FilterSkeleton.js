import * as React from "react";

import { Card } from "react-bootstrap";

class FilterSkeleton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className="app-skeleton">
                <Card.Header>
                    <div className="skeleton-title skeleton-animation"></div>
                </Card.Header>
                <Card.Body>
                    <div className="skeleton-title skeleton-animation mb-4"></div>
                    <div className="skeleton-title skeleton-animation mb-4"></div>
                    <div className="skeleton-title skeleton-animation mb-4"></div>
                    <div className="skeleton-title skeleton-animation mb-4"></div>
                    <div className="skeleton-title skeleton-animation"></div>
                </Card.Body>
            </Card>
        );
    }
}

export default FilterSkeleton;
