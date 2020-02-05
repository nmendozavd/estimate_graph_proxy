import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Graph, {} from './components/graph.jsx';

describe('Graph', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Graph />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });
});