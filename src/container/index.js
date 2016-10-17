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
