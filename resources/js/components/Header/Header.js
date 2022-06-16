import * as React from 'react';
import {Navbar, Nav, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Menu from '../Menu/Menu.js';
import Logo40 from '../../../assets/logo_40_40.png';

class Header extends React.Component {
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
                                <h4 className="text-blue font-weight-bold">BOOKWORM</h4>
                            </Col>
                        </Row>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav"/>
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto">
                        <Menu/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;
