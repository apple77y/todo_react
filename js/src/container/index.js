var React = require('react');

var Title = require('../component/Title');
var AddLi = require('../component/AddLi');
var TodoLi = require('../component/TodoLi');
var EditLi = require('../component/EditLi');

var text = 'To do list';

var todos = [
    '이것도 해야 되고',
    '저것도 해야 되고',
    '그것도 해야 되고',
    '언제 다하나'
];

var Container = React.createClass({
    render: function () {
        return (
            <div className="container">
                <Title text={text} />
                <AddLi />
                <hr/>
                <ul>
                    <TodoLi todos={todos} />
                    <EditLi />
                </ul>
            </div>
        );
    }
});

module.exports = Container;
