import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Typography } from '@mui/material';

export default function FloatingActionButtonExtendedSize() {
  const [showButton, setShowButton] = React.useState(false);
  const [lastScrollTop, setLastScrollTop] = React.useState(0);

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset;
    if (currentScrollTop > lastScrollTop && currentScrollTop > 400) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
    setLastScrollTop(currentScrollTop <= 400 ? 400 : currentScrollTop); 
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {showButton && (
        <Box sx={{ position: 'fixed', bottom: 32, right: 32, zIndex: 1000 }}>
          <Fab 
            variant="extended" 
            sx={{ 
              color: "#000", 
              backgroundColor: 'var(--accent-emerald)',
              fontWeight: 700,
              boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)",
              "&:hover": { backgroundColor: "#059669" }
            }}
            onClick={() => scrollToSection("home")}
          >
            <NavigationIcon sx={{ mr: 1 }} />
            <Typography sx={{ fontSize: "0.8rem", fontWeight: 700 }}>TOP</Typography>
          </Fab>
        </Box>
      )}
    </>
  );
}
