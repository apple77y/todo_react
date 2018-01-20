import actionIndex from './index';

const getData = () => ({
    type: actionIndex.GET_DATA
});

const addTodo = (todo) => ({
    type: actionIndex.ADD_TODO,
    todo: todo
});

const removeTodo = (todo) => ({
    type: actionIndex.REMOVE_TODO,
    todo: todo
});

export default {
    getData,
    addTodo,
    removeTodo
};
