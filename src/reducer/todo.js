import { List, Map } from 'immutable';
import actionIndex from '../action/index';

const initialState = Map({
    text: '',
    todos: List()
});

const todo = (state = initialState, action) => {
    let text, todos;

    switch (action.type) {
        case actionIndex.GET_DATA:
            text = 'To do list';
            todos = List([
                '이것도 해야 되고',
                '저것도 해야 되고',
                '그것도 해야 되고',
                '언제 다하나'
            ]);

            return state
                .update('text', string => string = text)
                .update('todos', list => list = todos);

        case actionIndex.ADD_TODO:
            return state
                .update('todos', list => list.push(action.todo));


        case actionIndex.REMOVE_TODO:
            return state
                .update('todos', list => list.filter(value => value !== action.todo));

        default:
            return state;
    }
};

export default todo;
