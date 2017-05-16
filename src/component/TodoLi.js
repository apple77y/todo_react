import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class TodoLi extends PureComponent {
    constructor(props) {
        super(props);
        this.onClickRemove = this.onClickRemove.bind(this);
    }

    onClickRemove() {
        this.props.handleRemovedData(this.props.todo);
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

export default TodoLi;
