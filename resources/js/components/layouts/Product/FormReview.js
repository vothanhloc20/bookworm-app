import * as React from "react";

import { Button, Card, Form } from "react-bootstrap";

import TextField from "../../base/TextField/TextField.js";
import { ratingStar } from "../../../../assets/data/ratingstar.js";

class FormReview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <Card.Header className="bg-blue">
                    <h6 className="text-white font-weight-semi">
                        Write a Review
                    </h6>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <TextField
                            label="Add a title"
                            type="text"
                            mandatory={true}
                            select={false}
                        />
                        <TextField
                            label="Details please! Your review helps other shoppers"
                            type="text"
                            kind="textarea"
                            select={false}
                        />
                        <TextField
                            label="Select a rating star"
                            type="text"
                            select={true}
                            mandatory={true}
                            isClearable={true}
                            options={ratingStar}
                        />
                    </Form>
                    <small className="text-red">
                        <i>* is mandatory</i>
                    </small>
                </Card.Body>
                <Card.Footer>
                    <Button
                        variant="blue"
                        block
                        className="font-weight-semi"
                        type="submit"
                    >
                        Submit Review
                    </Button>
                </Card.Footer>
            </Card>
        );
    }
}

export default FormReview;
