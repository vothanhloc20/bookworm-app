import * as React from "react";

import { Card } from "react-bootstrap";

class Skeleton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card id="app-skeleton">
                <div className="skeleton-image">
                    <div className="skeleton-image-layout">
                        <div className="skeleton-image-layout-image skeleton-animation"></div>
                    </div>
                </div>
                <Card.Body>
                    <div className="skeleton-main-title skeleton-animation mb-3"></div>
                    <div className="skeleton-title skeleton-animation mb-5"></div>
                    <div className="skeleton-subtitle skeleton-animation"></div>
                </Card.Body>
                <Card.Footer>
                    <div className="skeleton-title skeleton-animation"></div>
                </Card.Footer>
            </Card>
        );
    }
}

export default Skeleton;
