import React from 'react';
import CardList from './CarList';
import { robots } from './robots';
const Main = () => {
  return (
    <div>
      <h1>RoboFriends</h1>
      <CardList robots={robots} />
    </div>
  );
};

export default Main;
