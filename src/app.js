'use strict';

import './styles/base.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import * as Actions from './actions/actions';

import MainBody from './components/mainbody/mainbody.component';
import SideBar from './components/sidebar/sidebar.component';

Actions.initializeStores();

window.addEventListener('load', () => {
    ReactDOM.render(
        <div className="page-container">
            <MainBody/>
            <SideBar/>
        </div>,
        document.getElementById('site')
    );
});