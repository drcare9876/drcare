import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import { red } from '@mui/material/colors';
import InfoIcon from '@mui/icons-material/Info';
import ProductDetailsModal from '../Modals/ProductDetailsModal';
import './Card.css';
import { FaCartPlus } from "react-icons/fa";

const AnimatedIconButton = styled(IconButton)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'rotate(20deg)',
  },
}));

const ProductCard = ({ name, mrp, brand, image_src, description, addToCart, tags }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const discountedPrice = (mrp * 0.79).toFixed(2); // Reducing 21% from MRP

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const productDetails = {
    name,
    mrp,
    brand,
    image: image_src,
    description,
    tags
  };

    // Truncate the title to the first 50 characters
    const truncateTitle = (title) => {
      return title.length > 20 ? title.substring(0, 20) + '...' : title;
    };

  return (
    <Card sx={{ maxWidth: 200, height: 350 }} style={{ borderRadius: 20 }}>
      <CardHeader
         title={truncateTitle(name)}
        subheader={
          <>
            {/* <div style={{ backgroundColor: '#F3F7FB', color: '#24AEB1', borderRadius: 20, padding: 5, display: 'inline-block' }}>
              {brand}
            </div> */}
            <div style={{ backgroundColor: '#F3F7FB', color: '#24AEB1', borderRadius: 20, padding: 5, display: 'inline-block' }}>
              {tags}
            </div>
          </>
        }
        titleTypographyProps={{
          variant: 'h6',
          fontSize: '15px',
          fontFamily: 'Arial, sans-serif',
        }}
        subheaderTypographyProps={{ variant: 'subtitle2', fontSize: '12px', fontFamily: 'Arial, sans-serif' }}
      />
      <CardMedia
        component="img"
        height="140"
        image={image_src}
        alt={name}
      />
      <CardContent sx={{ padding: '8px' }}>
        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Arial, sans-serif', color: 'black', fontSize: 16 }}>
          {`₹${mrp}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: 'space-between', padding: '8px 16px' }}>
        <button className="cart-button" onClick={addToCart}>
          {/* <svg
            className="cart-icon"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg> */}
          <FaCartPlus style={{fontSize:'15' }}/>
          <span>Add to cart</span>
        </button>
        <AnimatedIconButton onClick={handleModalOpen} color="primary" aria-label="see details">
          <InfoIcon />
        </AnimatedIconButton>
      </CardActions>
      <ProductDetailsModal open={modalOpen} onClose={handleModalClose} product={productDetails} />
    </Card>
  );
};

export default ProductCard;
