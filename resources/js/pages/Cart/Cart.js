import * as React from "react";

import { Col, Row } from "react-bootstrap";

import CartList from "../../components/layouts/Cart/CartList.js";
import CartTotals from "../../components/layouts/Cart/CartTotals.js";
import { booksData } from "../../../assets/data/books.js";

class Cart extends React.Component {
    render() {
        return (
            <main>
                <section>
                    <h4 className="font-weight-semi">Your Cart: 3 items</h4>
                    <div className="app-divide mt-4 mb-5"></div>
                    <Row>
                        <Col md={9}>
                            <CartList data={booksData} />
                        </Col>
                        <Col md={3}>
                            <CartTotals />
                        </Col>
                    </Row>
                </section>
            </main>
        );
    }
}

export default Cart;
