var update = require('react-addons-update');

var GET_DATA = require('../action/index').GET_DATA;
var ADD_TODO = require('../action/index').ADD_TODO;
var REMOVE_TODO = require('../action/index').REMOVE_TODO;

var initialState = {
    text: '',
    todos: []
};

function todo(state, action) {
    if (state === undefined) {
        state = initialState;
    }

    switch (action.type) {

        case GET_DATA:
            var text = 'To do list';
            var todos = [
                '이것도 해야 되고',
                '저것도 해야 되고',
                '그것도 해야 되고',
                '언제 다하나'
            ];

            return update(state, {
                text: {
                    $set: text
                },
                todos: {
                    $set: todos
                }
            });

        case ADD_TODO:
            return update(state, {
                todos: {
                    $push: [action.todo]
                }
            });

        case REMOVE_TODO:
            var todos = state.todos;
            var index = todos.indexOf(action.todo);

            return update(state, {
                todos: {
                    $splice: [[index, 1]]
                }
            });

        default:
            return state;
    }
}

module.exports = todo;