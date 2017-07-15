import React, {Component} from "react";

import Title from "../component/Title";
import AddLi from "../component/AddLi";
import TodoLi from "../component/TodoLi";

class Container extends Component {
    constructor(){
        super();
        this.state = {
            text: "Todo List",
            todos: [
                "이것도 해야 되고",
                "저것도 해야 되고",
                "그것도 해야 되고",
                "언제 다 하나"
            ]
        };
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
