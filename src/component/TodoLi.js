var React = require('react');

var TodoLi = function (props) {
    function onClickRemove() {
        props.handleRemovedData(props.todo);
    }

    return (
        <li>
            <span>{props.todo}</span>
            <span className="btn-container">
                <a href="#" onClick={onClickRemove}>삭제</a>
            </span>
        </li>
    );
};

TodoLi.propTypes = {
    handleRemovedData: React.PropTypes.func.isRequired,
    todo: React.PropTypes.string.isRequired
};

module.exports = TodoLi;
