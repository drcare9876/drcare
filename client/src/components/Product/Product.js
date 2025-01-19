import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Pagination from "@mui/material/Pagination";
import { ProductCard } from "./ProductCard.jsx";
import { useCart } from "../Context/CartContext";
import "./Card.css";
import { VideoDialog } from "./Video.jsx";

const pageSize = 12;  

const Product = ({ onCartClick }) => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const MySwal = withReactContent(Swal);

  const API_HOST = "https://drcare-iip8.onrender.com";
  const LOCAL_HOST = "http://localhost:4000";

  const fetchProducts = async (page, query = "") => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_HOST}/api/v1/getMedicine/${page}?search=${query}`
      );
      const data = await response.json();
      setProducts(data.data);
      setTotalPages(data.meta.totalPages);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchProducts(currentPage, searchQuery);
    }, 500); // Add a debounce delay of 500ms to optimize API calls

    return () => clearTimeout(delayDebounceFn); // Cleanup timeout on every query change
  }, [searchQuery, currentPage]);

  const handleAddToCart = (product) => {
    const productWithFormattedMrp = { ...product, mrp: `₹${product.mrp}` };
    addToCart(productWithFormattedMrp);
    onCartClick();
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3.5rem, 10vw, 4rem)",
              color: "#1e6460",
            }}
          >
            All Medicines
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            Explore our user-friendly platform, offering fast and reliable
            medicine delivery tailored to your health needs.
          </Typography>
        </Stack>

        {loading ? (
          <section className="loader">
            <div className="slider" style={{ "--i": 0 }}></div>
            <div className="slider" style={{ "--i": 1 }}></div>
            <div className="slider" style={{ "--i": 2 }}></div>
            <div className="slider" style={{ "--i": 3 }}></div>
            <div className="slider" style={{ "--i": 4 }}></div>
          </section>
        ) : (
          <>
            <Box
              sx={{
                mt: 2,
                mb: 4,
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              className="gap-2"
            >
              <TextField
                label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ minWidth: "65%" }}
              />

              <VideoDialog />
            </Box>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard
                  product={product}
                  key={product._id}
                  handleAddToCart={() => handleAddToCart(product)}
                />
              ))}
            </div>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 4,
              }}
            >
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                siblingCount={1}
                boundaryCount={1}
                disabled={totalPages <= 1}
              />
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
};

export default Product;
