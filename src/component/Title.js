import React, {memo} from 'react';

const Title = memo((props) => {
    console.log('render');
    return (
        <div className="page-header">
            <h1>{props.text}</h1>
        </div>
    );
});

export default Title;
