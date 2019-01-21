import React from 'react';
import ReactDOM from 'react-dom';

import Container from './container/index';
import Provider from "./context/Provider";

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <Provider>
        <Container/>
    </Provider>,
    document.getElementById("app")
);
