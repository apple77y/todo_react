import React, { Component } from "react";
import { Map, List } from "immutable";

import Title from "../component/Title";
import AddLi from "../component/AddLi";
import TodoLi from "../component/TodoLi";

class Container extends Component {
    constructor(){
        super();
        this.state = {
            data: Map({
                text: "",
                todos: List()
            })
        };

        this.handleAddedData = this.handleAddedData.bind(this);
        this.handleRemovedData = this.handleRemovedData.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            this.state.data.get('todos') !== nextState.data.get('todos')
        );
    }

    componentDidMount() {
        const title = "Todo List";
        const todos = List([
            "이것도 해야 되고",
            "저것도 해야 되고",
            "그것도 해야 되고",
            "언제 다 하나"
        ]);

        this.setState(({data}) => ({
            data: data
                    .update("text", text => text = title)
                    .update("todos", list => list = todos)
        }));
    }

    handleAddedData(text) {
        this.setState(({data}) => ({
            data: data
                    .update("todos", list => list.push(text))
        }));
    }

    handleRemovedData(text) {
        this.setState(({data}) => ({
            data: data
                    .update("todos", list => list.filter(value => value !== text))
        }));
    }

    render() {
        console.log('Container render');
        const { data } = this.state;
        const text = data.get('text');
        const todos = data.get('todos');

        const todoLi = todos.map((todo, i) => {
            return <TodoLi todo={todo} key={'todo' + i} handleRemovedData={this.handleRemovedData}/>;
        });

        return (
            <div className="container">
                <Title text={text}/>
                <AddLi handleAddedData={this.handleAddedData}/>
                <hr/>
                <ul>
                    {todoLi}
                </ul>
            </div>
        );
    }
}

export default Container;
