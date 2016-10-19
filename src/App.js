var React = require('react');
var ReactDOM = require('react-dom');

if (module.hot) {
    module.hot.accept()
}

var title = 'To do list';
var todos = [
    '이것도 해야 되고',
    '저것도 해야 되고',
    '그것도 해야 되고',
    '언제asdfasdf 다하나'
];

var title = (
    <div className="page-header">
        <h1>{title}</h1>
    </div>
);

var addLi = (
    <div className="input-group input-group-lg">
        <input type="text" className="form-control" placeholder="할 일을 입력해주세요"/>
        <span className="input-group-btn">
            <button className="btn btn-primary" type="button">등록</button>
        </span>
    </div>
);

var todoLi = todos.map(function (todo, i) {
    return (
        <li key={"todo" + i}>
            <span>{todo}</span>
            <span className="btn-container"><a href="#">수정</a><a href="#">삭제</a></span>
        </li>
    );
});

var editLi = (
    <li className="input-group input-group-lg">
        <input type="text" className="form-control" placeholder="수정 버튼 누르면 이렇게"/>
        <span className="input-group-btn">
            <button className="btn btn-primary" type="button">수정완료</button>
        </span>
    </li>
);

ReactDOM.render(
    <div className="container">
        {title}
        {addLi}
        <hr/>
        <ul>
            {todoLi}
            {editLi}
        </ul>
    </div>,

    document.getElementById('app')
);
