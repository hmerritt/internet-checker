import axios from "axios";

//  Define reducer labels
export const FETCH_STATUS_START = "FETCH_STATUS_START";
export const FETCH_STATUS_SUCCESS = "FETCH_STATUS_SUCCESS";
export const FETCH_STATUS_FAILURE = "FETCH_STATUS_FAILURE";

export const checkStatus = () => dispatch => {
    dispatch({ type: FETCH_STATUS_START });

    axios
        .get(`check?${Date.now()}`, {
            headers: { "pragma": "no-cache", "cache-control": "no-cache" }
        })
        .then(res => {
            dispatch({ type: FETCH_STATUS_SUCCESS });
        })
        .catch(err => {
            dispatch({ type: FETCH_STATUS_FAILURE });
        });
};
