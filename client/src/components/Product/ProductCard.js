import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Avatar, Button, IconButton } from '@mui/material';
import { red } from '@mui/material/colors';
import InfoIcon from '@mui/icons-material/Info';
import ProductDetailsModal from '../Modals/ProductDetailsModal';
import { AddShoppingCart } from '@mui/icons-material';

const SolidButton = styled(Button)(({ theme }) => ({
  background: '#FF3B30',
  border: 0,
  borderRadius: 0,
  boxShadow: 'none',
  color: 'white',
  height: 40,
  padding: '0 20px',
  transition: 'all 0.5s ease-in-out',
  '&:hover': {
    background: '#e0352b',
    boxShadow: 'none',
  },
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 20px',
  transition: 'all 0.5s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 5px 7px 2px rgba(255, 105, 135, .5)',
  },
}));

const AnimatedIconButton = styled(IconButton)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'rotate(20deg)',
  },
}));

const ProductCard = ({ name, mrp, brand, image_src, description, addToCart }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const discountedPrice = (mrp * 0.79).toFixed(2); // Reducing 21% from MRP

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const productDetails = {
    name,
    mrp,
    brand,
    image: image_src,
    description
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {brand ? brand[0] : ''}
          </Avatar>
        }
        title={name}
        subheader={brand}
      />
      <CardMedia
        component="img"
        height="194"
        image={image_src}
        alt={name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
          {`₹${mrp}`}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {`₹${discountedPrice}`} <span style={{ color: red[500] }}>(21% off)</span>
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: 'space-between', px: 2 }}>
        {/* <GradientButton onClick={addToCart}>
          Add to Cart
        </GradientButton> */}
        <SolidButton onClick={addToCart}>
          ADD TO CART&nbsp;{`₹${discountedPrice}`} 
        </SolidButton>
        <AnimatedIconButton onClick={handleModalOpen} color="primary" aria-label="see details">
          <InfoIcon />
        </AnimatedIconButton>
      </CardActions>
      <ProductDetailsModal open={modalOpen} onClose={handleModalClose} product={productDetails} />
    </Card>
  );
};

export default ProductCard;
