import React, {Component} from 'react';
import {connect} from 'react-redux';

import Title from '../component/Title';
import AddLi from '../component/AddLi';
import TodoLi from '../component/TodoLi';

import actionTodo from '../action/todo';

class Todo extends Component {
    componentDidMount() {
        this.props.onGetData();
    }

    render() {
        const todoLi = this.props.todos.map((todo, i) => {
            return <TodoLi todo={todo} key={'todo' + i} />;
        });

        return (
            <div className="container">
                <Title text={this.props.text}/>
                <AddLi />
                <hr/>
                <ul>
                    {todoLi}
                </ul>
            </div>
        );
    }
}

Todo.defaultProps = {
    text: '',
    todos: []
};


Todo.propTypes = {
    text: React.PropTypes.string.isRequired,
    todos: React.PropTypes.array.isRequired,
    onGetData: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    text: state.text,
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    onGetData: () => {
        dispatch(actionTodo.getData());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
