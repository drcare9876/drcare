import { Typography } from '@mui/material';
import React from 'react';
import CountUp from 'react-countup';
import { styled } from '@mui/system';

const ZoomImage = styled('img')({
  width: '80px',
  height: '80px',
  marginBottom: '10px',
  animation: 'zoomInOut 3s ease-in-out infinite',
  '@keyframes zoomInOut': {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.1)' },
    '100%': { transform: 'scale(1)' }
  }
});

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '20px'
};

const itemStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center'
};

const h3Style = {
  fontSize: '24px',
  margin: '0',
  color: 'black',
  fontWeight: 'bold'
};

const pStyle = {
  fontSize: '16px',
  margin: '0',
  color: 'black'
};

const StatsComponent = () => {
  return (
    <div style={containerStyle}>
      <div style={itemStyle}>
        <ZoomImage src="https://res.cloudinary.com/dofhvhvnf/image/upload/v1719040220/Aseets/store_voo2mo.png" alt="Offline Stores" />
        <div>
          <Typography component="h2" variant="h4" style={h3Style}><CountUp start={0} end={1000} duration={5} />+</Typography>
          <Typography style={pStyle}>Offline Stores</Typography>
        </div>
      </div>
      <div style={itemStyle}>
        <ZoomImage src="https://res.cloudinary.com/dofhvhvnf/image/upload/v1719040234/Aseets/location_doru0c.png" alt="Pincodes Served" />
        <div>
          <Typography component="h2" variant="h4" style={h3Style}>
            <CountUp start={0} end={5000} duration={5} />+
          </Typography>
          <Typography style={pStyle}>Pincodes Served</Typography>
        </div>
      </div>
      <div style={itemStyle}>
        <ZoomImage src="https://res.cloudinary.com/dofhvhvnf/image/upload/v1719040240/Aseets/user_mzqnny.png" alt="Happy Customers" />
        <div>
          <Typography component="h2" variant="h4" style={h3Style}><CountUp start={0} end={1000} duration={5} />+</Typography>
          <Typography style={pStyle}>Happy Customers</Typography>
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;
