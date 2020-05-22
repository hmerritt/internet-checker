import React from "react";
import moment from "moment";

function Result({ result, id }) {
    moment.updateLocale('en', {
        relativeTime : {
            s  : '%d seconds',
            ss : '%d seconds',
        }
    });

    return (
        <div className="result" status={result.status}>
            <div>
                <span className="icon"></span>
            </div>
            <div>{id}</div>
            <div>{result.status}</div>
            <div>{result.ping}ms</div>
            <div>{moment(result.request_start).fromNow()}</div>
        </div>
    );
}

export default Result;
