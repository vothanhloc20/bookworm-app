import * as React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../../css/style.css';

class Default extends React.Component {
    render() {
        return (
            <>
                <Header/>
                {this.props.content}
                <Footer/>
            </>
        )
    }
}

export default Default;
