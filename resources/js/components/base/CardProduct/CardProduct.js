import * as React from "react";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class CardProduct extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card id="app-card-product" className="h-100">
                <div className="card-image">
                    <Link to="/shop/1" className="card-image-layout">
                        <Card.Img variant="top" src={this.props.productImage} />
                    </Link>
                </div>
                <Card.Body>
                    <Card.Title className="font-weight-bold">
                        {this.props.productName}
                    </Card.Title>
                    <Card.Text>{this.props.productAuthor}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    {this.props.productDiscountPrice > 0 && (
                        <strike>
                            <span className="text-grey font-weight-medium">
                                {this.props.productFinalPrice}
                            </span>
                        </strike>
                    )}
                    &nbsp;
                    <span className="text-red font-weight-bold font-20px">
                        ${this.props.productDiscountPrice}
                    </span>
                </Card.Footer>
            </Card>
        );
    }
}

export default CardProduct;
