import React, {Component} from "react";

const todos = [
    "이것도 해야 되고",
    "저것도 해야 되고",
    "그것도 해야 되고",
    "언제 다 하나",
];

class TodoLi extends Component {
    render() {
        const TodoLi = todos.map((todo, i) => {
            return (
                <li key={"todo" + i}>
                    <span>{todo}</span>
                    <span className="btn-container"><a href="#">삭제</a></span>
                </li>
            );
        });

        return (
            <div>{TodoLi}</div>
        );
    }
}

export default TodoLi;
