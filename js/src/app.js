var React = require('react');
var ReactDOM = require('react-dom');

var Title = require('./component/Title');
var AddLi = require('./component/AddLi');
var EditLi = require('./component/EditLi');

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
            <span className="btn-container"><a href="#">수정</a><a href="#">삭제</a></span>
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
            <EditLi />
        </ul>
    </div>,

    document.getElementById('app')
);
