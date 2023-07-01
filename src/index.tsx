import React from 'react';
import { render } from "react-dom";
import App from './component/App';
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import { ErrorBoundary } from "react-error-boundary";

const store = setupStore();

render(
    <Provider store={store}>
        <ErrorBoundary
            fallback={<div>Something went wrong</div>}
        >
            <App />
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);