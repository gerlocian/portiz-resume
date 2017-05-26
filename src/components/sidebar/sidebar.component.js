'use strict';

import React from 'react';
import './sidebar.style.scss';

class SideBar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                {this.props.children}
            </div>
        );
    }
}

export default SideBar;