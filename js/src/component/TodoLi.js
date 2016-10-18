var React = require('react');

var TodoLi = React.createClass({
    render: function () {

        return (
            <li>
                <span>{this.props.todo}</span>
                <span className="btn-container"><a href="#">수정</a><a href="#">삭제</a></span>
            </li>
        );
    }
});

module.exports = TodoLi;
