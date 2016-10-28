var React = require('react');
var connect = require('react-redux').connect;

var Title = require('../component/Title');
var AddLi = require('../component/AddLi');
var TodoLi = require('../component/TodoLi');

var getData = require('../action/todo').getData;
var removeTodo = require('../action/todo').removeTodo;

var Todo = React.createClass({
    defaultProps: function () {
        return {
            text: '',
            todos: []
        };
    },

    componentDidMount: function () {
        this.props.onGetData();
    },

    render: function () {
        var self = this;
        var todoLi = this.props.todos.map(function (todo, i) {
            return <TodoLi todo={todo} key={'todo' + i} handleRemovedData={self.handleRemovedData}/>;
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
});

Todo.propTypes = {
    text: React.PropTypes.string.isRequired,
    todos: React.PropTypes.array.isRequired
};

var mapStateToProps = function (state) {
    return {
        text: state.text,
        todos: state.todos
    }
};

var mapDispatchToProps = function (dispatch) {
    return {
        onGetData: function () {
            dispatch(getData());
        },
        onRemoveTodo: function (todo) {
            dispatch(removeTodo(todo));
        }
    }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Todo);
