import React, { useState } from 'react';
import { Box, Modal, IconButton, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { keyframes } from '@mui/system';

const rotate = keyframes`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`;

const style = {
  position: 'fixed',
  bottom: 16,
  right: 30,
  bgcolor: 'black',
  color: '#1976d2',
  boxShadow: '0px 4px 20px indigo',
  p: 1,
  borderRadius: '50%',
  zIndex: 1300,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const rotatingIconStyle = {
  transformStyle: 'preserve-3d',
  animation: `${rotate} 5s linear infinite`,
};

const modalStyle = {
  position: 'fixed',
  bottom: 90, // Positioning the modal just above the pop-up
  right: 35,
  width: 60,
  bgcolor: 'black',
  boxShadow: '0px 4px 20px white',
  borderRadius: '10px',
  p: 1,
  zIndex: 1200,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const Popup = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={style}>
        <IconButton color="inherit" onClick={handleOpen} sx={{ flexDirection: 'column' }}>
          <SupportAgentIcon fontSize="large" sx={rotatingIconStyle} /> {/* Rotating customer care icon */}
        </IconButton>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="contact-options"
        aria-describedby="contact-options-description"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}
      >
        <Box sx={modalStyle}>
          <Link
            href="https://wa.me/yourphonenumber"
            target="_blank"
            sx={{
              display: 'flex',
              alignItems: 'center',
              mt: 1,
              textDecoration: 'none',
              color: '#25D366',
            }}
          >
            <WhatsAppIcon sx={{ color: 'white', bgcolor: '#25D366', borderRadius: '50%', p: 1, fontSize: 40 ,transformStyle: 'preserve-3d',
  animation: `${rotate} 5s linear infinite`, }} />
          </Link>
          <Link
            href="tel:yourphonenumber"
            sx={{
              display: 'flex',
              alignItems: 'center',
              mt: 1,
              textDecoration: 'none',
              color: '#007BFF',
            }}
          >
            <PhoneIcon sx={{ color: 'white', bgcolor: '#007BFF', borderRadius: '50%', p: 1, fontSize: 40,  transformStyle: 'preserve-3d',
  animation: `${rotate} 5s linear infinite`, }} />
          </Link>
        </Box>
      </Modal>
    </>
  );
};

export default Popup;
