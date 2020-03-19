import React from "react";
import { useSelector } from "react-redux";
import Result from "./Result";

function Results() {
    //  Fetch all request results
    const results = useSelector(state => state.results);

    return (
        <section className="results">
            <div className="results-wrapper">
                {
                    results.map((result, key) => {
                        return <Result result={result} id={key} key={key} />;
                    }).reverse()
                }
            </div>
        </section>
    );
}

export default Results;
