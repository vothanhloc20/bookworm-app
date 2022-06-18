import * as React from "react";

import { Button, Form, Modal } from "react-bootstrap";

import LoginForm from "../LoginForm/LoginForm.js";

class AuthenticateModal extends React.Component {
    constructor(props) {
        super(props);
    }

    hideModal = () => {
        this.props.hideModal();
    };

    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={this.hideModal}
                size="md"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className="font-weight-semi">
                        Login
                    </Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        <LoginForm />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="blue" className="font-weight-semi">
                            Login
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }
}

export default AuthenticateModal;
