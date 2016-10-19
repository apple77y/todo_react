var React = require('react');

var Title = require('../component/Title');
var AddLi = require('../component/AddLi');
var TodoLi = require('../component/TodoLi');

var Container = React.createClass({
    getInitialState: function () {
        return {
            text: '',
            todos: []
        };
    },

    componentWillMount: function () {
        console.log('componentWillMount');
    },

    componentDidMount: function () {
        this.setState({
            text: 'To do list',
            todos: [
                '이것도 해야 되고',
                '저것도 해야 되고',
                '그것도 해야 되고',
                '언제 다하나'
            ]
        });
    },

    componentWillReceiveProps: function () {
        console.log('componentWillReceiveProps');
    },

    componentWillUpdate: function () {
        console.log('componentWillUpdate');
    },

    componentDidUpdate: function () {
        console.log('componentDidUpdate');
    },

    componentWillUnmount: function () {
        console.log('componentWillUnmount');
    },

    handleAddedData: function (todo) {
        if (!todo.trim()) {
            return false;
        }
        this.state.todos.push(todo);
        var newTodos = this.state.todos;

        this.setState({
            todos: newTodos
        });
    },

    handleRemovedData: function (todo) {
        var index = this.state.todos.indexOf(todo);
        this.state.todos.splice(index, 1);

        var newTodos = this.state.todos;
        this.setState({
            todos: newTodos
        });
    },

    render: function () {
        var self = this;
        var todoLi = this.state.todos.map(function (todo, i) {
            return <TodoLi todo={todo} key={'todo' + i} handleRemovedData={self.handleRemovedData}/>;
        });

        return (
            <div className="container">
                <Title text={this.state.text}/>
                <AddLi handleAddedData={this.handleAddedData} />
                <hr/>
                <ul>
                    {todoLi}
                </ul>
            </div>
        );
    }
});

module.exports = Container;
