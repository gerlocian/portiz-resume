'use strict';

import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import MainBody from './mainbody.component';

describe('Main body', () => {
    it('should be a react component', () => {
        expect(ReactTestUtils.isCompositeComponentElement(
            <MainBody/>
        )).toBe(true);
    });
});