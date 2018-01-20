import React from 'react';

class Title extends React.Component {
    render() {
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
