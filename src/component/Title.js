import React, {PureComponent} from 'react';
import {TodoContext} from '../context/index';
import PropTypes from 'prop-types';

class Title extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {text} = this.context;
        return (
            <div className="page-header">
                <h1>{text}</h1>
            </div>
        );
    }
}

Title.propTypes = {
    text: PropTypes.string
};

Title.contextType = TodoContext;

export default Title;
