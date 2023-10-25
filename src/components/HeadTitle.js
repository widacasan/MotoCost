import React from 'react';
import '../style/HeadTitle.css';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';

const HeadTitle = ({ title }) => (
  <div className="page-title-container">
      
      <div className="icon">
       <ViewWeekIcon />
      </div>
     <h1 className="page-title"> {title}</h1>
      
    
     
  </div>
  
  
);

export default HeadTitle;
