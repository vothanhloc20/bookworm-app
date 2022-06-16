import * as React from 'react';
import AboutUs from '../../components/layouts/About/AboutUs.js';

class About extends React.Component {
    render() {
        return (
            <main>
                <section>
                    <h4 className="font-weight-semi">About Us</h4>
                    <div className="app-divide my-4"></div>
                    <AboutUs/>
                </section>
            </main>
        )
    }
}

export default About;
