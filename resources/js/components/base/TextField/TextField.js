import * as React from "react";

import { Form } from "react-bootstrap";
import Select from "react-select";

class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: props.label,
            name: props.name,
            type: props.type,
            select: props.select,
            kind: props.kind,
            isClearable: props.isClearable,
            options: props.options,
            mandatory: props.mandatory,
        };
    }

    render() {
        return (
            <Form.Group
                id="app-text-field"
                controlId={this.state.name}
                className="mb-4"
            >
                <Form.Label className="font-weight-semi">
                    {this.state.label}
                    {this.state.mandatory ? (
                        <span className="text-red">*</span>
                    ) : (
                        ""
                    )}
                </Form.Label>
                {this.state.select ? (
                    <Select
                        isClearable={this.state.isClearable}
                        options={this.state.options}
                    />
                ) : (
                    <Form.Control as={this.state.kind} type={this.state.type} />
                )}
            </Form.Group>
        );
    }
}

export default TextField;
