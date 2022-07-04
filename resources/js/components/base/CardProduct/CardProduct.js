import * as React from "react";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class CardProduct extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Link to={`/shop/${this.props.productId}`}>
                <Card id="app-card-product" className="h-100">
                    <div className="card-image">
                        <div className="card-image-layout">
                            <Card.Img
                                variant="top"
                                src={this.props.productImage}
                            />
                        </div>
                    </div>
                    <Card.Body className="d-flex flex-column text-black">
                        <Card.Title className="font-weight-bold card-title mb-auto">
                            {this.props.productName}
                        </Card.Title>
                        <br />
                        <Card.Text>{this.props.productAuthor}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        {!this.props.productIsDiscount ? (
                            <span className="text-red font-weight-bold font-20px">
                                ${this.props.productBookPrice}
                            </span>
                        ) : (
                            <>
                                <strike>
                                    <span className="text-grey font-weight-medium">
                                        {this.props.productBookPrice}
                                    </span>
                                </strike>
                                &nbsp;
                                <span className="text-red font-weight-bold font-20px">
                                    ${this.props.productDiscountPrice}
                                </span>
                            </>
                        )}
                    </Card.Footer>
                </Card>
            </Link>
        );
    }
}

export default CardProduct;
