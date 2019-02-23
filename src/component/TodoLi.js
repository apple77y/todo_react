import React, {memo} from 'react';

const TodoLi = memo((props) => {
    const onClickRemove = () => {
        props.handleRemovedData(props.todo);
    };
    console.log('render');
    return (
        <li>
            <span>{props.todo}</span>
            <span className="btn-container">
                <a href="#" onClick={onClickRemove}>삭제</a>
            </span>
        </li>
    );
});

export default TodoLi;
