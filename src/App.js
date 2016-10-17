var React = require('react');
var ReactDOM = require('react-dom');

var Title = require('./component/Title');
var AddLi = require('./component/AddLi');
var TodoLi = require('./component/TodoLi');
var EditLi = require('./component/EditLi');

ReactDOM.render(
    <div className="container">
        <Title />
        <AddLi />
        <hr/>
        <ul>
            <TodoLi />
            <EditLi />
        </ul>
    </div>,

    document.getElementById('app')
);
