import React, {Component} from "react";

const text = "Todo List";

class Title extends Component {
    render() {
        return (
            <div className="page-header">
                <h1>{text}</h1>
            </div>
        );
    }
}

export default Title;
