import React, {Component} from 'react';

import Title from '../component/Title';
import AddLi from '../component/AddLi';
import TodoLi from '../component/TodoLi';

class Container extends Component {
    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        const text = 'To do list';
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

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
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

export default Container;
