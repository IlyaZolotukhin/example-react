import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import store from "./store";
import App from "./App";
import {Provider} from "react-redux";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(

    <Provider store={store}>
        <App />
    </Provider>,
);
