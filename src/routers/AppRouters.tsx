import React from 'react';
import { 
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom';

import { Home } from '../pages/Home';
import { Info } from '../pages/Info';

export const AppRouters: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}