import React from "react";
import { Route, Routes } from "react-router-dom";

import "./scss/App.scss";

import Main from "./pages/Main.jsx";
import Login from "./pages/Login.jsx";
import Join from "./pages/Join.jsx";
import Progress from "./pages/Progress.jsx";
import Complete from "./pages/Complete.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/complete" element={<Complete />} />
        </Routes>
    );
};

export default App;
