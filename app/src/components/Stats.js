import React from "react";
import { useSelector } from "react-redux";
import { meanBy } from "lodash";
import { percentFailed } from "../utils/statsCalc";

function Stats() {

    //  Fetch state from redux
    const status = useSelector(state => state.status);
    const results = useSelector(state => state.results);

    //  Filter results that are still checking
    const resultsDone = results.filter(result => result.status !== "checking");
    const resultsSuccess = results.filter(result => result.status === "online");

    return (
        <section className="stats">
            <div className="stats-wrapper">
                <div className="stat">
                    <h4 className="title"> Status </h4>
                    <p className={`value ${status}`}> {status} </p>
                </div>
                <div className="stat">
                    <h4 className="title"> Checked </h4>
                    <p className="value"> {results.length} </p>
                </div>
                <div className="stat">
                    <h4 className="title"> Success Rate </h4>
                    <p className="value online"> {( 100 - percentFailed(resultsDone, "status", "offline")).toFixed(2)} % </p>
                </div>
                <div className="stat">
                    <h4 className="title"> Failure Rate </h4>
                    <p className="value offline"> {percentFailed(resultsDone, "status", "offline").toFixed(2)} % </p>
                </div>
                <div className="stat">
                    <h4 className="title"> Avg. Ping </h4>
                    <p className="value"> {meanBy(resultsSuccess, "ping").toFixed(0)} ms </p>
                </div>
            </div>
        </section>
    );
}

export default Stats;
