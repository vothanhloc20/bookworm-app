import * as React from "react";

import { Col, Nav, Navbar, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import Logo40 from "../../../../assets/logo_40_40.png";
import Menu from "../Menu/Menu.js";
import { connect } from "react-redux";
import { modal_OPEN_MODAL } from "../../../redux/types/modal.type.js";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    handleModal = () => {
        this.props.showModal();
    };

    render() {
        return (
            <Navbar bg="light" sticky="top">
                <Navbar.Brand>
                    <Link to="/">
                        <Row className="align-items-center">
                            <Col>
                                <img
                                    src={Logo40}
                                    width="100%"
                                    height="100%"
                                    alt="Bookworm Logo"
                                />
                            </Col>
                            <Col className="px-0">
                                <h4 className="text-blue font-weight-bold">
                                    BOOKWORM
                                </h4>
                            </Col>
                        </Row>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto">
                        <Menu handleModal={this.handleModal} />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showModal: () => dispatch({ type: modal_OPEN_MODAL }),
    };
};

export default connect(null, mapDispatchToProps)(Header);
