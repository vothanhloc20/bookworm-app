import * as React from "react";

import FeaturedBooks from "../FeaturedBooks.js";
import GridSkeleton from "../../../base/Skeleton/GridSkeleton";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../../utils/useSelector";

class RenderOnFeatured extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const onFeaturedBooks =
            this.props.home.tagFeaturedBooks.length === 0 ? (
                <GridSkeleton
                    xl={3}
                    lg={4}
                    md={6}
                    sm={12}
                    quantity={8}
                    customClass="p-2 align-items-stretch"
                />
            ) : (
                <FeaturedBooks data={this.props.home.tagFeaturedBooks} />
            );

        return <>{onFeaturedBooks}</>;
    }
}

export default connect(mapStateToProps, null)(RenderOnFeatured);
