import * as React from "react";

import FeaturedBooks from "../../components/layouts/Home/FeaturedBooks.js";
import OnSale from "../../components/layouts/Home/OnSale.js";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <section className="mb-5">
                    <OnSale />
                </section>
                <section>
                    <FeaturedBooks />
                </section>
            </main>
        );
    }
}

export default Home;
