import React, { useState } from 'react';
import { Box, Modal, Typography, IconButton, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import { keyframes } from '@mui/system';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const zoomInOut = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`;

const style = {
  position: 'fixed',
  bottom: 16,
  right: 16,
  bgcolor: '#bf94e4',
  color: 'white',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  p: 1,
  borderRadius: '50%',
  zIndex: 1300,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const modalStyle = {
  position: 'fixed',
  bottom: 110, // Positioning the modal just above the pop-up
  right: 35,
  width: 60,
//   bgcolor: 'background.paper',
bgcolor: 'transparent',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  p: 1,
  zIndex: 1200,
  animation: `${zoomInOut} 2s infinite`,
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
      <Box sx={{ ...style, animation: `${zoomInOut} 2s infinite` }}>
        <IconButton color="inherit" onClick={handleOpen} sx={{ flexDirection: 'column' }}>
          <LocalMallIcon fontSize="large" />
          <Typography variant="body2" color="inherit">
            Order by
          </Typography>
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
            <WhatsAppIcon sx={{ color: 'white', bgcolor: '#25D366', borderRadius: '50%', p: 1, fontSize: 40 }} />
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
            <PhoneIcon sx={{ color: 'white', bgcolor: '#007BFF', borderRadius: '50%', p: 1, fontSize: 40 }} />
          </Link>
        </Box>
      </Modal>
    </>
  );
};

export default Popup;
