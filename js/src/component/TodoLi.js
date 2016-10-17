var React = require('react');

var todos = [
    '이것도 해야 되고',
    '저것도 해야 되고',
    '그것도 해야 되고',
    '언제 다하나'
];

var TodoLi = React.createClass({
    render: function () {
        var todoLi = todos.map(function (todo, i) {
            return (
                <li key={"todo" + i}>
                    <span>{todo}</span>
                    <span className="btn-container"><a href="#">수정</a><a href="#">삭제</a></span>
                </li>
            );
        });

        return {todoLi}
    }
});

module.exports = TodoLi;
