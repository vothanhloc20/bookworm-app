import * as React from "react";

import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ControlQuantity extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                id="app-control-quantity"
                className="d-flex align-items-center"
            >
                <Button variant="grey" size="sm">
                    <FontAwesomeIcon icon={faMinus} />
                </Button>
                <p className="font-14px">1</p>
                <Button variant="blue" size="sm">
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </div>
        );
    }
}

export default ControlQuantity;
