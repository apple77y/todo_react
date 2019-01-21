import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {TodoContext} from "../context";

class TodoLi extends PureComponent {
    constructor(props) {
        super(props);
        this.onClickRemove = this.onClickRemove.bind(this);
    }

    onClickRemove() {
        const {handleRemovedData} = this.context;
        handleRemovedData(this.props.todo);
    }

    render() {
        return (
            <li>
                <span>{this.props.todo}</span>
            <span className="btn-container">
                <a href="#" onClick={this.onClickRemove}>삭제</a>
            </span>
            </li>
        );
    }
}

TodoLi.propTypes = {
    handleRemovedData: PropTypes.func,
    todo: PropTypes.string
};

TodoLi.contextType = TodoContext;

export default TodoLi;
