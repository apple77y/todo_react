import React, {Component} from "react";

class TodoLi extends Component {
    constructor() {
        super();
        this.onClickRemoveButton = this.onClickRemoveButton.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("TodoLi shouldComponentUpdate");

        return this.props.todo !== nextProps.todo;
    }

    render() {
        console.log('TodoLi render');

        return (
            <li>
                <span>{this.props.todo}</span>
                <span className="btn-container"><a href="#" onClick={this.onClickRemoveButton}>삭제</a></span>
            </li>
        );
    }

    onClickRemoveButton() {
        this.props.handleRemovedData(this.props.todo);
    }
}

export default TodoLi;
