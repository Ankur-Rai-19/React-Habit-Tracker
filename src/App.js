import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Daily/Home";
import Nav from "./Components/Daily/Nav";
import Weekly from "./Components/Week/Weekly";

function App() {
    return (
        <div className="App">
            <div className="Container">
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/weekly" element={<Weekly />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
