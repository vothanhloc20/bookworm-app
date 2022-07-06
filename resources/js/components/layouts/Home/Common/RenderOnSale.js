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
                return 3;
            } else if (this.props.app.width >= 576) {
                return 2;
            } else {
                return 2;
            }
        };

        const onSaleDisplay =
            this.props.home.topTenOnSaleBooks.length === 0 ? (
                <GridSkeleton
                    xl={3}
                    lg={4}
                    md={4}
                    sm={6}
                    xs={6}
                    quantity={quantityOnSaleSkeleton()}
                    customClass="app-card-padding align-items-stretch"
                />
            ) : (
                <OnSale data={this.props.home.topTenOnSaleBooks} />
            );

        return <>{onSaleDisplay}</>;
    }
}

export default connect(mapStateToProps, null)(RenderOnSale);
