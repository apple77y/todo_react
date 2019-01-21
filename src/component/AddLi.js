import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {TodoContext} from '../context/index';

class AddLi extends PureComponent {
    constructor(props) {
        super(props);
        this.onClickAddButton = this.onClickAddButton.bind(this);
    }

    onClickAddButton() {
        const {handleAddedData} = this.context;
        handleAddedData(this.textInput.value);
        this.textInput.focus();
        this.textInput.value = '';
    }

    render() {
        return (
            <div className="input-group input-group-lg">
                <input type="text" className="form-control" placeholder="할 일을 입력해주세요"
                       ref={(ref) => {this.textInput = ref;}}
                />
                <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={this.onClickAddButton}>등록</button>
                </span>
            </div>
        );
    }
}

AddLi.propTypes = {
    handleAddedData: PropTypes.func
};

AddLi.contextType = TodoContext;

export default AddLi;
