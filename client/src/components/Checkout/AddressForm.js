import * as React from 'react';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AddressForm({ formData, setFormData }) {
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setCity(selectedCity);
    setPincode(''); // Reset pincode when city changes
    setFormData({ ...formData, city: selectedCity, pincode: '' });
  };

  const handlePincodeChange = (event) => {
    const selectedPincode = event.target.value;
    setPincode(selectedPincode);
    setFormData({ ...formData, pincode: selectedPincode });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const pincodes = {
    Howrah: ['711101', '711102', '711103', '711104'],
    Kolkata: ['711311', '711312', '711313', '711314'],
    Shibpur: ['700001', '700002'],
  };

  return (
    <Grid container spacing={3}>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="first-name" required>
          First name
        </FormLabel>
        <OutlinedInput
          id="first-name"
          name="firstName"
          type="text"
          placeholder="John"
          autoComplete="first-name"
          required
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="last-name" required>
          Last name
        </FormLabel>
        <OutlinedInput
          id="last-name"
          name="lastName"
          type="text"
          placeholder="Snow"
          autoComplete="last-name"
          required
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="country" required>
          Country
        </FormLabel>
        <Select
          id="country"
          name="country"
          value="India"
          required
          displayEmpty
        >
          <MenuItem value="India">India</MenuItem>
        </Select>
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="state" required>
          State
        </FormLabel>
        <Select
          id="state"
          name="state"
          value="West Bengal"
          required
          displayEmpty
        >
          <MenuItem value="West Bengal">West Bengal</MenuItem>
        </Select>
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="city" required>
          City
        </FormLabel>
        <Select
          id="city"
          name="city"
          value={city}
          onChange={handleCityChange}
          required
          displayEmpty
        >
          <MenuItem value="" disabled>
            Select City
          </MenuItem>
          <MenuItem value="Howrah">Howrah</MenuItem>
          <MenuItem value="Shibpur">Shibpur</MenuItem>
          <MenuItem value="Kolkata">Kolkata</MenuItem>
        </Select>
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="zip" required>
          Zip / Postal code
        </FormLabel>
        <Select
          id="zip"
          name="zip"
          value={pincode}
          onChange={handlePincodeChange}
          required
          displayEmpty
        >
          <MenuItem value="" disabled>
            Select Pincode
          </MenuItem>
          {pincodes[city]?.map((code) => (
            <MenuItem key={code} value={code}>
              {code}
            </MenuItem>
          ))}
        </Select>
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="address1" required>
          Address line 1
        </FormLabel>
        <OutlinedInput
          id="address1"
          name="address1"
          type="text"
          placeholder="Street name and number"
          autoComplete="shipping address-line1"
          required
          value={formData.address1}
          onChange={handleInputChange}
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="mobile" required>
          Mobile number
        </FormLabel>
        <OutlinedInput
          id="mobile"
          name="mobile"
          type="tel"
          placeholder="1234567890"
          autoComplete="mobile"
          required
          value={formData.mobile}
          onChange={handleInputChange}
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="altMobile">Alternate mobile</FormLabel>
        <OutlinedInput
          id="altMobile"
          name="altMobile"
          type="tel"
          placeholder="0987654321"
          autoComplete="alt-mobile"
          value={formData.altMobile}
          onChange={handleInputChange}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="email" required>
          Email
        </FormLabel>
        <OutlinedInput
          id="email"
          name="email"
          type="email"
          placeholder="john.snow@example.com"
          autoComplete="email"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
      </FormGrid>
    </Grid>
  );
}
