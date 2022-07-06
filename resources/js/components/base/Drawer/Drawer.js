import * as React from "react";

import Menu from "../Menu/Menu.js";
import { closeDrawer } from "../../../redux/actions/drawer.action.js";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../utils/useSelector.js";
import { showModal } from "../../../redux/actions/modal.action.js";

class Drawer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleModal = () => {
        this.props.showModal();
    };

    handleDrawer = () => {
        this.props.closeDrawer();
    };

    render() {
        return (
            <>
                {this.props.drawer.status && (
                    <div
                        onClick={this.handleDrawer}
                        className="app-overlay cursor-pointer"
                    >
                        <div className="app-overlay-scope" />
                    </div>
                )}
                <nav
                    className={`app-nav-menu ${
                        this.props.drawer.status ? "amb-active" : "amb-inactive"
                    }`}
                >
                    <div className="d-flex flex-column p-4">
                        <Menu handleModal={this.handleModal} />
                    </div>
                </nav>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showModal: () => dispatch(showModal()),
        closeDrawer: () => dispatch(closeDrawer()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
