import React from 'react';
import { connect } from 'react-redux';

import actionTodo from '../action/todo';

class AddLi extends React.Component {
    onClickAddButton() {
        if (!this.textInput.value.trim()) {
            return ;
        }

        this.props.onAddTodo(this.textInput.value);
        this.textInput.value = '';
        this.textInput.focus();
    }

    render() {
        return (
            <div className="input-group input-group-lg">
                <input type="text" className="form-control" placeholder="할 일을 입력해주세요"
                       ref={(ref) => {this.textInput = ref;}}
                />
                <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={this.onClickAddButton.bind(this)}>등록</button>
                </span>
            </div>
        );
    }
}

AddLi.propTypes = {
    onAddTodo: React.PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    onAddTodo: (todo) => {
        dispatch(actionTodo.addTodo(todo));
    }
});

export default connect(undefined, mapDispatchToProps)(AddLi);
