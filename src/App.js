var React = require('react');
var ReactDOM = require('react-dom');

var Container = require('./container/index');

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <Container />,

    document.getElementById('app')
);
