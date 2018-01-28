import React from 'react';
import {connect} from 'react-redux';

import actionTodo from '../action/todo';

class TodoLi extends React.Component {
    onClickRemove() {
        this.props.onRemoveTodo(this.props.todo);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            this.props.todo !== nextProps.todo ||
            this.props.onRemoveTodo !== nextProps.onRemoveTodo

        );
    }

    render() {
        return (
            <li>
                <span>{this.props.todo}</span>
                <span className="btn-container">
                    <a href="#" onClick={this.onClickRemove.bind(this)}>삭제</a>
                </span>
            </li>
        );
    }
}

TodoLi.propTypes = {
    onRemoveTodo: React.PropTypes.func.isRequired,
    todo: React.PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    onRemoveTodo: (todo) => {
        dispatch(actionTodo.removeTodo(todo));
    }
});

export default connect(undefined, mapDispatchToProps)(TodoLi);
