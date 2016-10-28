var React = require('react');
var ReactDOM = require('react-dom');
var Redux = require('redux');
var ReactRedux = require('react-redux');
var createStore = Redux.createStore;
var Provider = ReactRedux.Provider;

var reducer = require('./reducer/todo');
var Todo = require('./container/Todo');
var store = createStore(reducer);

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <Provider store={store}>
        <Todo />
    </Provider>,
    document.getElementById('app')
);
