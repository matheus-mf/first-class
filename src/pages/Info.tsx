import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card';
import { httpClient } from '../services/http/api/index';
import httpService from '../services/http/index';

interface Data {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
}

export const Info: React.FC = () => {
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

  // useEffect(()=> {
  //   const fetchData = async () => {
  //     const response = await httpClient.get('breeds', {
  //       params: {
  //         limit: 3
  //       }
  //     })
  
  //     setData(response.data.data)
  //   }
  //   fetchData()
  // }, [])

  return (
    <div>
      <p>
        <Link to="/">home</Link>
      </p>
      <Card title="Info Page" description="Helen Ellis" />
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
