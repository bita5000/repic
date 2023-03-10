import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const rootNode = document.getElementById("root");

ReactDOM.createRoot(rootNode).render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <App />
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
