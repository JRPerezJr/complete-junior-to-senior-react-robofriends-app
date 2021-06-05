import React from 'react';

import Header from './Header';
import CardList from './CarList';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';

import './MainPage.css';

class MainPage extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1 className="tc">Loading...</h1>
    ) : (
      <div className="tc">
        <Header />
        <Searchbox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filterRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
