import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Swal from 'sweetalert2';
import { useCart } from '../Context/CartContext';

function Info({ medicineData, setMedicineData }) {
  const { cart } = useCart();

  const [rows, setRows] = useState(medicineData.rows);
  const [prescription, setPrescription] = useState(medicineData.prescription);
  const [prescriptionUrl, setPrescriptionUrl] = useState(medicineData.prescriptionUrl);
  const [noPrescription, setNoPrescription] = useState(medicineData.noPrescription);
  
  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.mrp.replace('₹', '')) * item.quantity,
    0
  ).toFixed(2);

  const handleAddRow = () => {
    const newRows = [...rows, { serialNo: '', name: '', quantity: 1 }];
    setRows(newRows);
    setMedicineData({ ...medicineData, rows: newRows });
  };

  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
    setMedicineData({ ...medicineData, rows: newRows });
  };

  const handleRemoveRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
    setMedicineData({ ...medicineData, rows: newRows });
  };

  // const handleFileChange = async (event) => {
  //   const file = event.target.files[0];
  //   if (!file) return;

  //   const formData = new FormData();
  //   formData.append('photo', file);

  //   try {
  //     // const response = await fetch('https://drcare-one.vercel.app/api/v1/prescription/upload', {
  //       const response = await fetch('http://localhost:4000/api/v1/prescription/upload', {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     if (response.ok) {
  //       const photoUrl = await response.json();
  //       setPrescriptionUrl(photoUrl);
  //       setPrescription(file); // Save the file info
  //       setMedicineData({ ...medicineData, prescriptionUrl: photoUrl, prescription: file });
  //     } else {
  //       console.error('Failed to upload the prescription');
  //     }
  //   } catch (error) {
  //     console.error('Error uploading the prescription:', error);
  //   }
  // };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('photo', file);

    Swal.fire({
      title: 'Uploading Prescription...',
      text: 'Please wait...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await fetch('http://localhost:4000/api/v1/prescription/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const photoUrl = await response.json();
              setPrescriptionUrl(photoUrl);
              setPrescription(file);  
              setMedicineData({ ...medicineData, prescriptionUrl: photoUrl, prescription: file });
        Swal.fire({
          icon: 'success',
          title: 'Uploaded Successfully!',
          showConfirmButton: false,
          timer: 1000, 
          timerProgressBar: true
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed to upload the prescription',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error uploading the prescription',
        text: 'Please try again.',
      });
    }
};



  const handleToggleNoPrescription = (event) => {
    const newNoPrescription = event.target.checked;
    setNoPrescription(newNoPrescription);
    setMedicineData({ ...medicineData, noPrescription: newNoPrescription });
  };

  const handleQuantityChange = (index, increment) => {
    const newRows = [...rows];
    newRows[index].quantity += increment;
    if (newRows[index].quantity < 1) newRows[index].quantity = 1;
    setRows(newRows);
    setMedicineData({ ...medicineData, rows: newRows });
  };

  useEffect(() => {
    // Function to handle form submission
    const handleSubmit = async () => {
      const updatedMedicineData = {
        cart,
        rows,
        prescriptionImg: prescriptionUrl,
        noPrescription,
      };

      console.log('Form data to be submitted:', updatedMedicineData);
    };

    handleSubmit();
  }, [cart, rows, prescriptionUrl, noPrescription]);

  return (
    <React.Fragment>
      <Typography variant="subtitle2" color="text.secondary">
        Total
      </Typography>
      <Typography variant="h4" gutterBottom>
        ₹{totalPrice}
      </Typography>
      <List disablePadding>
        {cart.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: 50, height: 50, marginRight: 10 }}
            />
            <ListItemText
              sx={{ mr: 2 }}
              primary={product.name}
              secondary={`Quantity: ${product.quantity}`}
            />
            <Typography variant="body1" fontWeight="medium" style={{ color: 'black' }}>
              ₹{(parseFloat(product.mrp.replace('₹', '')) * product.quantity).toFixed(2)}
            </Typography>
          </ListItem>
        ))}
      </List>

      <Typography variant="h6" gutterBottom>
        Upload Prescription / Apply for Prescription
      </Typography>
      <Button variant="contained" component="label">
        Upload Prescription
        <input type="file" hidden onChange={handleFileChange} />
      </Button>
      {prescription && <Typography variant="body2">{prescription.name}</Typography>}
      {prescriptionUrl && (
        <div>
          <Typography variant="body2">Uploaded Prescription:</Typography>
          <img src={prescriptionUrl} alt="Prescription" style={{ width: '100%', marginTop: 10 }} />
        </div>
      )}

      <FormControlLabel
        control={<Switch checked={noPrescription} onChange={handleToggleNoPrescription} />}
        label="I don't have a prescription"
      />
      {noPrescription && <Typography variant="body2" color="error">Please note that having a prescription is recommended for proper medication guidance.</Typography>}

      <Typography variant="h6" gutterBottom style={{ marginTop: 20 }}>
        Medicines
      </Typography>
      {rows.map((row, index) => (
        <ListItem key={index} sx={{ py: 1, px: 0, flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', width: '100%', marginBottom: 10 }}>
            <TextField
              label="Serial No."
              variant="outlined"
              size="small"
              value={row.serialNo}
              onChange={(e) => handleInputChange(index, 'serialNo', e.target.value)}
              sx={{ mr: 2, width: '20%' }}
            />
            <TextField
              label="Name of Product"
              variant="outlined"
              size="small"
              value={row.name}
              onChange={(e) => handleInputChange(index, 'name', e.target.value)}
              sx={{ flex: 1, mr: 2 }}
            />
            <IconButton
              aria-label="delete"
              onClick={() => handleRemoveRow(index)}
              sx={{ alignSelf: 'center' }}
            >
              <DeleteIcon />
            </IconButton>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              aria-label="decrease quantity"
              onClick={() => handleQuantityChange(index, -1)}
            >
              <RemoveIcon />
            </IconButton>
            <TextField
              label="Quantity"
              variant="outlined"
              size="small"
              value={row.quantity}
              onChange={(e) => handleInputChange(index, 'quantity', parseInt(e.target.value) || 1)}
              sx={{ width: '100px', textAlign: 'center', mx: 1 }}
              inputProps={{ style: { textAlign: 'center' } }}
            />
            <IconButton
              aria-label="increase quantity"
              onClick={() => handleQuantityChange(index, 1)}
            >
              <AddIcon />
            </IconButton>
          </div>
        </ListItem>
      ))}
      {rows.length === 0 && (
        <Typography variant="body2" gutterBottom>
          Click on "Add More" to add medicines.
        </Typography>
      )}
      <Button
        startIcon={<AddCircleOutlineIcon />}
        onClick={handleAddRow}
        style={{ marginTop: 10 }}
      >
        Add More
      </Button>
    </React.Fragment>
  );
}

Info.propTypes = {
  medicineData: PropTypes.shape({
    cart: PropTypes.arrayOf(PropTypes.object).isRequired,
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        serialNo: PropTypes.string,
        name: PropTypes.string,
        quantity: PropTypes.number,
      })
    ),
    prescription: PropTypes.object,
    prescriptionUrl: PropTypes.string,
    noPrescription: PropTypes.bool,
  }).isRequired,
  setMedicineData: PropTypes.func.isRequired,
  totalPrice: PropTypes.string.isRequired,
};

export default Info;
