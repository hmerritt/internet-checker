import React from "react";
import { percentFailed, resultsFilter } from "../utils/statsCalc";

//  Mock results data
const results = [
    {
        status: "online",
        ping: 200
    },
    {
        status: "online",
        ping: 400
    },
    {
        status: "offline",
        ping: 800
    },
    {
        status: "checking",
        ping: 0
    }
];

test("[Unit] percentFailed | calculates the percentage of failed requests", () => {
    //  Calc percentage of failed results
    const calc_percentFailed = percentFailed(results, "status", "offline");

    expect(Math.round(calc_percentFailed)).toBe(25);
});

test("[Unit] resultsFilter | filters the results array", () => {
    //  Filter results
    //    1> success (online)
    //    2> failure (offline)
    //    3> resolved (not checking)
    const filter_success = resultsFilter(results, "success");
    const filter_failure = resultsFilter(results, "failure");
    const filter_resolved = resultsFilter(results, "resolved");

    expect(results.length).toBe(4);
    expect(filter_success.length).toBe(2);
    expect(filter_failure.length).toBe(1);
    expect(filter_resolved.length).toBe(3);
});
