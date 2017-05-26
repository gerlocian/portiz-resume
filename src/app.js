'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ResumeStore from './stores/resume/resume.store';
import * as Actions from './actions/resume.actions';

import PageHeader from './components/pageheader/pageheader.component';

import './styles/base.scss';

const render = () => {
    ReactDOM.render(
        <div className="page-container">
            <PageHeader/>
        </div>,
        document.getElementById('site')
    );
};

ResumeStore.addListener(render);
Actions.loadResume();