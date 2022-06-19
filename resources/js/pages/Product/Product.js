import * as React from "react";

import { Col, Row } from "react-bootstrap";

import AddToCart from "../../components/layouts/Product/AddToCart.js";
import CustomerReviews from "../../components/layouts/Product/CustomerReviews.js";
import FormReview from "../../components/layouts/Product/FormReview.js";
import ProductInformation from "../../components/layouts/Product/ProductInformation.js";
import bookApi from "../../api/bookApi";

class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getAllCategories();
    }

    getAllCategories = async () => {
        try {
            const response = await bookApi.getAllCategories();
            console.log(response);
        } catch (error) {
            console.log("Server error!");
        }
    };

    render() {
        return (
            <main>
                <section>
                    <h4 className="font-weight-semi">Category Name</h4>
                    <div className="app-divide mt-4 mb-5"></div>
                    <Row className="mb-4">
                        <Col md={8}>
                            <ProductInformation />
                        </Col>
                        <Col md={4}>
                            <AddToCart />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>
                            <CustomerReviews />
                        </Col>
                        <Col md={4}>
                            <FormReview />
                        </Col>
                    </Row>
                </section>
            </main>
        );
    }
}

export default Product;
