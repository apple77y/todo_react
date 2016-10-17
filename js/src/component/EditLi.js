var React = require('react');

var Edit = React.createClass({
    render: function () {
        return (
            <li className="input-group input-group-lg">
                <input type="text" className="form-control" placeholder="수정 버튼 누르면 이렇게"/>
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">수정완료</button>
                </span>
            </li>
        );
    }
});

module.exports = Edit;
