var React = require('react');
var connect = require('react-redux').connect;

var removeTodo = require('../action/todo').removeTodo;

var TodoLi = function (props) {
    function onClickRemove() {
        props.onRemoveTodo(props.todo);
    }

    return (
        <li>
            <span>{props.todo}</span>
            <span className="btn-container">
                <a href="#" onClick={onClickRemove}>삭제</a>
            </span>
        </li>
    );
};

TodoLi.propTypes = {
    onRemoveTodo: React.PropTypes.func.isRequired,
    todo: React.PropTypes.string.isRequired
};

var mapDispatchToProps = function (dispatch) {
    return {
        onRemoveTodo: function (todo) {
            dispatch(removeTodo(todo));
        }
    }
};

module.exports = connect(undefined, mapDispatchToProps)(TodoLi);
