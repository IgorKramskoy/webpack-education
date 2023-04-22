import React from 'react';
import { render } from "react-dom";
import App from './component/App';
import {Provider} from "react-redux";
import {setupStore} from "./store/store";

const store = setupStore();


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);