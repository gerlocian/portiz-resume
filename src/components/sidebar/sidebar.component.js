'use strict';

import React from 'react';
import './sidebar.style.scss';

class SideBar extends React.Component {
    constructor(props) {
        super(props);

        this.expandSidebar = this.expandSidebar.bind(this);
        this.hideSidebar = this.hideSidebar.bind(this);

        this.state = {
            expanded: false
        };
    }

    expandSidebar() {
        this.setState({expanded: true});
    }

    hideSidebar() {
        this.setState({expanded: false});
    }

    render() {
        return (
            <div className={'sidebar ' + (this.state.expanded ? 'is-expanded' : '')}>
                <div className="hamburger-icon">
                    <a href="#" onClick={this.expandSidebar}>
                        <span className="material-icons">menu</span>
                    </a>
                </div>
                <div className="backdrop" onClick={this.hideSidebar} />
                <aside className="sidebar-content">
                    <a href="#" onClick={this.hideSidebar} className="hide-button">
                        <span className="material-icons">arrow_back</span>
                    </a>
                </aside>
            </div>
        );
    }
}

export default SideBar;