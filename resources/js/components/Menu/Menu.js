import * as React from 'react';
import {NavLink} from 'react-router-dom';
import {menuData} from '../../../assets/data/menu.js';

class Menu extends React.Component {
    render() {
        return (
            <>
                {menuData.map((item, index) => {
                    return (
                        <NavLink
                            key={index}
                            to={item.link}
                            className={`text-black font-weight-bold mr-5 pa-4`}
                            activeClassName="app-active-link"
                        >
                            {item.title}
                            {item.title === 'Cart' && <span>&nbsp;(0)</span>}
                        </NavLink>
                    )
                })}
                <a>Login</a>
            </>
        )
    }
}

export default Menu;
