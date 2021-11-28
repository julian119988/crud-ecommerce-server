import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    html,body{
        margin: 0;
        padding: 0;
    }
    *{
        font-size: 10px;
        box-sizing: border-box;
        font-family: 'Oswald', sans-serif;
    }
`;

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
