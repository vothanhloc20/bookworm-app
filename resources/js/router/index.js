import * as React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home/Home.js';
import Shop from '../pages/Shop/Shop.js';
import Cart from '../pages/Cart/Cart.js';
import Product from '../pages/Product/Product.js';
import About from '../pages/About/About.js';

class Router extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        )
    }
}

export default Router;