import * as React from "react";

import Book1 from "../../../../assets/bookcover/book1.jpg";
import ControlQuantity from "../../../components/base/ControlQuantity/ControlQuantity.js";
import { Table } from "react-bootstrap";

class CartList extends React.Component {
    render() {
        return (
            <Table borderless={true} id="app-cart-list">
                <thead>
                    <tr>
                        <th colspan="2">
                            <h6 className="text-white font-weight-semi">
                                Product
                            </h6>
                        </th>
                        <th>
                            <h6 className="text-white font-weight-semi">
                                Price
                            </h6>
                        </th>
                        <th>
                            <h6 className="text-white font-weight-semi">
                                Quantity
                            </h6>
                        </th>
                        <th>
                            <h6 className="text-white font-weight-semi">
                                Total
                            </h6>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td colspan="2">
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={Book1}
                                            alt="Book Cover"
                                            width="120"
                                            height="120"
                                            className="app-border-8px"
                                        />
                                        <div className="ml-4">
                                            <h5 className="font-weight-semi mb-1">
                                                Book Title
                                            </h5>
                                            <p className="font-14px font-weight-medium">
                                                Book Author
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="text-red font-weight-bold font-20px">
                                            ${item.discount_price}
                                        </div>
                                        {item.discount_price > 0 && (
                                            <strike>
                                                <div className="text-grey font-weight-medium">
                                                    {item.final_price}
                                                </div>
                                            </strike>
                                        )}
                                    </div>
                                </td>
                                <td>
                                    <ControlQuantity />
                                </td>
                                <td>
                                    <div className="text-red font-weight-bold font-20px">
                                        $100.000
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        );
    }
}

export default CartList;
