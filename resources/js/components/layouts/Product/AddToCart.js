import * as React from "react";

import { Button, Card } from "react-bootstrap";

import ControlQuantity from "../../../components/base/ControlQuantity/ControlQuantity.js";

class AddToCart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <Card.Header className="bg-blue">
                    <strike className="text-white">
                        <span className="font-weight-medium">$90.00</span>
                    </strike>
                    &nbsp;
                    <span className="text-red font-weight-bold font-20px">
                        $60.00
                    </span>
                </Card.Header>
                <Card.Body className="p-5">
                    <div className="mb-5">
                        <p className="mb-3">Quantity</p>
                        <ControlQuantity />
                    </div>
                    <Button variant="blue" block className="font-weight-semi">
                        Place Order
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}

export default AddToCart;
