import React, {Component} from 'react';

import Title from '../component/Title';
import AddLi from '../component/AddLi';
import TodoLi from '../component/TodoLi';
import {TodoContext} from "../context/index";

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
        const {setData} = this.context;
        setData(text, todos);
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
        const {text, todos} = this.context;
        const todoLi = todos.map((todo, i) => <TodoLi todo={todo} key={'todo' + i} />);

        return (
            <div className="container">
                <Title text={text}/>
                <AddLi />
                <hr/>
                <ul>
                    {todoLi}
                </ul>
            </div>
        );
    }
}

Container.contextType = TodoContext;

export default Container;
