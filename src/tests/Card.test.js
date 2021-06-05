import React from 'react';
import { shallow } from 'enzyme';
import Card from '../components/Card';

describe('<Card/> component tests', () => {
  it('sanity test', () => {
    expect(true).toBe(true);
  });

  it('renders Card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
  });
});
