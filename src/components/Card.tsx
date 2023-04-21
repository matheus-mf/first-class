import React from 'react';

interface CardProps {
  text: string
}

const Card: React.FC<CardProps> = ({ text }) => {
  return <p>{text}</p>;
}

export { Card }
