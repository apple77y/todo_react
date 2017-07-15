import React, {Component} from "react";

class TodoLi extends Component {
    constructor() {
        super();
        this.onClickRemoveButton = this.onClickRemoveButton.bind(this);
    }
    render() {
        return (
            <li>
                <span>{this.props.todo}</span>
                <span className="btn-container"><a href="#" onClick={this.onClickRemoveButton}>삭제</a></span>
            </li>
        );
    }

    onClickRemoveButton() {
        this.props.handleRemovedData();
    }
}

export default TodoLi;
