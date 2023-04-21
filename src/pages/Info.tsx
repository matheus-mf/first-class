import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card';

export const Info: React.FC = () => {
  return (
    <div>
      <p>
        <Link to="/">home</Link>
      </p>
      <Card title="Info Page" description="Helen Ellis" />
    </div>
  );
}
