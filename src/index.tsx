import reportWebVitals from './reportWebVitals';
import React from 'react';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

import ReactDOM from 'react-dom';
import './index.css'
import {store} from './redux/redux-store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);


reportWebVitals();
