'use strict';

import React from 'react';
import ResumeStore from '../../stores/resume/resume.store';
import './mainbody.style.scss';

class MainBody extends React.Component {
    constructor(props) {
        super(props);

        this.updateState = this.updateState.bind(this);

        this.state = { name: '', position: '' };

        if (ResumeStore.getData()) {
            const data = ResumeStore.getData();
            this.state.name = data.name;
            this.state.position = data.position;
        }
    }

    updateState() {
        console.log('updating state');
        const data = ResumeStore.getData();
        this.setState({ name: data.name, position: data.position });
    }

    componentDidMount() {
        ResumeStore.addListener(this.updateState);
    }

    componentWillUnmount() {
        ResumeStore.removeListener(this.updateState);
    }

    render() {
        return (
            <div className="main-body">
                <h1>{this.state.name}</h1>
                <h2>{this.state.position}</h2>
            </div>
        );
    }
}

export default MainBody;