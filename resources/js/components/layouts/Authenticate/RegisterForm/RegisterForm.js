import * as React from "react";
import * as yup from "yup";

import { Button, Form } from "react-bootstrap";
import { FaEnvelope, FaLock, FaUserAlt } from "react-icons/fa";

import TextField from "../../../base/TextField/TextField.js";
import authApi from "../../../../api/authApi.js";
import { hashPassword } from "../../../../utils/hashPassword.js";
import { register } from "../../../../adapters/AuthAdapter/AuthAdapter.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
    first_name: yup.string().required("Required"),
    last_name: yup.string().required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    password: yup.string().required("Required"),
});

function RegisterForm(props) {
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
        props.handleAuthenticateForm("login");
    };

    const onSubmit = async (data) => {
        const body = Object.assign({}, data);
        body.password = await hashPassword(data.password);
        body.password_confirmation = body.password;
        const result = await authApi.register(body);
        console.log(result);
        if (result.data.error.email) {
        }
    };

    return (
        <Form id="form-register" onSubmit={handleSubmit(onSubmit)}>
            <div className="p-3">
                <h6 className="mb-3 font-weight-semi">
                    Hi, Welcome to Bookworm 👋
                </h6>
                <TextField
                    label="First name"
                    type="text"
                    mandatory={true}
                    select={false}
                    icon={<FaUserAlt />}
                    {...register("first_name")}
                    name="first_name"
                    message={errors.first_name?.message}
                />
                <TextField
                    label="First name"
                    type="text"
                    mandatory={true}
                    select={false}
                    icon={<FaUserAlt />}
                    {...register("last_name")}
                    name="last_name"
                    message={errors.last_name?.message}
                />
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
                    id="register-show-password"
                    checked={showPassword}
                    label="Show password"
                    onChange={handleShowPassword}
                />
                <p className="font-weight-semi mt-3">
                    Have an account?{" "}
                    <a
                        className="cursor-pointer text-blue"
                        onClick={() => handleAuthenticateForm()}
                    >
                        Login
                    </a>
                </p>
            </div>
            <div className="p-3 app-border-top-card d-flex justify-content-end">
                <Button
                    variant="blue"
                    type="submit"
                    className="font-weight-semi"
                >
                    Register
                </Button>
            </div>
        </Form>
    );
}

export default RegisterForm;
