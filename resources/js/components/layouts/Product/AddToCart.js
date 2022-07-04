import * as React from "react";

import { Button, Card } from "react-bootstrap";

import ControlQuantity from "../../../components/base/ControlQuantity/ControlQuantity.js";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../adapters/ProductAdapter/ProductAdapter.js";
import { mapStateToProps } from "../../../utils/useSelector.js";

class AddToCart extends React.Component {
    constructor(props) {
        super(props);
    }

    setQuantity = (quantity) => {
        if (quantity === "") {
            this.handlePrice(1);
            this.props.setQuantityBook(quantity);
        } else {
            this.handlePrice(parseInt(quantity));
            this.props.setQuantityBook(parseInt(quantity));
        }
    };

    handleQuantity = (action) => {
        if (this.props.product.quantity === "") {
            this.props.setQuantityBook(1);
            this.handlePrice(1);
        } else {
            const currentQuantity = Number.parseInt(
                this.props.product.quantity
            );
            let quantity = 1;
            if (action === "minus" && currentQuantity > 1) {
                quantity = currentQuantity - 1;
                this.handlePrice(quantity);
                this.props.setQuantityBook(quantity);
            } else if (action === "add" && currentQuantity < 8) {
                quantity = currentQuantity + 1;
                this.handlePrice(quantity);
                this.props.setQuantityBook(quantity);
            }
        }
    };

    handlePrice = (quantity) => {
        const final_discount_price = parseFloat(
            (this.props.product.price_book * quantity).toFixed(2)
        );
        if (this.props.product.detail_book[0].is_discount) {
            this.props.setDiscountPriceBook(final_discount_price.toString());
        } else {
            this.props.setMainPriceBook(final_discount_price.toString());
        }
    };

    render() {
        return (
            <Card>
                <Card.Header className="bg-blue">
                    {!this.props.product.detail_book[0].is_discount ? (
                        <span className="text-red font-weight-bold font-20px">
                            ${this.props.product.detail_book[0].book_price}
                        </span>
                    ) : (
                        <>
                            <strike className="text-white">
                                <span className="font-weight-medium">
                                    $
                                    {
                                        this.props.product.detail_book[0]
                                            .book_price
                                    }
                                </span>
                            </strike>
                            &nbsp;
                            <span className="text-red font-weight-bold font-20px">
                                $
                                {
                                    this.props.product.detail_book[0]
                                        .discount_price
                                }
                            </span>
                        </>
                    )}
                </Card.Header>
                <Card.Body className="p-5">
                    <div className="mb-5">
                        <p className="mb-3">Quantity</p>
                        <ControlQuantity
                            quantity={this.props.product.quantity}
                            setQuantity={this.setQuantity}
                            handleQuantity={this.handleQuantity}
                        />
                    </div>
                    <Button variant="blue" block className="font-weight-semi">
                        Add to Cart
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
