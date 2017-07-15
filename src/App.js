import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
    module.hot.accept();
}

const text = "Todo List";
const Title = (
    <div className="page-header">
        <h1>{text}</h1>
    </div>
);

const AddLi = (
    <div className="input-group input-group-lg">
        <input type="text" className="form-control" placeholder="할 일을 입력해주세요" />
        <span className="input-group-btn">
            <button className="btn btn-primary" type="button">등록</button>
        </span>
    </div>
);

const todos = [
    "이것도 해야 되고",
    "저것도 해야 되고",
    "그것도 해야 되고",
    "언제 다 하나",
];

const TodoLi = todos.map((todo, i) => {
    return (
        <li key={"todo" + i}>
            <span>{todo}</span>
            <span className="btn-container"><a href="#">삭제</a></span>
        </li>
    );
});

ReactDOM.render(
    <div className="container">
        {Title}
        {AddLi}
        <hr/>
            <ul>
                {TodoLi}
            </ul>
    </div>, 
    document.getElementById("app")
);
