import * as React from "react";

import { Accordion, Card } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FilterBy extends React.Component {
    render() {
        return (
            <>
                {this.props.data.map((item, index) => {
                    return (
                        <Accordion
                            key={index}
                            defaultActiveKey={item.id}
                            className={`${
                                index < this.props.data.length - 1 ? "mb-4" : ""
                            }`}
                        >
                            <Card>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey={item.id}
                                >
                                    <p className="text-blue d-flex align-items-center">
                                        <FontAwesomeIcon icon={item.icon} />
                                        <span className="flex-grow-1 font-weight-semi ml-2">
                                            {item.title}
                                        </span>
                                    </p>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={item.id}>
                                    <Card.Body>
                                        <ul className="h-100 d-flex flex-column justify-content-center">
                                            {item.data.map((itemList, idx) => {
                                                return (
                                                    <li
                                                        key={idx}
                                                        className={`font-weight-semi px-2 py-1
                                                            ${
                                                                itemList ===
                                                                "Fiction"
                                                                    ? "bg-blue-active"
                                                                    : "bg-blue-no-active"
                                                            }
                                                            ${
                                                                idx <
                                                                item.data
                                                                    .length -
                                                                    1
                                                                    ? "mb-2"
                                                                    : ""
                                                            }`}
                                                    >
                                                        {itemList}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    );
                })}
            </>
        );
    }
}

export default FilterBy;
