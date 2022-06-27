import * as React from "react";

import { NavLink } from "react-router-dom";
import { closeDrawer } from "../../../redux/actions/drawer.action.js";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../utils/useSelector.js";
import { menuData } from "../../../../assets/data/menu.js";

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    handleModal = () => {
        this.props.handleModal();

        if (this.props.app.width <= 992) {
            this.props.closeDrawer();
        }
    };

    render() {
        return (
            <>
                {menuData.map((item, index) => {
                    return (
                        <NavLink
                            key={index}
                            to={item.link}
                            className={({ isActive }) =>
                                `text-black font-weight-bold px-4 py-2 ${
                                    this.props.app.width >= 992
                                        ? "mr-3"
                                        : "mb-3"
                                }` +
                                (isActive
                                    ? " app-active-link"
                                    : " app-not-active-link")
                            }
                        >
                            {item.title}
                            {item.title === "Cart" && <span>&nbsp;(0)</span>}
                        </NavLink>
                    );
                })}
                <a
                    className={`text-black font-weight-bold px-4 py-2 cursor-pointer ${
                        this.props.width >= 992 ? "mr-3" : ""
                    }`}
                    onClick={this.handleModal}
                >
                    Login
                </a>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeDrawer: () => dispatch(closeDrawer()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
