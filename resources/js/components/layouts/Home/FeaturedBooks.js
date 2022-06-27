import * as React from "react";

import ListProduct from "../../base/ListProduct/ListProduct.js";

class FeaturedBooks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListProduct
                data={this.props.data}
                xl={3}
                lg={4}
                md={6}
                sm={12}
                customClass="pb-1 mb-4 align-items-stretch"
            />
        );
    }
}

export default FeaturedBooks;
