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

    componentDidMount: function () {
        this.setState({
            text: 'To do list',
            todos: [
                '이것도 해야 되고',
                '저것도 해야 되고',
                '그것도 해야 되고',
                '언제 다하나'
            ]
        })
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
