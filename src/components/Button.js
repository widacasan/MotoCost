import React from 'react';
import '../style/Button.css'

const Button = ({ text, onClick }) => {
  return (
    <div className='button'>
        <button onClick={onClick}>{text}</button>
    </div>
    
  );
};

export default Button;