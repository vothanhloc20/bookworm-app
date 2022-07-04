import * as React from "react";

import { BsDash, BsPlus } from "react-icons/bs";
import { Button, FormControl, InputGroup } from "react-bootstrap";

class ControlQuantity extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange = (event) => {
        const regexNumber = /^[1-8\b]\g{0,1}$/;
        if (event.target.value === "" || regexNumber.test(event.target.value)) {
            this.props.setQuantity(event.target.value);
        }
    };

    preventNumericInput = ($event) => {
        const keyCode = $event.keyCode ? $event.keyCode : $event.which;
        if (keyCode < 48 || keyCode > 57) {
            $event.preventDefault();
        }
    };

    render() {
        return (
            <div className="app-text-field">
                <InputGroup>
                    <Button
                        variant="blue"
                        className="d-flex align-items-center app-border-radius-right-0"
                        onClick={() => this.props.handleQuantity("minus")}
                    >
                        <BsDash className="font-18px" />
                    </Button>
                    <FormControl
                        className="text-center"
                        type="number"
                        value={this.props.quantity}
                        onChange={(e) => this.onChange(e)}
                        onKeyPress={this.preventNumericInput}
                    />
                    <Button
                        variant="blue"
                        className="d-flex align-items-center app-border-radius-left-0"
                        onClick={() => this.props.handleQuantity("add")}
                    >
                        <BsPlus className="font-18px" />
                    </Button>
                </InputGroup>
            </div>
        );
    }
}

export default ControlQuantity;
