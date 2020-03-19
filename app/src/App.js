import React, { useEffect } from "react";
import Particles from './components/Particles';
import axios from "axios";
import "./styles/index.scss";

import Header from "./components/Header";
import Status from "./components/Status";
import Footer from "./components/Footer";

function App() {

    let status = "online";

    return (
        <div className="App" status={status}>
            <div className="container">
                <Header />
                <Status status={status} />
                <Footer />
            </div>
            <Particles />
        </div>
    );
}

export default App;
