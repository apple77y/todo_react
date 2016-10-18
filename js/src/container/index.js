var React = require('react');

var Title = require('../component/Title');
var AddLi = require('../component/AddLi');
var TodoLi = require('../component/TodoLi');
var EditLi = require('../component/EditLi');

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

    handleData: function (inputValue) {
        this.state.todos.push(inputValue);
        var newTodos = this.state.todos;

        this.setState({
            todos: newTodos
        });
    },

    render: function () {
        var todoLi = this.state.todos.map(function (todo, i) {
            return <TodoLi todo={todo} key={i}/>;
        });

        return (
            <div className="container">
                <Title text={this.state.text}/>
                <AddLi handleData={this.handleData} />
                <hr/>
                <ul>
                    {todoLi}
                    <EditLi />
                </ul>
            </div>
        );
    }
});

module.exports = Container;
