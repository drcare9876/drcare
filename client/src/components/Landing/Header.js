import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SpaIcon from '@mui/icons-material/Spa';
import ScienceIcon from '@mui/icons-material/Science';
import FaceIcon from '@mui/icons-material/Face';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CategoryIcon from '@mui/icons-material/Category';
import StoreIcon from '@mui/icons-material/Store';

const Header = () => {
    const sections = [
        { title: 'Medicine', url: '#', Icon: LocalHospitalIcon },
        { title: 'Wellness', url: '#', Icon: SpaIcon },
        { title: 'Lab Tests', url: '#', Icon: ScienceIcon },
        { title: 'Beauty', url: '#', Icon: FaceIcon },
        { title: 'Health Corner', url: '#', Icon: FitnessCenterIcon },
        { title: 'Generic', url: '#', Icon: CategoryIcon },
        { title: 'Our Brand', url: '#', Icon: StoreIcon },
    ];

    const iconStyle = {
        width: 24,
        height: 24,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block',
        color:'purple',
    };

    return (
        <Toolbar
            component="nav"
            variant="dense"
            sx={{
                width: '100%', // ensure the Toolbar takes up 100% of its parent width
                display: 'flex',
                justifyContent: 'space-between',
                overflowX: 'auto', // allow horizontal scrolling on small screens
                '& a': {
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    p: 1,
                    flexShrink: 0,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.1)',
                    }
                }
            }}
        >
            {sections.map((section) => (
                <Link
                    key={section.title}
                    href={section.url}
                >
                    <section.Icon sx={iconStyle} />
                    <Typography variant="body2" style={{ color: 'black' }}>{section.title}</Typography>
                </Link>
            ))}
        </Toolbar>
    );
}

Header.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            Icon: PropTypes.elementType.isRequired,
        }),
    ).isRequired,
};

export default Header;
