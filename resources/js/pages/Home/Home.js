import * as React from 'react';
import OnSale from '../../components/layouts/Home/OnSale.js';
import FeaturedBooks from '../../components/layouts/Home/FeaturedBooks.js';

class Home extends React.Component {
    render() {
        return (
            <main>
                <section className="mb-5">
                    <OnSale/>
                </section>
                <section>
                    <FeaturedBooks/>
                </section>
            </main>
        )
    }
}

export default Home;
