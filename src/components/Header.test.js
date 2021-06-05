import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header/> component tests', () => {
  it('sanity test', () => {
    expect(true).toBe(true);
  });

  it('renders Header component', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });
});
