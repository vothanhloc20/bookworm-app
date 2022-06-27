import * as React from "react";

import Chip from "../../../base/Chip/Chip.js";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../../utils/useSelector.js";

class RenderCurrentValueFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let chipCategory;
        let chipAuthor;
        let chipRatingStar;

        if (this.props.shop.current_filter.length > 0) {
            this.props.shop.current_filter.forEach((element) => {
                if (element.title === "Category")
                    chipCategory = <Chip title={element.item} />;
                if (element.title === "Author")
                    chipAuthor = <Chip title={element.item} />;
                if (element.title === "Rating Review")
                    chipRatingStar = <Chip title={element.item} />;
            });
        }

        return (
            <>
                {this.props.shop.current_filter.length > 0 && (
                    <div className="ml-3 d-flex align-items-center">
                        <div>(&nbsp;</div>
                        <span>Filter by</span>
                        {chipCategory && (
                            <span className="ml-2">{chipCategory}</span>
                        )}
                        {chipAuthor && (
                            <span className="ml-2">{chipAuthor}</span>
                        )}
                        {chipRatingStar && (
                            <span className="ml-2">{chipRatingStar}</span>
                        )}
                        <div>&nbsp;)</div>
                    </div>
                )}
            </>
        );
    }
}

export default connect(mapStateToProps, null)(RenderCurrentValueFilter);
