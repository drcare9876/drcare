import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import ProductCard from './ProductCard';
import { useCart } from '../Context/CartContext';

const alphabets = ['All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const pageSize = 16; // 4 rows with 4 columns each

const Product = ({ onCartClick }) => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedAlphabet, setSelectedAlphabet] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const MySwal = withReactContent(Swal);

  useEffect(() => {
    const fetchProducts = async () => {
      MySwal.fire({
        title: 'Loading...',
        text: 'Please wait while we load the products.',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      try {
        const response = await fetch('https://drcare-iip8.onrender.com/api/v1/getMedicine');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        Swal.close();
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const productWithFormattedMrp = { ...product, mrp: `₹${product.mrp}` };
    addToCart(productWithFormattedMrp);
    onCartClick();
  };

  const tags = [...new Set(products.map((product) => product.tags[0]))];
  const brands = [...new Set(products
    .filter((product) => selectedTag === 'All' || product.tags.includes(selectedTag))
    .map((product) => product.brand))];

  const filteredProducts = products.filter((product) => {
    const matchesTag = selectedTag === 'All' || product.tags.includes(selectedTag);
    const matchesAlphabet = selectedAlphabet === 'All' || product.brand.startsWith(selectedAlphabet);
    const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
    const matchesSearch = product.name && product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesAlphabet && matchesBrand && matchesSearch;
  });

  const filteredBrands = brands.filter((brand) =>
    selectedAlphabet === 'All' ? true : brand.startsWith(selectedAlphabet)
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const totalPages = Math.ceil(filteredProducts.length / pageSize);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

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

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mt: 4, mb: 2 }}>
          <TextField
            select
            label="Tag"
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            sx={{ minWidth: 240 }}
          >
            <MenuItem value="All">All</MenuItem>
            {tags.map((tag) => (
              <MenuItem key={tag} value={tag}>
                {tag}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Alphabet"
            value={selectedAlphabet}
            onChange={(e) => setSelectedAlphabet(e.target.value)}
            sx={{ minWidth: 240 }}
          >
            {alphabets.map((alphabet) => (
              <MenuItem key={alphabet} value={alphabet}>
                {alphabet}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Brand"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            sx={{ minWidth: 240 }}
          >
            <MenuItem value="All">All</MenuItem>
            {filteredBrands.map((brand) => (
              <MenuItem key={brand} value={brand}>
                {brand}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box sx={{ mt: 2, mb: 4, width: '100%', display: 'flex', justifyContent: 'center' }}>
          <TextField
            label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ minWidth: '65%' }}
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
                description={product.description}
                addToCart={() => handleAddToCart(product)}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            siblingCount={1}
            boundaryCount={1}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Product;
