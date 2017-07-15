import React, {Component} from "react";

const Title = ({text}) => {
    return (
        <div className="page-header">
            <h1>{text}</h1>
        </div>
    );
};

export default Title;
