import * as React from "react";

import { Button, Form, Modal } from "react-bootstrap";

import LoginForm from "../LoginForm/LoginForm.js";
import { connect } from "react-redux";
import { hideModal } from "../../../../redux/actions/modal.action.js";
import { mapStateToProps } from "../../../../utils/useSelector.js";

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
                show={this.props.modal.status}
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

const mapDispatchToProps = (dispatch) => {
    return {
        hideModal: () => dispatch(hideModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateModal);
