import * as React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import {Container} from 'react-bootstrap';
import '../../css/style.css';

class Default extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <Container className="py-4">
                    {this.props.content}
                </Container>
                <Footer/>
            </>
        )
    }
}

export default Default;
