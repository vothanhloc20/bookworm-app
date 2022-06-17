import * as React from "react";

import { Button, Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "../../base/Slider/Slider.js";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

class OnSale extends React.Component {
    render() {
        return (
            <>
                <Row className="align-items-center mb-4">
                    <Col>
                        <h4 className="font-weight-semi">On Sale</h4>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button variant="blue" className="font-weight-semi">
                            View All &nbsp;
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Button>
                    </Col>
                </Row>
                <Slider
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation={false}
                    loop={true}
                    autoPlay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                />
            </>
        );
    }
}

export default OnSale;
