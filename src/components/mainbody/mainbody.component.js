'use strict';

import React from 'react';
import './mainbody.style.scss';

class MainBody extends React.Component {
    render() {
        return (
            <div className="main-body">
                {this.props.children}
            </div>
        );
    }
}

export default MainBody;