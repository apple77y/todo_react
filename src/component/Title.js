import React from 'react';

const Title = (props) => {
    console.log('render');
    return (
        <div className="page-header">
            <h1>{props.text}</h1>
        </div>
    );
};

export default Title;
