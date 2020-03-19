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
            }

        case FETCH_STATUS_SUCCESS:
            return {
                ...state,
                status: "online",
            }

        case FETCH_STATUS_FAILURE:
            return {
                ...state,
                status: "offline",
            }

        default:
            return state;
    }
};
