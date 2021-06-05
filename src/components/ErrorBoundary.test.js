import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

describe('<ErrorBoundary/> component tests', () => {
  const wrapper = shallow(<ErrorBoundary />);
  it('sanity test', () => {
    expect(true).toBe(true);
  });

  it('renders <ErrorBoundary/> component', () => {
    expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
  });

  it('checks ErrorBoundary state before error', () => {
    expect(wrapper.state()).toEqual({ hasError: false });
  });

  it('displays error message on error generated by child', () => {
    const Something = () => null;

    const errorWrapper = shallow(
      <ErrorBoundary>
        <Something />
      </ErrorBoundary>
    );
    const error = new Error('test');
    errorWrapper.find(Something).simulateError(error);

    expect(errorWrapper.state()).toEqual({ hasError: true });
    expect(errorWrapper).toMatchSnapshot();
  });
});