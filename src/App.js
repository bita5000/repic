import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main.jsx";
import Login from "./pages/Login.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default App;
