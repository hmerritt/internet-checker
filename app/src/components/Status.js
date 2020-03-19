import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkStatus } from "../actions/";

function Status() {

    //  Setup dispatcher
    const dispatch = useDispatch();

    //  Fetch the current status
    const status = useSelector(state => state.status);
    const results = useSelector(state => state.results);

    console.log(results);

    //  Update status
    const updateStatus = () => {
        dispatch( checkStatus() );
    }

    //  Update status on load
    useEffect(() => {
        updateStatus();
    }, []);

    return (
        <section className="status">
            <h2>
                <span onClick={updateStatus}>
                    {status} {results.length}
                </span>
            </h2>
        </section>
    );
}

export default Status;
