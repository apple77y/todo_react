import React from 'react';

class Title extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return (
            this.props.text !== nextProps.text
        );
    }

    render() {
        console.log('Title Render');
        return (
            <div className="page-header">
                <h1>{this.props.text}</h1>
            </div>
        );
    }
}

Title.propTypes = {
    text: React.PropTypes.string.isRequired
};

export default Title;
