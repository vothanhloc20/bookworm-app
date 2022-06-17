import * as React from "react";

import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

import TextField from "../../../base/TextField/TextField.js";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
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
                    type="password"
                    mandatory={true}
                    select={false}
                    icon={faLock}
                />
            </div>
        );
    }
}

export default LoginForm;
