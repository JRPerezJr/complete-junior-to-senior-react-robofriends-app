import React from 'react';
import { shallow } from 'enzyme';
import CardList from '../components/CarList';

describe('<CardList/> component tests', () => {
  it('sanity test', () => {
    expect(true).toBe(true);
  });

  it('renders CardList component', () => {
    const mockRobots = [
      {
        id: 1,
        name: 'James',
        username: 'jbond',
        email: 'jbond@universalexports.com',
      },
    ];
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
  });
});
