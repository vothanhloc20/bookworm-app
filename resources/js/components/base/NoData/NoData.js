import * as React from "react";

import NoDataImage from "../../../../assets/no_data.png";

class NoData extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center">
                <img
                    src={NoDataImage}
                    alt="No Data"
                    width="60%"
                    height="100%"
                />
                <h4 className="text-blue font-weight-bold text-blue">
                    Oops... No matching data
                </h4>
            </div>
        );
    }
}

export default NoData;
