import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import store from "./store";
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(

    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
);
