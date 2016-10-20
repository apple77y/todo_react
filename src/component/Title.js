var React = require('react');

var Title = function(props) {
    return (
        <div className="page-header">
            <h1>{props.text}</h1>
        </div>
    );
};

module.exports = Title;
