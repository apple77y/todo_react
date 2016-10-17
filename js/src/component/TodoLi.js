var React = require('react');

var TodoLi = React.createClass({
    render: function () {
        var todoLi = this.props.todos.map(function (todo, i) {
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
