import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemsBike from './components/ItemsBike';
import MotoCost from './components/Budget';
import "./style/App.css"
import { useFetch } from './data/useFetch.mjs';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const { data } = useFetch('article/804882/image/link');
  return (
    <Router>
      <div className='app'>
        
        <Routes>
          <Route path="/" element={<ItemsBike />} />
          
          <Route path="/:marca/:modelo/:anio" element={<MotoCost />} />
          </Routes>
      </div>
    </Router>
    
  );
};

export default App;