import "../../css/style.css";

import * as React from "react";

import { Container } from "react-bootstrap";
import Footer from "../components/base/Footer/Footer.js";
import Header from "../components/base/Header/Header.js";

class Default extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header />
                <Container className="py-4 flex-grow-1">
                    {this.props.content}
                </Container>
                <Footer />
            </>
        );
    }
}

export default Default;
