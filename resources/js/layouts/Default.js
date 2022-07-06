import "../../css/style.css";

import * as React from "react";

import AuthenticateModal from "../components/layouts/Authenticate/AuthenticateModal/AuthenticateModal.js";
import { Container } from "react-bootstrap";
import Drawer from "../components/base/Drawer/Drawer.js";
import Footer from "../components/base/Footer/Footer.js";
import Header from "../components/base/Header/Header.js";
import { connect } from "react-redux";
import { setWidth } from "../redux/actions/app.action.js";

class Default extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.updateBreakpoint;
        window.addEventListener("resize", this.updateBreakpoint);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateBreakpoint);
    }

    updateBreakpoint = () => {
        this.props.setWidth(window.innerWidth);
    };

    render() {
        this.props.setWidth(window.innerWidth);

        return (
            <>
                <Header />
                <Container className="py-4 flex-grow-1">
                    {this.props.content}
                </Container>
                <Footer />
                <AuthenticateModal />
                <Drawer />
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setWidth: (data) => dispatch(setWidth(data)),
    };
};

export default connect(null, mapDispatchToProps)(Default);
