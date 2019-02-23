import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import Title from '../component/Title';
import AddLi from '../component/AddLi';
import TodoLi from '../component/TodoLi';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            todos: []
        };

        this.handleAddedData = this.handleAddedData.bind(this);
        this.handleRemovedData = this.handleRemovedData.bind(this);
    }

    }

        const todos = [
            '이것도 해야 되고',
            '저것도 해야 되고',
            '그것도 해야 되고',
            '언제 다하나'
        ];

        this.setState((prevState) => {
            return {
                text: text,
                todos: todos
            }
        });
    }

    }

    handleAddedData(todo) {
        if (!todo.trim()) {
            return false;
        }

        this.setState((prevState) => {
            prevState.todos.push(todo);

            return {
                todos: prevState.todos
            }
        });
    }

    handleRemovedData(todo) {
        this.setState((prevState) => {
            var index = prevState.todos.indexOf(todo);
            prevState.todos.splice(index, 1);

            return {
                todos: prevState.todos
            };
        });
    }

    render() {
        const todoLi = this.state.todos.map((todo, i) => <TodoLi todo={todo} key={'todo' + i} handleRemovedData={this.handleRemovedData}/>);

        return (
            <div className="container">
                <Title text={this.state.text}/>
                <AddLi handleAddedData={this.handleAddedData}/>
                <hr/>
                <ul>
                    {todoLi}
                </ul>
            </div>
        );
    }
}

export default hot(module)(Container);
