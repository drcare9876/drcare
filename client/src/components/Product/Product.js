import React, { useState, useEffect } from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ProductCard from './ProductCard';
import { useCart } from '../Context/CartContext';

const alphabets = ['All', 'A', 'B', 'C', 'D'];
const pageSize = 8; // 2 rows with 4 columns each

const Product = ({ onCartClick }) => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [selectedAlphabet, setSelectedAlphabet] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await fetch('http://localhost:4000/api/v1/getMedicine');
        const response = await fetch('https://drcare-iip8.onrender.com/api/v1/getMedicine');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    // Ensure mrp is handled as a string if needed
    const productWithFormattedMrp = { ...product, mrp: `₹${product.mrp}` };
    addToCart(productWithFormattedMrp);
    onCartClick();
  };

  const categories = [...new Set(products.map((product) => product.tags[0]))];

  const filteredProducts = products.filter((product) => {
    const matchesAlphabet =
      selectedAlphabet === 'All' || product.tags[0].startsWith(selectedAlphabet);
    const matchesCategory =
      selectedCategory === 'All' || product.tags[0] === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesAlphabet && matchesCategory && matchesSearch;
  });

  const filteredCategories = categories.filter((category) =>
    selectedAlphabet === 'All' ? true : category.startsWith(selectedAlphabet)
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const totalPages = Math.ceil(filteredProducts.length / pageSize);

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            Our latest&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              products
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            Explore our cutting-edge dashboard, delivering high-quality solutions
            tailored to your needs. Elevate your experience with top-tier features
            and services.
          </Typography>
        </Stack>

        <Box sx={{ display: 'flex', gap: 2, mt: 4, mb: 2 }}>
          <TextField
            select
            label="Alphabet"
            value={selectedAlphabet}
            onChange={(e) => setSelectedAlphabet(e.target.value)}
            sx={{ minWidth: 120 }}
          >
            {alphabets.map((alphabet) => (
              <MenuItem key={alphabet} value={alphabet}>
                {alphabet}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            sx={{ minWidth: 120 }}
          >
            <MenuItem value="All">All</MenuItem>
            {filteredCategories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ minWidth: 240 }}
          />
        </Box>

        <Grid container spacing={2} justifyContent="center">
          {paginatedProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ProductCard
                name={product.name}
                mrp={product.mrp}
                brand={product.brand}
                image_src={product.image}
                addToCart={() => handleAddToCart(product)}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              disabled={currentPage === index + 1}
              style={{
                margin: '0 5px',
                padding: '10px 15px',
                cursor: currentPage === index + 1 ? 'default' : 'pointer',
                backgroundColor: currentPage === index + 1 ? '#1976d2' : '#f0f0f0',
                color: currentPage === index + 1 ? '#fff' : '#000',
                border: 'none',
                borderRadius: '4px',
              }}
            >
              {index + 1}
            </button>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Product;
