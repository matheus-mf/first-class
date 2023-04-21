import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card';

export const Home: React.FC = () => {
  return (
    <div>
      <p>
        <Link to="/info">Info</Link>
      </p>
      <Card title="Home Page" description="Celia Gilbert" />
    </div>
  );
}
