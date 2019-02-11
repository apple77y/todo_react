import React, {Component, Suspense} from 'react';

import Title from '../component/Title';
import AddLi from '../component/AddLi';
import TodoLi from '../component/TodoLi';

import { ClipLoader } from 'react-spinners';

const Loader = () => <ClipLoader sizeUnit={"px"} size={150} color={'#dc153c'}/>;

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

    fetchData () {
        return new Promise((resolve) => {
            setTimeout(() => {
                const text = 'To do list';
                const todos = [
                    '이것도 해야 되고',
                    '저것도 해야 되고',
                    '그것도 해야 되고',
                    '언제 다하나'
                ];

                resolve({
                    text: text,
                    todos: todos
                });
            }, 2000);
        });
    }


    componentDidMount() {
        // TODO
        // const todo = this.TodoResource.read();
        this.fetchData()
            .then(data => {
                this.setState(() => ({
                    text: data.text,
                    todos: data.todos,
                }));
            })

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
                <Suspense fallback={<Loader />}>
                    <ul>
                        {todoLi}
                    </ul>
                </Suspense>
            </div>
        );
    }
}

export default Container;
