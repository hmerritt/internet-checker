import React from "react";
import { useSelector } from "react-redux";
import { capitalize } from "lodash";
import "./styles/index.scss";

import Header from "./components/Header";
import Status from "./components/Status";
import Stats from "./components/Stats";
import Ping from "./components/Ping";
import Results from "./components/Results";
import Footer from "./components/Footer";

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
                <Stats />
                <Ping />
                <Results />

                <Footer />
            </div>
        </div>
    );
}

export default App;
