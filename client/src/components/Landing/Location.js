import React from 'react';

const Location=()=> {
  const iframeStyle = {
    width: '100%',
    height: '600px',
    border: '0',
    marginBottom: '20px'
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap', // This ensures responsiveness
    padding: '20px'
  };

  const addressStyle = {
    maxWidth: '500px', // Adjust width as needed
    textAlign: 'center',
    fontSize: '16px'
  };

  return (
    <div style={containerStyle}>
      <iframe
        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=262,%20Netaji%20Subhash%20Rd.,%20Rabisandhalai,%20Chakra%20Beriya,%20Shibpur,%20Howrah,%20West%20Bengal%20711104+(Dr.%20Care)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        style={iframeStyle}
        title="Business Location"
        allowFullScreen>
      </iframe>
      <div style={addressStyle}>
        <strong style={{color:'#1e6460'}}>Visit Us:</strong><br />
        262, Netaji Subhash Rd., Rabisandhalai, Chakra Beriya, Shibpur, Howrah, West Bengal 711104
      </div>
    </div>
  );
}

export default Location;
