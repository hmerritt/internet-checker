import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkStatus } from "./actions/";
import { capitalize } from "lodash";
import "./styles/index.scss";

import Header from "./components/Header";
import Status from "./components/Status";
import Footer from "./components/Footer";
import Particles from "./components/Particles";

function App() {
    
    //  Setup dispatcher
    const dispatch = useDispatch();

    //  Fetch the current status
    const status = useSelector(state => state.status);

    //  Update the title to match current status
    document.title = `Internet Checker // ${capitalize(status)}`;

    useEffect(() => {
        dispatch(checkStatus());
    }, []);

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
