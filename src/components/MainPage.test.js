import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

describe('<MainPage/> component tests', () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false,
    };
    wrapper = shallow(<MainPage {...mockProps} />);
  });

  it('sanity test', () => {
    expect(true).toBe(true);
  });

  it('renders MainPage component without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('filters robots correctly', () => {
    expect(wrapper.instance().filterRobots()).toEqual([]);
  });

  it('filters robots correctly 2', () => {
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: 'James',
          email: 'jbond@jbond.com',
        },
      ],
      searchField: 'james',
      isPending: false,
    };
    const wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper2.instance().filterRobots()).toEqual([
      {
        id: 3,
        name: 'James',
        email: 'jbond@jbond.com',
      },
    ]);
  });

  it('filters robots correctly 3', () => {
    const mockProps3 = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: 'James',
          email: 'jbond@jbond.com',
        },
      ],
      searchField: 'k',
      isPending: false,
    };

    const filteredRobots = [];
    const wrapper3 = shallow(<MainPage {...mockProps3} />);

    expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
  });

  it('should render <h1>Loading..</h1> if isPending true', () => {
    const mockProps4 = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: 'James',
          email: 'jbond@jbond.com',
        },
      ],
      searchField: 'k',
      isPending: true,
    };

    const wrapper4 = shallow(<MainPage {...mockProps4} />);

    expect(wrapper4.instance().render()).toMatchSnapshot();
  });
});
