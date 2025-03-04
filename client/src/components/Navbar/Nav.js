import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import {
  Box,
  AppBar,
  Toolbar,
  Container,
  Divider,
  Typography,
  MenuItem,
  Drawer,
  Badge,
  Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const logoStyle = {
  width: '40px',
  height: '40px',
  cursor: 'pointer',
};

const Nav = ({ mode, toggleColorMode, onCartClick }) => {
  const [open, setOpen] = React.useState(false);
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <img
                src={
                  'https://res.cloudinary.com/dofhvhvnf/image/upload/v1728107310/Aseets/drlogo-removebg-preview_m95rx5.png'
                }
                style={logoStyle}
                alt="Dr.Care"
                onClick={handleLogoClick}
              />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <a
                  onClick={handleAboutClick}
                  href='/about'
                  className='py-[6px] px-[12px] hover:bg-gray-300/30'
                >
                  <Typography variant="body2" color="text.primary">
                    About Us
                  </Typography>
                </a>
                <a href='/#testimonials' className='py-[6px] px-[12px] hover:bg-gray-300/30'><Typography variant="body2" color="text.primary">
                  Testimonials
                </Typography></a>
                <a href='/#features' className='py-[6px] px-[12px] hover:bg-gray-300/30'><Typography variant="body2" color="text.primary">
                  Features
                </Typography></a>
                <a href='/#highlights' className='py-[6px] px-[12px] hover:bg-gray-300/30'><Typography variant="body2" color="text.primary">
                  Highlights
                </Typography></a>
                <a href='/#faq' className='py-[6px] px-[12px] hover:bg-gray-300/30'><Typography variant="body2" color="text.primary">
                  FAQ
                </Typography></a>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              {/* <Button
                color="primary"
                variant="text"
                size="small"
                onClick={handleSignInClick}
              >
                Sign in
              </Button>
              <Button
                color="primary"
                variant="contained"
                size="small"
                onClick={handleSignUpClick}
              >
                Sign up
              </Button> */}
              <Badge badgeContent={cartCount} color="error" onClick={onCartClick}>
                <ShoppingCartIcon sx={{ cursor: 'pointer', color: '#1e6460' }} />
              </Badge>
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                  </Box>
                  <MenuItem onClick={handleAboutClick}>About Us</MenuItem>
                  <MenuItem onClick={() => scrollToSection('features')}>
                    Features
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('testimonials')}>
                    Testimonials
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('highlights')}>
                    Highlights
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('faq')}>FAQ</MenuItem>
                  <Divider />
                  {/* <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={handleSignUpClick}
                      sx={{ width: '100%' }}
                    >
                      Sign up
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      onClick={handleSignInClick}
                      sx={{ width: '100%' }}
                    >
                      Sign in
                    </Button>
                  </MenuItem> */}
                  <MenuItem>
                    <Badge badgeContent={cartCount} color="error" onClick={onCartClick}>
                      <ShoppingCartIcon sx={{ cursor: 'pointer', color: '#1e6460' }} />
                    </Badge>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Nav;
