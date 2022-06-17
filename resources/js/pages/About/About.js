import * as React from "react";

import AboutUs from "../../components/layouts/About/AboutUs.js";
import { Container } from "react-bootstrap";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="py-4 flex-grow-1">
                <main>
                    <section>
                        <h4 className="font-weight-semi">About Us</h4>
                        <div className="app-divide my-4"></div>
                        <AboutUs />
                    </section>
                </main>
            </Container>
        );
    }
}

export default About;
