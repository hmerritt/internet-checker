import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

function Results() {
    //  Fetch all request results
    const results = useSelector(state => state.results);

    return (
        <section className="results">
            <table>
                <thead>
                    <tr>
                        <th>-</th>
                        <th>#</th>
                        <th>Status</th>
                        <th>Ping</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result, key) => {
                        return (
                            <tr>
                                <td>-</td>
                                <td>{key + 1}</td>
                                <td>{result.status}</td>
                                <td>{result.ping}</td>
                                <td>
                                    {moment(result.request_start).calendar()}
                                </td>
                            </tr>
                        );
                    }).reverse()}
                </tbody>
            </table>
        </section>
    );
}

export default Results;
