
import React from 'react';
import HeadTitle from './components/HeadTitle';
import ItemsBike from './components/ItemsBike';
import "./style/App.css"

const App = () => {
  return (
    <div className='app'>
      <HeadTitle title="Bienvenido a Motosense" 
                 />
        
        <ItemsBike />

    </div>
  );
};

export default App;