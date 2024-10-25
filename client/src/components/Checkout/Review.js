import * as React from 'react';
import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';
import { useCart } from '../Context/CartContext';

export default function Review({ formData, medicineData }) {
  const { firstName, lastName, address1, city, pincode, mobile, altMobile, email } = formData;
  const { cartCount, totalAmount, cart } = useCart();

  console.log("formdata", formData);
  console.log("data", medicineData);
  console.log(cart);

  const handlePlaceOrder = async () => {
    const orderData = {
      firstName,
      lastName,
      country: 'India',  // Update with the appropriate country value
      state: 'West Bengal',  // Update with the appropriate state value
      city,
      pincode,
      address: address1,
      mobile,
      altMobile,
      email,
      items: cart.map(item => ({
        name: item.name,
        quantity: item.quantity,
        image: item.image,
        price: parseFloat(item.mrp.replace('₹', ''))
      })),
      orderItems: medicineData.rows.map(row => ({
        serialNo: row.serialNo,
        name: row.name,
        quantity: row.quantity
      })),
      prescriptionImg: medicineData.prescriptionUrl,
      applyPrescription: medicineData.noPrescription,
      totalAmount: parseFloat(totalAmount) + 9.99
    };

    try {
      // const response = await fetch('http://localhost:4000/api/v1/placeorder', {
        const response = await fetch('https://drcare-iip8.onrender.com/api/v1/placeorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Order placed successfully:', data);

        Swal.fire({
          title: 'Order Placed Successfully!',
          text: 'Your order has been placed successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/product';
          }
        });
      } else {
        console.error('Failed to place order');
        Swal.fire({
          title: 'Order Failed',
          text: 'There was an issue placing your order. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      console.error('Error placing order:', error);
      Swal.fire({
        title: 'Order Failed',
        text: 'There was an issue placing your order. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <Stack spacing={2}>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Products" secondary={`${cartCount} selected`} />
          <Typography variant="body2" style={{ color: "black" }}>Rs. {totalAmount}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Shipping" secondary="Plus taxes" />
          <Typography variant="body2" style={{ color: "black" }}>Rs. 9.99</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Rs{parseFloat(totalAmount) + 9.99}
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <Stack
        direction="column"
        divider={<Divider flexItem />}
        spacing={2}
        sx={{ my: 2 }}
      >
        <div>
          <Typography variant="subtitle4" gutterBottom>
            Shipment details
          </Typography>
          <Typography color="text.secondary" gutterBottom>Name: {`${firstName} ${lastName}`}</Typography>
          <Typography color="text.secondary" gutterBottom>
            Address: {address1}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            City: {city}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            Pincode: {pincode}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            {`Mobile: ${mobile}`}
          </Typography>
          {altMobile && (
            <Typography color="text.secondary" gutterBottom>
              {`Alternate Mobile: ${altMobile}`}
            </Typography>
          )}
          <Typography color="text.secondary" gutterBottom>
            {`Email: ${email}`}
          </Typography>
        </div>
      </Stack>
      <Button variant="contained" color="primary" onClick={handlePlaceOrder} style={{backgroundColor:'#1e6460'}}>
        Place Order
      </Button>
    </Stack>
  );
}

Review.propTypes = {
  formData: PropTypes.object.isRequired,
  medicineData: PropTypes.shape({
    cart: PropTypes.arrayOf(PropTypes.object).isRequired,
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        serialNo: PropTypes.string,
        name: PropTypes.string,
        quantity: PropTypes.number,
      })
    ).isRequired,
    prescriptionUrl: PropTypes.string,
    noPrescription: PropTypes.bool,
  }).isRequired,
};
