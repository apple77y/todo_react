import React, {Component} from "react";

import Title from "../component/Title";
import AddLi from "../component/AddLi";
import TodoLi from "../component/TodoLi";

class Container extends Component {
    render() {
        return (
            <div className="container">
                <Title/>
                <AddLi/>
                <hr/>
                <ul>
                    <TodoLi/>
                </ul>
            </div>
        );
    }
}

export default Container;
