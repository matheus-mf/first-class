import React from 'react';
import { Link } from 'react-router-dom';

export const Info: React.FC = () => {
  return (
    <div>
      <p>
        <Link to="/">home</Link>
      </p>
      Info
    </div>
  );
}
