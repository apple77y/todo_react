var React = require('react');
var connect = require('react-redux').connect;

var addTodo = require('../action/todo').addTodo;

var AddLi = React.createClass({
    onClickAddButton: function () {
        if (!this.textInput.value.trim()) {
            return false;
        }

        this.props.onAddTodo(this.textInput.value);
        this.textInput.value = '';
        this.textInput.focus();
    },

    render: function () {
        var self = this;

        return (
            <div className="input-group input-group-lg">
                <input type="text" className="form-control" placeholder="할 일을 입력해주세요"
                       ref={function(ref){self.textInput = ref;}}
                />
                <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={this.onClickAddButton}>등록</button>
                </span>
            </div>
        );
    }
});

AddLi.propTypes = {
    onAddTodo: React.PropTypes.func.isRequired
};

var mapDispatchToProps = function (dispatch) {
    return {
        onAddTodo: function (todo) {
            dispatch(addTodo(todo));
        }
    }
};

module.exports = connect(undefined, mapDispatchToProps)(AddLi);
