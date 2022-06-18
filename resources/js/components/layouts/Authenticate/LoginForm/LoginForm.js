import * as React from "react";

import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

import { Form } from "react-bootstrap";
import TextField from "../../../base/TextField/TextField.js";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleShowPassword = this.handleShowPassword.bind(this);
        this.state = {
            showPassword: false,
        };
    }

    handleShowPassword() {
        this.setState((prevState) => ({
            showPassword: !prevState.showPassword,
        }));
    }

    render() {
        return (
            <div>
                <h6 className="mb-3 font-weight-semi">Hi, Welcome back 👋</h6>
                <TextField
                    label="Email"
                    type="text"
                    mandatory={true}
                    select={false}
                    icon={faEnvelope}
                />
                <TextField
                    label="Password"
                    type={this.state.showPassword ? "text" : "password"}
                    mandatory={true}
                    select={false}
                    icon={faLock}
                />
                <Form.Check
                    custom
                    type="checkbox"
                    id="show-password"
                    checked={this.state.showPassword}
                    label="Show password"
                    onClick={this.handleShowPassword}
                />
            </div>
        );
    }
}

export default LoginForm;
