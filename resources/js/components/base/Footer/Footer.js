import * as React from 'react';
import {Navbar, Row, Col} from 'react-bootstrap';
import Logo64 from '../../../../assets/logo_64_64.png';

class Footer extends React.Component {
    render() {
        return (
            <Navbar bg="light">
                <Navbar.Brand>
                    <Row className="align-items-center">
                        <Col>
                            <img
                                src={Logo64}
                                width="100%"
                                height="100%"
                                alt="Bookworm Logo"
                            />
                        </Col>
                        <Col className="px-0">
                            <h4 className="text-blue font-weight-bold">BOOKWORM</h4>
                            <p className="text-blue font-weight-semi font-14px">444/24 Cach Mang Thang 8 Str, Ward 11, District 3, Ho Chi Minh City</p>
                            <p className="text-blue font-weight-semi font-14px">0903784019</p>
                        </Col>
                    </Row>
                </Navbar.Brand>
            </Navbar>
        )
    }
}

export default Footer;
