import React, { useState, useEffect } from 'react';
import CardList from '../components/CarList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './Main.css';

const Main = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchfield] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users));
  }, []);

  const onSearchChange = event => {
    setSearchfield(event.target.value);
  };

  const filterRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });
  return !robots.length ? (
    <h1 className="tc">Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <Searchbox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filterRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};
export default Main;
