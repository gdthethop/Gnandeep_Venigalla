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
        <Box sx={{ '& > :not(style)': { m: 1 }, position: 'fixed', bottom: 16, right: 16 }}>
          <Fab 
            variant="extended" 
            style={{ color: "#fceed1e0", backgroundColor: '#7d3cff' }}
            onClick={() => scrollToSection("home")}
          >
            <NavigationIcon />
            <Typography sx={{fontSize: { xs: '0px', sm: '12px' }, display: 'block'}}>Scroll to Home</Typography>
          </Fab>
        </Box>
      )}
    </>
  );
}
