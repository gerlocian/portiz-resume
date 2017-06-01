'use strict';

import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Renderer from 'react-test-renderer';
import SideBar from './sidebar.component';

describe('Sidebar', () => {
    it('should be a react component', () => {
        expect(ReactTestUtils.isCompositeComponentElement(
            <SideBar/>
        )).toBe(true);
    });

    it('should match the snapshot', () => {
        const component = Renderer.create(<SideBar/>).toJSON();
        expect(component).toMatchSnapshot();
    });
});