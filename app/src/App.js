import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { capitalize } from "lodash";
import "./styles/index.scss";

import Header from "./components/Header";
import Status from "./components/Status";
import Results from "./components/Results";
import Footer from "./components/Footer";
import Particles from "./components/Particles";

function App() {

    //  Fetch the current status
    const status = useSelector(state => state.status);

    //  Update the title to match current status
    document.title = `Internet Checker // ${capitalize(status)}`;

    return (
        <div className="App" status={status}>
            <div className="container">
                <Header />

                <Status />
                <Results />

                <Footer />
            </div>
            <Particles />
        </div>
    );
}

export default App;
