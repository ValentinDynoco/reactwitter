import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './redux'
import { Provider } from "react-redux";
import store from "./redux/store/store";

// https://styled-components.com/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
