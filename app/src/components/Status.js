import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkStatus } from "../actions/";
import { useInterval } from "../hooks/useInterval";

function Status() {

    //  Setup dispatcher
    const dispatch = useDispatch();

    //  Fetch the current status
    const status = useSelector(state => state.status);
    const results = useSelector(state => state.results);

    //  Update status
    const updateStatus = () => {
        //  Check if already getting status
        if (status !== "checking" || results.length === 0) {
            dispatch( checkStatus() );
        }
    }

    //  Update status on load
    useEffect(() => {
        updateStatus();
    }, []);

    //  Update status every 15 seconds
    useInterval(() => {
        updateStatus();
    }, 15000);

    return (
        <section className="status">
            <h2>
                <span onClick={updateStatus}>
                    {status}
                </span>
            </h2>
        </section>
    );
}

export default Status;
