import React, {Component} from "react";
import {DEFAULT_STATE, TodoContext} from "./index";

export default class Provider extends Component {
    constructor(props) {
        super(props);
        this.state = DEFAULT_STATE;
        this.setData = this.setData.bind(this);
        this.handleAddedData = this.handleAddedData.bind(this);
        this.handleRemovedData = this.handleRemovedData.bind(this);
    }

    setData(title, list) {
        this.setState({
            text: title,
            todos: list
        });
    }

    handleAddedData(todo) {
        this.setState((prevState) => {
            prevState.todos.push(todo);

            return {
                todos: prevState.todos
            }
        });

    }

    handleRemovedData(todo) {
        this.setState((prevState) => {
            const index = prevState.todos.indexOf(todo);
            prevState.todos.splice(index, 1);

            return {
                todos: prevState.todos
            };
        });

    }

    render() {
        return (
            <TodoContext.Provider value={{
                text: this.state.text,
                todos: this.state.todos,
                setData: this.setData,
                handleAddedData: this.handleAddedData,
                handleRemovedData: this.handleRemovedData,
            }}
            >
                {this.props.children}
            </TodoContext.Provider>
        );
    }

}