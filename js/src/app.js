var React = require('react');
var ReactDOM = require('react-dom');

var Title = require('./component/Title');
var AddLi = require('./component/AddLi');
var TodoLi = require('./component/TodoLi');
var EditLi = require('./component/EditLi');

var todos = [
    '이것도 해야 되고',
    '저것도 해야 되고',
    '그것도 해야 되고',
    '언제 다하나'
];

ReactDOM.render(
    <div className="container">
        <Title />
        <AddLi />
        <hr/>
        <ul>
            <TodoLi todos={todos} />
            <EditLi />
        </ul>
    </div>,

    document.getElementById('app')
);
