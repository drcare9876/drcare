import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import AddressForm from './AddressForm';
import Info from './Info';
import Review from './Review';
import { useCart } from '../Context/CartContext';

import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const steps = ['Shipping address', 'Review your order'];

function getStepContent(step, formData, medicineData, setMedicineData) {
  switch (step) {
    case 0:
      return <AddressForm formData={formData} setFormData={formData.setFormData} />;
    case 1:
      return <Review formData={formData} medicineData={medicineData} setMedicineData={setMedicineData} />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    address1: '',
    city: '',
    pincode: '',
    mobile: '',
    altMobile: '',
    email: ''
  });

  const { cart } = useCart();

  const [medicineData, setMedicineData] = React.useState({
    cart: cart,
    rows: [{ serialNo: '', name: '', quantity: 1 }],
    prescriptionUrl: '',
    noPrescription: false,
  });

  // Function to check if all required fields are filled and notify specifically
  const validateForm = () => {
    const { firstName, lastName, address1, city, pincode, mobile } = formData;
    const missingFields = [];

    if (!firstName) missingFields.push('First Name');
    if (!lastName) missingFields.push('Last Name');
    if (!address1) missingFields.push('Address Line 1');
    if (!city) missingFields.push('City');
    if (!pincode) missingFields.push('Pincode');
    if (!mobile) missingFields.push('Mobile Number');

    if (missingFields.length > 0) {
      toast.success(`Please fill the following fields: ${missingFields.join(', ')}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return false;
    }

    return true;
  };

  const handleNext = () => {
    if (activeStep === 0 && !validateForm()) {
      return; // Stop the flow if validation fails
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <ToastContainer /> {/* This will display the toast */}
      <Grid container sx={{ height: { xs: '100%', sm: '100dvh' } }}>
        <Grid
          item
          xs={12}
          sm={5}
          lg={4}
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            backgroundColor: 'background.paper',
            borderRight: { sm: 'none', md: '1px solid' },
            borderColor: { sm: 'none', md: 'divider' },
            alignItems: 'start',
            pt: 4,
            px: 10,
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'end',
              height: 150,
            }}
          >
            <Button
              startIcon={<ArrowBackRoundedIcon />}
              component="a"
              href="/product"
              sx={{ ml: '-8px' }}
              style={{ color: '#1e6460' }}
            >
              Back to
              <img
                src={'https://res.cloudinary.com/dofhvhvnf/image/upload/v1727879112/Aseets/drlogo_bwqlsn.png'}
                alt="Dr. Care"
                style={{ width: '40px', height: '40px', marginLeft: '4px', marginRight: '-8px' }}
              />
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              width: '100%',
              maxWidth: 500,
            }}
          >
            <Info medicineData={medicineData} setMedicineData={setMedicineData} />
          </Box>
        </Grid>
        <Grid
          item
          sm={12}
          md={7}
          lg={8}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',
            width: '100%',
            backgroundColor: { xs: 'transparent', sm: 'background.default' },
            alignItems: 'start',
            pt: { xs: 2, sm: 4 },
            px: { xs: 2, sm: 10 },
            pb: { xs: 20 }, // Add padding to avoid overlap with the footer
            gap: { xs: 4, md: 'none' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: { sm: 'space-between', md: 'flex-end' },
              alignItems: 'center',
              width: '100%',
              maxWidth: { sm: '100%', md: 600 },
            }}
          >
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <Button
                startIcon={<ArrowBackRoundedIcon />}
                component="a"
                href="/material-ui/getting-started/templates/landing-page/"
                sx={{ alignSelf: 'start' }}
              >
                Back to
                <img
                  src={'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'}
                  alt="Sitemark's logo"
                  style={{ width: '40px', height: '40px', marginLeft: '4px', marginRight: '-8px' }}
                />
              </Button>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexGrow: 1,
                height: 150,
              }}
            >
              <Stepper
                id="desktop-stepper"
                activeStep={activeStep}
                sx={{
                  width: '100%',
                  height: 40,
                }}
              >
                {steps.map((label) => (
                  <Step
                    sx={{
                      ':first-child': { pl: 0 },
                      ':last-child': { pr: 0 },
                    }}
                    key={label}
                  >
                    <StepLabel style={{ color: '#1e6460' }}>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              width: '100%',
              maxWidth: { sm: '100%', md: 600 },
              maxHeight: '720px',
              gap: { xs: 5, md: 'none' },
            }}
          >
            <React.Fragment>
              {getStepContent(activeStep, { ...formData, setFormData }, medicineData, setMedicineData)}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column-reverse', sm: 'row' },
                  justifyContent: activeStep !== 0 ? 'space-between' : 'flex-end',
                  alignItems: 'end',
                  flexGrow: 1,
                  gap: 1,
                  pb: { xs: 12, sm: 0 },
                  mt: { xs: 2, sm: 0 },
                  mb: '60px',
                }}
              >
                {activeStep !== 0 && (
                  <Button
                    startIcon={<ChevronLeftRoundedIcon />}
                    onClick={handleBack}
                    variant="text"
                    sx={{
                      display: { xs: 'none', sm: 'flex' },
                    }}
                    style={{ color: '#1e6460' }}
                  >
                    Previous
                  </Button>
                )}

                {activeStep !== 0 && (
                  <Button
                    startIcon={<ChevronLeftRoundedIcon />}
                    onClick={handleBack}
                    variant="outlined"
                    fullWidth
                    sx={{
                      display: { xs: 'flex', sm: 'none' },
                    }}
                    style={{ backgroundColor: '#1e6460' }}
                  >
                    Previous
                  </Button>
                )}

                {activeStep !== steps.length - 1 && (
                  <Button
                    variant="contained"
                    endIcon={<ChevronRightRoundedIcon />}
                    onClick={handleNext}
                    sx={{
                      width: { xs: '100%', sm: 'fit-content' },
                    }}
                    style={{ backgroundColor: '#1e6460' }}
                  >
                    Next
                  </Button>
                )}
              </Box>
            </React.Fragment>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

Checkout.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
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
  setMedicineData: PropTypes.func.isRequired,
};
