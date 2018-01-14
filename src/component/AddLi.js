import React, {Component} from "react";

class AddLi extends Component {
    constructor() {
        super();
        this.onClickAddButton = this.onClickAddButton.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("AddLi shouldComponentUpdate");

        return this.props.handleAddedData !== nextProps.handleAddedData;
    }

    render() {
        console.log('AddLi render');

        return (
            <div className="input-group input-group-lg">
                <input type="text" className="form-control" placeholder="할 일을 입력해주세요" ref={(input) => this.inputBox = input}/>
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick={this.onClickAddButton}>등록</button>
                </span>
            </div>
        );
    }

    onClickAddButton() {
        this.props.handleAddedData(this.inputBox.value);
        this.inputBox.value = '';
        this.inputBox.focus();
    }
}

export default AddLi;
