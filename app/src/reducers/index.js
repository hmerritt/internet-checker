import {
    FETCH_STATUS_START,
    FETCH_STATUS_SUCCESS,
    FETCH_STATUS_FAILURE
} from "../actions/";

export const initialState = {
    status: "checking",
    results: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_STATUS_START:
            return {
                ...state,
                status: "checking",
                results: [
                    ...state.results,
                    {
                        id: action.payload.request_start,
                        status: "checking",
                        request_start: action.payload.request_start,
                        request_end: 0,
                        ping: 0
                    }
                ]
            }

        case FETCH_STATUS_SUCCESS:
            return {
                ...state,
                status: "online",
                results: [
                    ...state.results.filter(res => res.request_start !== action.payload.request_start),
                    {
                        id: action.payload.request_start,
                        status: "online",
                        request_start: action.payload.request_start,
                        request_end: action.payload.request_end,
                        ping: (action.payload.request_end - action.payload.request_start)
                    }
                ]
            }

        case FETCH_STATUS_FAILURE:
            return {
                ...state,
                status: "offline",
                results: [
                    ...state.results.filter(res => res.request_start !== action.payload.request_start),
                    {
                        id: action.payload.request_start,
                        status: "offline",
                        request_start: action.payload.request_start,
                        request_end: action.payload.request_end,
                        ping: null
                    }
                ]
            }

        default:
            return state;
    }
};
