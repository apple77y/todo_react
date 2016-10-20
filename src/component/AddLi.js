var React = require('react');

var AddLi = React.createClass({
    onClickAddButton: function () {
        this.props.handleAddedData(this.textInput.value);
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

module.exports = AddLi;
