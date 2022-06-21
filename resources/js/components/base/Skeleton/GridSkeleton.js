import * as React from "react";

import { Col, Row } from "react-bootstrap";

import Skeleton from "./Skeleton.js";

class GridSkeleton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.columns);

        return (
            <Row>
                {[...Array(this.props.quantity)].map((item, index) => (
                    <Col md={this.props.columns} key={index}>
                        <Skeleton />
                    </Col>
                ))}
            </Row>
        );
    }
}

export default GridSkeleton;
