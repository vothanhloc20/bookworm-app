import * as React from "react";

class Chip extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="px-2 py-1 d-flex align-items-center bg-light-blue app-border-8px text-blue font-weight-bold">
                {this.props.icon && <span>{this.props.icon}</span>}
                <span
                    className={`flex-grow-1 ${this.props.icon ? "ml-2" : ""}`}
                >
                    {this.props.title}
                </span>
            </div>
        );
    }
}

export default Chip;
