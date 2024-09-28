import React, { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { CiEdit } from 'react-icons/ci';
import { MdAutoDelete } from 'react-icons/md';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

const FadeInModal = styled(Modal)(({ theme }) => ({
  animation: `fadeIn 300ms ${theme.transitions.easing.easeInOut}`,
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
}));

const CanopyData = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [pincode, setPincode] = useState('');
  const [pincodes, setPincodes] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentEditData, setCurrentEditData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/canopy/get');
      const result = await response.json();
      setData(result);
      setFilteredData(result);
      setPincodes([...new Set(result.map(item => item.pincode))]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePincodeChange = (event) => {
    const selectedPincode = event.target.value;
    setPincode(selectedPincode);
    setFilteredData(selectedPincode ? data.filter(item => item.pincode === selectedPincode) : data);
  };

  const handleOpen = (item) => {
    setCurrentEditData(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentEditData(null);
  };

  const handleSave = async () => {
    try {
      await fetch(`http://localhost:4000/api/v1/canopy/update/${currentEditData._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentEditData),
      });
      handleClose();
      fetchData();
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/api/v1/canopy/delete/${id}`, {
        method: 'DELETE',
      });
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrentEditData({
      ...currentEditData,
      [name]: value,
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Canopy Data
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 2,
        }}
      >
        <FormControl sx={{ width: 300, mt: 2 }}>
          <InputLabel id="pincode-label">Pincode</InputLabel>
          <Select
            labelId="pincode-label"
            value={pincode}
            onChange={handlePincodeChange}
            displayEmpty
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            {pincodes.map((code) => (
              <MenuItem key={code} value={code}>
                {code}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <TableContainer component={Paper} sx={{ border: '1px solid #ccc' }}>
        <Table aria-label="canopy data table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Pincode</TableCell>
              <TableCell>Age(in yrs)</TableCell>
              <TableCell>Height(in m)</TableCell>
              <TableCell>Weight(in kg)</TableCell>
              <TableCell>BMI</TableCell>
              <TableCell>BMR</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.pincode}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.height}</TableCell>
                <TableCell>{item.weight}</TableCell>
                <TableCell>{item.bmi.toFixed(2)}</TableCell>
                <TableCell>{item.bmr.toFixed(2)}</TableCell>
                <TableCell>{item.gender}</TableCell>
                <TableCell>
                  <Button variant="text" color="success" onClick={() => handleOpen(item)}>
                    <CiEdit size={24} />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant="text" color="error" onClick={() => handleDelete(item._id)}>
                    <MdAutoDelete size={24} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {currentEditData && (
        <FadeInModal open={open} onClose={handleClose}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" component="h2">
                Edit Data
              </Typography>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
            <TextField
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={currentEditData.name}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              id="mobile"
              label="Mobile"
              name="mobile"
              value={currentEditData.mobile}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              id="pincode"
              label="Pincode"
              name="pincode"
              value={currentEditData.pincode}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              id="age"
              label="Age"
              name="age"
              value={currentEditData.age}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              id="height"
              label="Height"
              name="height"
              value={currentEditData.height}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              id="weight"
              label="Weight"
              name="weight"
              value={currentEditData.weight}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              id="gender"
              label="Gender"
              name="gender"
              value={currentEditData.gender}
              onChange={handleChange}
            />
            <Button variant="contained" color="primary" onClick={handleSave} sx={{ mt: 2 }}>
              Save
            </Button>
          </Box>
        </FadeInModal>
      )}
    </Box>
  );
};

export default CanopyData;
