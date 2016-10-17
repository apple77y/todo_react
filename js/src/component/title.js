var React = require('react');

var text = 'To do list';

var Title = React.createClass({

    render: function () {
        return (
            <div className="page-header">
                <h1>{text}</h1>
            </div>
        );
    }
});

module.exports = Title;
