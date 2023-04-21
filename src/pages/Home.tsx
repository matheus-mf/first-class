import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card';
import httpService from '../services/http';

interface Data {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
}

export const Home: React.FC = () => {
  const [data, setData] = useState<Data[]>()

  useEffect(()=> {
    const fetchData = async ( ) => {
      const response = await httpService.breed.getByLimit({
        limit: 3
      });

      setData(response.data as Data);
    }

    fetchData()
  },[])

  return (
    <div>
      <p>
        <Link to="/info">Info</Link>
      </p>
      <Card title="Home Page" description="Celia Gilbert" />

      {data?.map(item => (
        <div style={{
          border: '1px solid red',
          marginBottom: 5
        }}>
          breed: <b>{item.breed}</b> <br />
          coat: <b>{item.coat}</b>
        </div>
      ))}
    </div>
  );
}
