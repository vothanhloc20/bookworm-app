import * as React from "react";
import * as yup from "yup";

import { Button, Form } from "react-bootstrap";
import { FaEnvelope, FaLock } from "react-icons/fa";

import TextField from "../../../base/TextField/TextField.js";
import { hashPassword } from "../../../../utils/hashPassword.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
    .object({
        email: yup.string().email("Invalid email").required("Required"),
        password: yup.string().required("Required"),
    })
    .required();

function LoginForm(props) {
    const [showPassword, setShowPassword] = React.useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleShowPassword = () => {
        setShowPassword((prevCheck) => !prevCheck);
    };

    const handleAuthenticateForm = () => {
        props.handleAuthenticateForm("register");
    };

    const onSubmit = async (data) => {
        console.log(data);
        const hash_password = hashPassword(data.password);
        console.log(password);
    };

    return (
        <Form id="form-login" onSubmit={handleSubmit(onSubmit)}>
            <div className="p-3">
                <h6 className="mb-3 font-weight-semi">Hi, Welcome back 👋</h6>
                <TextField
                    label="Email"
                    type="text"
                    mandatory={true}
                    select={false}
                    icon={<FaEnvelope />}
                    {...register("email")}
                    name="email"
                    message={errors.email?.message}
                />
                <TextField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    mandatory={true}
                    select={false}
                    icon={<FaLock />}
                    {...register("password")}
                    name="password"
                    message={errors.password?.message}
                />
                <Form.Check
                    custom
                    type="checkbox"
                    id="login-show-password"
                    checked={showPassword}
                    label="Show password"
                    onChange={handleShowPassword}
                />
                <p className="font-weight-semi mt-3">
                    Don't have account?{" "}
                    <a
                        className="cursor-pointer text-blue"
                        onClick={() => handleAuthenticateForm()}
                    >
                        Register
                    </a>
                </p>
            </div>
            <div className="p-3 app-border-top-card d-flex justify-content-end">
                <Button
                    variant="blue"
                    type="submit"
                    className="font-weight-semi"
                >
                    Login
                </Button>
            </div>
        </Form>
    );
}

export default LoginForm;
