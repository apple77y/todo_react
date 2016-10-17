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
        console.log('componentDidMount');
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

    render: function () {
        return (
            <div className="container">
                <Title text={this.state.text} />
                <AddLi />
                <hr/>
                <ul>
                    <TodoLi todos={this.state.todos} />
                    <EditLi />
                </ul>
            </div>
        );
    }
});

module.exports = Container;
