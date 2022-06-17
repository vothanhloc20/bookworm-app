import * as React from "react";

import { Col, Row } from "react-bootstrap";

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h2 className="text-center font-weight-semi mb-4">
                    Welcome to BookWorm
                </h2>
                <p className="font-weight-medium mb-4">
                    "Bookworm is an independent New York bookstore and language
                    school with locations in Manhattan and Brooklyn. We
                    specialize in travel books and language classes."
                </p>
                <Row>
                    <Col className="text-justify">
                        <h3 className="font-weight-semi">Our Story</h3>
                        <br />
                        <p>
                            The name Bookworm was taken from the original name
                            for New York International Airport, which was
                            renamed JFK in December 1963.
                        </p>
                        <br />
                        <p>
                            Our Manhattan store has just moved to the West
                            Village. Our new location is 170 7th Avenue South,
                            at the corner of Perry Street.
                        </p>
                        <br />
                        <p>
                            From March 2008 through May 2016, the store was
                            located in the Flatiron District.
                        </p>
                    </Col>
                    <Col className="text-justify">
                        <h3 className="font-weight-semi">Our Vision</h3>
                        <br />
                        <p>
                            One of the last travel bookstores in the country,
                            our Manhattan store carries a range of guidebooks
                            (all 10% off) to suit the needs and tastes of every
                            traveller and budget.
                        </p>
                        <br />
                        <p>
                            We believe that a novel or travelogue can be just as
                            valuable a key to a place as any guidebook, and our
                            well-read, well-travelled staff is happy to make
                            reading recommendations for any traveller, book
                            lover, or gift giver.
                        </p>
                    </Col>
                </Row>
            </>
        );
    }
}

export default AboutUs;
