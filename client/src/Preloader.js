// src/components/Preloader.jsx
import React, { useEffect } from 'react';

const Preloader = ({ onFinish }) => {
  const API_HOST = "https://drcare-iip8.onrender.com";
  const LOCAL_HOST = "http://localhost:4000";

  useEffect(() => {
    // Trigger dummy API call to warm up your backend using fetch
    fetch(`${API_HOST}/api/v1/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'dummy',
        phone: '0000000000',
        email: 'dummy@example.com',
        pincode: '101010',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Dummy API call response:', data);
      })
      .catch((error) => {
        console.error('Dummy API call failed', error);
      });

    // Set timer to remove the preloader after 10 seconds (or adjust as needed)
    const timer = setTimeout(() => {
      onFinish();
    }, 10000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}
    >
      <img
        src="https://res.cloudinary.com/dofhvhvnf/image/upload/v1741273447/20250306_2032_Medicine_Delivery_Journey_simple_compose_01jnnzmw03fges1y8a1c9zd6bh_sociya.gif"
        alt="Loading..."
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

export default Preloader;
