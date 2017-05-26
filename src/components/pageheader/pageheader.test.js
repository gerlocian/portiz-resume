'use strict';

import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import PageHeader from './pageheader.component';

describe('Page header', () => {
    it('should be a react component', () => {
        expect(ReactTestUtils.isCompositeComponentElement(
            <PageHeader/>
        )).toBe(true);
    });
});
