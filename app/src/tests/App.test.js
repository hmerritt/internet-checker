import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducer } from "../reducers";

//  Create redux store
const store = createStore(reducer, applyMiddleware(thunk));


test("renders app", () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
});

test("renders checking on load", () => {
    const { getAllByText } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    getAllByText(/checking/i);
});
