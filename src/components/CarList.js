import React from 'react';
import Card from './Card';

const CarList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, idx) => {
        return (
          <Card
            key={robots[idx].id}
            id={robots[idx].id}
            name={robots[idx].name}
            email={robots[idx].email}
          />
        );
      })}
    </div>
  );
};

export default CarList;
