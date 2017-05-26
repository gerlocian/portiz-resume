'use strict';

import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Renderer from 'react-test-renderer';
import CollapsableContainer from './collapsable-container.component';

describe('Collapsable container', () => {
    const DEFAULT_TEST_TITLE = 'DEFAULT_TEST_TITLE';
    let renderer = null;
    let component = null;
    let header = null;
    let nodeMock = null;

    function createNodeMock() {
        nodeMock = {
            getElementsByClassName: (className) => {
                return [{
                    style: {},
                    scrollHeight: 100,
                    addEventListener: jest.fn(),
                    className: className,

                }];
            },
            className: 'container collapsable-container'
        };

        return nodeMock;
    }

    beforeEach(() => {
        global.requestAnimationFrame = jest.fn();

        renderer = Renderer.create(
            <CollapsableContainer header={DEFAULT_TEST_TITLE}>
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
            </CollapsableContainer>,
            {createNodeMock}
        );

        component = renderer.toJSON();

        header = component.children.find(child => child.props.className.split(' ').includes('container-header'));
    });

    afterEach(() => {
        renderer = null;
        component = null;
    });

    it('should be a react component', () => {
        expect(ReactTestUtils.isCompositeComponentElement(
            <CollapsableContainer header={DEFAULT_TEST_TITLE}/>
        )).toBe(true);
    });

    it('should have class "container"', () => {
        expect(component.props.className.split(' ').includes('container')).toBe(true);
    });

    it('should have class "collapsable-container"', () => {
        expect(component.props.className.split(' ').includes('collapsable-container')).toBe(true);
    });

    it('should add additional class names if provided', () => {
        component = Renderer.create(
            <CollapsableContainer header={DEFAULT_TEST_TITLE} classNames={[ 'test-class-name' ]} />,
            {createNodeMock}
        ).toJSON();
        expect(component.props.className.split(' ').includes('test-class-name')).toBe(true);
    });

    it('should match the established snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    describe('header', () => {
        it('should have an on click event', () => {
            expect(header.props.onClick).toBeDefined();
            expect(header.props.onClick).toBeInstanceOf(Function);
        });
    });
});
