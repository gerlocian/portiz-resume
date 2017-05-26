'use strict';

import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import SideBar from './sidebar.component';

describe('Sidebar', () => {
    it('should be a react component', () => {
        expect(ReactTestUtils.isCompositeComponentElement(
            <SideBar/>
        )).toBe(true);
    });
});