import "../../css/style.css";

import * as React from "react";

import AuthenticateModal from "../components/layouts/Authenticate/AuthenticateModal/AuthenticateModal.js";
import { Container } from "react-bootstrap";
import Footer from "../components/base/Footer/Footer.js";
import Header from "../components/base/Header/Header.js";

class Default extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
    }

    handleModal = () => {
        this.setState((prevState) => ({
            showModal: !prevState.showModal,
        }));
    };

    render() {
        return (
            <>
                <Header handleModal={this.handleModal} />
                <Container className="py-4 flex-grow-1">
                    {this.props.content}
                </Container>
                <Footer />
                <AuthenticateModal
                    show={this.state.showModal}
                    hideModal={this.handleModal}
                />
            </>
        );
    }
}

export default Default;
