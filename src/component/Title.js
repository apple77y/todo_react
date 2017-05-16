import React, {PureComponent} from 'react';

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

export default Title;
