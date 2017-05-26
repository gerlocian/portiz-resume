'use strict';

import React from 'react';
import Container from '../container/container.component';
import CollapseHelper from './collapse-helper.helper';
import './collapsable-container.style.scss';

class CollapsableContainer extends Container {
    constructor(props) {
        super(props);
        this.classNames = this.classNames.concat('collapsable-container');
    }

    headerOnClick() {
        this.collapseHelper.toggle();
    }

    processReferenceElement(element) {
        super.processReferenceElement(element);
        this.collapseHelper = new CollapseHelper(this.element);
    }
}

export default CollapsableContainer;