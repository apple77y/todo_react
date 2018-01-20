import update from 'react-addons-update';
import actionIndex from '../action/index';

const initialState = {
    text: '',
    todos: []
};

const todo = (state = initialState, action) => {
    let text, todos, index;

    switch (action.type) {
        case actionIndex.GET_DATA:
            text = 'To do list';
            todos = [
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

        case actionIndex.ADD_TODO:
            return update(state, {
                todos: {
                    $push: [action.todo]
                }
            });

        case actionIndex.REMOVE_TODO:
            todos = state.todos;
            index = todos.indexOf(action.todo);

            return update(state, {
                todos: {
                    $splice: [[index, 1]]
                }
            });

        default:
            return state;
    }
};

export default todo;
