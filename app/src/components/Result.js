import React from "react";
import moment from "moment";

function Result({ result, id }) {
    return (
        <div className="result" status={result.status}>
            <div>
                <span className="icon"></span>
            </div>
            <div>{(id + 1)}</div>
            <div>{result.status}</div>
            <div>{result.ping}ms</div>
            <div>{moment(result.request_start).calendar()}</div>
        </div>
    );
}

export default Result;
