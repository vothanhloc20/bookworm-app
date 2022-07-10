import * as React from "react";

import { Col, Row } from "react-bootstrap";

import CartList from "../../components/layouts/Cart/CartList.js";
import CartTotals from "../../components/layouts/Cart/CartTotals.js";
import { connect } from "react-redux";
import { deleteKeyValue } from "../../utils/deleteKeyValue.js";
import { mapStateToProps } from "../../utils/useSelector.js";
import { setSumCartQuantity } from "../../redux/actions/app.action.js";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            total_amount: "0",
        };
    }

    componentDidMount() {
        this.getCart();
    }

    getCart = () => {
        const checkCart = localStorage.getItem("cart");

        if (checkCart) {
            const cart = JSON.parse(checkCart);
            const newCart = cart.map((obj) => ({
                ...obj,
                temp_quantity: obj.quantity.toString(),
            }));
            this.handleSumAmount(newCart);
            this.setState({ cart: [...newCart] });
        }
    };

    handleSumAmount = (data) => {
        const initialValue = 0;
        const sumAmount = data.reduce((accumulator, current) => {
            return current.is_discount
                ? accumulator + parseFloat(current.discount_price)
                : accumulator + parseFloat(current.book_price);
        }, initialValue);
        this.setState({ total_amount: sumAmount.toFixed(2).toString() });
    };

    handleQuantity = (action, id) => {
        const findValue = this.state.cart.find((element) => element.id === id);
        if (findValue.temp_quantity === "") {
            this.setQuantityItemCart(1, id);
        }
        if (action === "minus") {
            this.setQuantityItemCart(
                (parseInt(findValue.temp_quantity) - 1).toString(),
                id
            );
        } else if (action === "add" && parseInt(findValue.temp_quantity) < 8) {
            this.setQuantityItemCart(
                (parseInt(findValue.temp_quantity) + 1).toString(),
                id
            );
        }
    };

    setQuantityItemCart = async (quantity, id) => {
        const findValue = this.state.cart.find((element) => element.id === id);
        const newValue = [];
        const new_quantity = quantity === "" ? "" : quantity;
        const temp_new_quantity =
            new_quantity === "" ? 1 : parseInt(new_quantity);
        const state_cart = JSON.parse(JSON.stringify(this.state.cart));
        if (temp_new_quantity > 0) {
            const main_quantity = findValue.quantity;

            const get_price = findValue.is_discount
                ? "discount_price"
                : "book_price";

            const book_price = parseFloat(
                parseFloat(findValue[get_price]) / main_quantity
            ).toFixed(2);
            findValue[get_price] = parseFloat(book_price * temp_new_quantity)
                .toFixed(2)
                .toString();
            findValue.final_price = findValue[get_price];
            findValue.quantity = temp_new_quantity;

            findValue.temp_quantity = new_quantity;
            newValue.push(findValue);
            const newCart = state_cart.map(
                (obj) =>
                    newValue.find((element) => element.id === obj.id) || obj
            );
            this.handleSumCartQuantity(newCart);
            this.setState({ cart: [...newCart] });
            this.handleSumAmount(newCart);
            this.handleLocalStorage(newCart);
            return;
        }
        const newCart = state_cart.filter((object) => {
            return object.id !== findValue.id;
        });
        this.handleSumCartQuantity(newCart);
        this.setState({ cart: [...newCart] });
        this.handleSumAmount(newCart);
        this.handleLocalStorage(newCart);
    };

    handleSumCartQuantity = (data) => {
        const initialValue = 0;
        let sumCartQuantity = 0;
        if (data.length > 0) {
            sumCartQuantity = data.reduce((accumulator, current) => {
                return accumulator + current.quantity;
            }, initialValue);
        }
        this.props.setSumCartQuantity(sumCartQuantity);
    };

    handleLocalStorage = (data) => {
        let cart_local_storage = JSON.parse(JSON.stringify(data));
        cart_local_storage = deleteKeyValue(cart_local_storage, [
            "temp_quantity",
        ]);
        localStorage.setItem("cart", JSON.stringify(cart_local_storage));
    };

    render() {
        return (
            <main>
                <section>
                    <p className="font-weight-bold font-20px">
                        Your Cart:{" "}
                        <span className="text-blue">
                            {this.props.app.totalQuantity > 1
                                ? `${this.props.app.totalQuantity} items`
                                : `${this.props.app.totalQuantity} item`}
                        </span>
                    </p>
                    <div className="app-divide mt-4 mb-5" />
                    <Row className="mx-0">
                        <Col
                            lg={9}
                            className={`${
                                this.props.app.width <= 992
                                    ? "px-0 mb-4"
                                    : "pl-0"
                            }`}
                        >
                            <CartList
                                data={this.state.cart}
                                setQuantityItemCart={this.setQuantityItemCart}
                                handleQuantity={this.handleQuantity}
                            />
                        </Col>
                        <Col lg={3} className="px-0">
                            <CartTotals
                                total_amount={this.state.total_amount}
                            />
                        </Col>
                    </Row>
                </section>
            </main>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSumCartQuantity: (data) => dispatch(setSumCartQuantity(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
