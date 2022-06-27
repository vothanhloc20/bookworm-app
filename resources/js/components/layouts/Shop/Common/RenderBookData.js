import * as React from "react";

import GridSkeleton from "../../../base/Skeleton/GridSkeleton";
import ListProduct from "../../../base/ListProduct/ListProduct";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../../utils/useSelector";

class RenderBookData extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const onBooks =
            this.props.shop.books.length === 0 ? (
                <GridSkeleton
                    xl={3}
                    lg={4}
                    md={6}
                    sm={12}
                    quantity={8}
                    customClass="p-2 align-items-stretch"
                />
            ) : (
                <ListProduct
                    data={this.props.shop.books}
                    xl={3}
                    lg={4}
                    md={6}
                    sm={12}
                    customClass="p-2 align-items-stretch"
                />
            );

        return <>{onBooks}</>;
    }
}

export default connect(mapStateToProps, null)(RenderBookData);
