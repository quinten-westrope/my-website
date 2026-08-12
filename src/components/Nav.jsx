import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const ACCENT = '#0f62fe'; // IBM Blue
const FONT = '"IBM Plex Sans", sans-serif';

const Nav = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [scrolled, setScrolled] = React.useState(!isHome);

    React.useEffect(() => {
        if (!isHome) {
            setScrolled(true);
            return;
        }

        const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.75);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome]);

    const linkStyle = (active) => ({
        color: active ? ACCENT : (scrolled ? '#525252' : 'rgba(255,255,255,0.85)'),
        fontFamily: FONT,
        fontSize: '0.9rem',
        fontWeight: 600,
        textDecoration: 'none',
        transition: 'color 0.2s ease',
        '&:hover': { color: ACCENT },
    });

    return (
        <Box sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 4,
            px: { xs: 3, md: 6 },
            py: 2.5,
            backgroundColor: scrolled ? 'rgba(255,255,255,0.85)' : 'transparent',
            backdropFilter: scrolled ? 'blur(6px)' : 'none',
            boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.06)' : 'none',
            transition: 'background-color 0.25s ease, box-shadow 0.25s ease',
        }}>
            <Typography component={Link} to="/" sx={linkStyle(location.pathname === '/')}>
                Home
            </Typography>
            <Typography component={Link} to="/journal" sx={linkStyle(location.pathname.startsWith('/journal'))}>
                Journal
            </Typography>
        </Box>
    );
};

export default Nav;
