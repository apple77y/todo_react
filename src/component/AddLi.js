import React, {PureComponent} from 'react';

class AddLi extends PureComponent {
    constructor(props) {
        super(props);
        this.onClickAddButton = this.onClickAddButton.bind(this);
    }

    onClickAddButton() {
        this.props.handleAddedData(this.textInput.value);
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
                <button className="btn btn-primary" type="button" onClick={this.onClickAddButton}>등록</button>
                </span>
            </div>
        );
    }
}

export default AddLi;
