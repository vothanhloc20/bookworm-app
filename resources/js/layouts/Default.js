import * as React from 'react';
import Header from '../components/base/Header/Header.js';
import Footer from '../components/base/Footer/Footer.js';
import {Container} from 'react-bootstrap';
import '../../css/style.css';

class Default extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const currentPath = window.location.pathname;
        console.log(currentPath);

        return (
            <>
                <Header/>
                <Container className="py-4 flex-grow-1">
                    {this.props.content}
                </Container>
                <Footer/>
            </>
        )
    }
}

export default Default;
