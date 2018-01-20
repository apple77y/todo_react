import React from 'react';
import ReactDOM from 'react-dom';
import Redux, { createStore } from 'redux';
import ReactRedux, { Provider } from 'react-redux';

import reducer from './reducer/todo';
import Todo from './container/Todo';

const store = createStore(reducer);

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <Provider store={store}>
        <Todo />
    </Provider>,
    document.getElementById('app')
);
