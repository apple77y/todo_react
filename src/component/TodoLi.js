import React, {Component} from "react";

const TodoLi = ({handleRemovedData, todo}) => {
    const onClickRemoveButton = () => {
        handleRemovedData(todo);
    };

    return (
        <li>
            <span>{todo}</span>
            <span className="btn-container">
                <a href="#" onClick={onClickRemoveButton}>
                    삭제
                </a>
            </span>
        </li>
    );
};

export default TodoLi;
