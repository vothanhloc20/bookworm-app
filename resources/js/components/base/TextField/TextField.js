import * as React from "react";

import { Form, InputGroup } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";

class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: props.label,
            type: props.type,
            select: props.select,
            kind: props.kind,
            isClearable: props.isClearable,
            options: props.options,
            mandatory: props.mandatory,
            icon: props.icon,
        };
    }

    render() {
        return (
            <Form.Group id="app-text-field" className="mb-4">
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
                    <InputGroup>
                        {this.state.icon ? (
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={this.state.icon} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                        ) : (
                            ""
                        )}
                        <Form.Control
                            as={this.state.kind}
                            type={this.state.type}
                        />
                    </InputGroup>
                )}
            </Form.Group>
        );
    }
}

export default TextField;
