import React, { useEffect } from "react";
import axios from "axios";
import "./styles/index.scss";

import Header from "./components/Header";

function App() {

    return (
        <div className="App" state="online">
            <div className="container">
                <Header />
            </div>
        </div>
    );
}

export default App;
