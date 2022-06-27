import * as React from "react";

import GridSkeleton from "../../../base/Skeleton/GridSkeleton";
import OnSale from "../OnSale";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../../utils/useSelector";

class RenderOnSale extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const quantityOnSaleSkeleton = () => {
            if (this.props.app.width >= 1200) {
                return 4;
            } else if (this.props.app.width >= 992) {
                return 3;
            } else if (this.props.app.width >= 768) {
                return 2;
            } else {
                return 1;
            }
        };

        const onSaleDisplay =
            this.props.home.topTenOnSaleBooks.length === 0 ? (
                <GridSkeleton
                    xl={3}
                    lg={4}
                    md={6}
                    sm={12}
                    quantity={quantityOnSaleSkeleton()}
                />
            ) : (
                <OnSale data={this.props.home.topTenOnSaleBooks} />
            );

        return <>{onSaleDisplay}</>;
    }
}

export default connect(mapStateToProps, null)(RenderOnSale);
