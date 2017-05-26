'use strict';

import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Renderer from 'react-test-renderer';
import Container from './container.component';

describe('Container', () => {
    const DEFAULT_TEST_TITLE = 'DEFAULT_TEST_TITLE';
    let component = null;

    beforeEach(() => {
        component = Renderer.create(
            <Container header={DEFAULT_TEST_TITLE}>
                <p>Paragraph 1</p>
                <p>Paragraph 2</p>
                <div>
                    <p>Div Paragraph 1</p>
                    <ul>
                        <li>List Item 1</li>
                        <li>List Item 2</li>
                    </ul>
                </div>
                <p>Paragraph 3</p>
            </Container>
        ).toJSON();
    });

    afterEach(() => {
        component = null;
    });

    it('should be a react component', () => {
        expect(ReactTestUtils.isCompositeComponentElement(
            <Container header={DEFAULT_TEST_TITLE}/>
        )).toBe(true);
    });

    it('should have class "container"', () => {
        expect(component.props.className.split(' ').includes('container')).toBe(true);
    });

    it('should add additional class names if provided', () => {
        component = Renderer.create(
            <Container header={DEFAULT_TEST_TITLE} classNames={[ 'test-class-name' ]} />
        ).toJSON();
        expect(component.props.className.split(' ').includes('test-class-name')).toBe(true);
    });

    it('should match the established snapshot', () => {
        expect(component).toMatchSnapshot();
    });
});