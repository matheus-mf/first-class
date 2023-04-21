import React from 'react';
import './style.css'

interface CardProps {
  title: string
  description: string
}

const Card: React.FC<CardProps> = ({ title, description}: CardProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export { Card }
