import React from 'react';

export const DEFAULT_STATE = {
    text: '',
    todos: []
};

export const TodoContext = React.createContext(DEFAULT_STATE);
