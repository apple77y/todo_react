import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Title extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page-header">
                <h1>{this.props.text}</h1>
            </div>
        );
    }
}

Title.propTypes = {
    text: PropTypes.string
};

export default Title;
