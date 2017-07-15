import React, {Component} from "react";

import Title from "../component/Title";
import AddLi from "../component/AddLi";
import TodoLi from "../component/TodoLi";

class Container extends Component {
    constructor(){
        super();
        this.state = {
            text: "",
            todos: []
        };
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        const text = "Todo List";
        const todos = [
            "이것도 해야 되고",
            "저것도 해야 되고",
            "그것도 해야 되고",
            "언제 다 하나"
        ];

        this.setState((prevState) => {
            return {
                text,
                todos
            };
        });
        console.log('componentDidMount');
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnMount() {
        console.log('componentWillUnMount');
    }

    render() {
        const todoLi = this.state.todos.map((todo, i) => {
            return <TodoLi todo={todo} key={'todo' + i}/>;
        });

        return (
            <div className="container">
                <Title text={this.state.text}/>
                <AddLi/>
                <hr/>
                <ul>
                    {todoLi}
                </ul>
            </div>
        );
    }
}

export default Container;
