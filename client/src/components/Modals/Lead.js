import React from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';

const Lead = ({ open, handleClose, formValues, handleChange }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, phone, email, pincode } = formValues;

    if (!name || !phone || !email || !pincode) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill all the details!',
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/v1/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, email, pincode }),
      });

      const data = await response.json();

      if (response.status === 201 || response.status === 200) {
        window.location.href = '/product';
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Server error',
      });
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: 300, sm: 400 },
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="h2">
          Enter Your Details
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            margin="normal"
            name="name"
            label="Name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            name="phone"
            label="Phone"
            value={formValues.phone}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            name="email"
            label="Email"
            value={formValues.email}
            onChange={handleChange}
            type="email"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            name="pincode"
            label="Pincode"
            value={formValues.pincode}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default Lead;
