import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div>
      <p>
        <Link to="/info">Info</Link>
      </p>
      Home
    </div>
  );
}
