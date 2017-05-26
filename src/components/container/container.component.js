'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import './container.style.scss';

class Container extends React.Component {
    constructor(props) {
        super(props);

        this.classNames = props.classNames.concat('container');
        this.processReferenceElement = this.processReferenceElement.bind(this);
        this.headerOnClick = this.headerOnClick.bind(this);
    }

    headerOnClick() {}

    processReferenceElement(element) {
        this.element = element;
    }

    render() {
        return (
            <div className={this.classNames.join(' ')} ref={this.processReferenceElement}>
                <h3 className="container-header" onClick={this.headerOnClick}>
                    {this.props.header}
                </h3>
                <div className="container-body">
                    <div className="container-body-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

Container.defaultProps = {
    classNames: []
};

Container.propTypes = {
    header: PropTypes.string.isRequired,
    classNames: PropTypes.array
};

export default Container;
