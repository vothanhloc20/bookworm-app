import * as React from 'react';
import {Dropdown as BootstrapDropdown} from 'react-bootstrap';

class Dropdown extends React.Component {
    render() {
        return (
            <BootstrapDropdown className={this.props.customClass}>
                <BootstrapDropdown.Toggle variant={this.props.variant} size="sm">
                    {this.props.currentSelect}
                </BootstrapDropdown.Toggle>
                <BootstrapDropdown.Menu>
                    {this.props.selectData.map((item, index) => {
                        return (
                            <BootstrapDropdown.Item key={index}>
                                {item.title}
                            </BootstrapDropdown.Item>
                        )
                    })}
                </BootstrapDropdown.Menu>
            </BootstrapDropdown>
        )
    }
}

export default Dropdown;
