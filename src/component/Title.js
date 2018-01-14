import React, {Component} from "react";

class Title extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Title shouldComponentUpdate");

        return this.props.text !== nextProps.text;
    }

    render() {
        console.log('Title render');
        return (
            <div className="page-header">
                <h1>{this.props.text}</h1>
            </div>
        );
    }
}

export default Title;
