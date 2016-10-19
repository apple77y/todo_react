var React = require('react');

var Title = React.createClass({

    render: function () {
        return (
            <div className="page-header">
                <h1>{this.props.text}</h1>
            </div>
        );
    }
});

module.exports = Title;
