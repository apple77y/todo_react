var React = require('react');
var ReactDOM = require('react-dom');

var Title = require('./component/title');
var AddLi = require('./component/addLi');

var todos = [
    '이것도 해야 되고',
    '저것도 해야 되고',
    '그것도 해야 되고',
    '언제 다하나'
];

var todoLi = todos.map(function (todo, i) {
    return (
        <li key={"todo" + i}>
            <span>{todo}</span>
            <span className="btn-container"><a href="#">삭제</a></span>
        </li>
    );
});

ReactDOM.render(
    <div className="container">
        <Title />
        <AddLi />
        <hr/>
        <ul>
            {todoLi}
        </ul>
    </div>,

    document.getElementById('app')
);
