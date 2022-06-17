import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
