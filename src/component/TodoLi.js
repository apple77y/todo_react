var React = require('react');

var TodoLi = React.createClass({
    onClickRemove: function () {
        this.props.handleRemovedData(this.props.todo);
    },

    render: function () {

        return (
            <li>
                <span>{this.props.todo}</span>
                <span className="btn-container"><a href="#">수정</a><a href="#" onClick={this.onClickRemove}>삭제</a></span>
            </li>
        );
    }
});

module.exports = TodoLi;
