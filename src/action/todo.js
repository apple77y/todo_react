var GET_DATA = require('./index').GET_DATA;
var ADD_TODO = require('./index').ADD_TODO;
var REMOVE_TODO = require('./index').REMOVE_TODO;

function getData() {
    return {
        type: GET_DATA
    }
}

function setTodo(todo) {
    return {
        type: ADD_TODO,
        todo: todo
    };
}

function removeTodo(todo) {
    return {
        type: REMOVE_TODO,
        todo: todo
    };
}

module.exports = {
    getData: getData,
    addTodo: setTodo,
    removeTodo: removeTodo
};