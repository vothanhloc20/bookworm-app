import * as React from "react";

import { Button, Card } from "react-bootstrap";

class CartTotals extends React.Component {
    render() {
        return (
            <Card>
                <Card.Header className="text-center bg-blue">
                    <h6 className="text-white font-weight-semi">Cart Totals</h6>
                </Card.Header>
                <Card.Body className="p-5 text-center">
                    <Card.Title className="mb-5">
                        <h3 className="font-weight-bold">$99.97</h3>
                    </Card.Title>
                    <Button variant="blue" className="font-weight-semi">
                        Place Order
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}

export default CartTotals;
