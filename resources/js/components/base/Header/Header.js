import * as React from "react";

import { Button, Col, Nav, Navbar, Row } from "react-bootstrap";

import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo40 from "../../../../assets/logo_40_40.png";
import Menu from "../Menu/Menu.js";
import { connect } from "react-redux";
import { modal_OPEN_MODAL } from "../../../redux/types/modal.type.js";
import { openDrawer } from "../../../redux/actions/drawer.action.js";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    handleModal = () => {
        this.props.showModal();
    };

    handleDrawer = () => {
        this.props.openDrawer();
    };

    render() {
        return (
            <Navbar bg="light" sticky="top">
                <Navbar.Brand>
                    <Link to="/">
                        <Row className="align-items-center">
                            <Col className="px-0">
                                <img
                                    src={Logo40}
                                    width="100%"
                                    height="100%"
                                    alt="Bookworm Logo"
                                    className="ml-1"
                                />
                            </Col>
                            <Col className="px-0 ml-3">
                                <p className="text-blue font-weight-bold font-20px">
                                    BOOKWORM
                                </p>
                            </Col>
                        </Row>
                    </Link>
                </Navbar.Brand>
                <Button
                    id="app-hamburger-button"
                    variant="blue"
                    className="py-2 ml-auto"
                    onClick={this.handleDrawer}
                >
                    <FaBars className="text-white mb-1" />
                </Button>
                <Nav id="app-menu-header" className="ml-auto">
                    <Menu handleModal={this.handleModal} />
                </Nav>
            </Navbar>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showModal: () => dispatch({ type: modal_OPEN_MODAL }),
        openDrawer: () => dispatch(openDrawer()),
    };
};

export default connect(null, mapDispatchToProps)(Header);
