'use strict';

import React from 'react';
import ResumeStore from '../../stores/resume/resume.store';
import './pageheader.style.scss';

const PageHeader = () => {
    const resumeData = ResumeStore.getData();
    return (
        <div className="page-header">
            <h1 className="name">{resumeData.name}</h1>
            <h2 className="position">{resumeData.position}</h2>
            <div className="contact">
                <div className="phone">
                    <span>Phone:</span> <span>{resumeData.contact.mobile}</span>
                </div>
                <div className="email">
                    <span>Email:</span> <span>{resumeData.contact.email}</span>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
