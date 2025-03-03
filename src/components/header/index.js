import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from "react";
import { Icon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50); // Becomes sticky after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const StyledAppbar = styled(AppBar)(({ theme }) => ({
    backgroundColor: "#fff6e9",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    color: '#c80e13',
    transition: "all 0.3s ease-in-out",
    position: isSticky ? "fixed" : "static", // Sticky when scrolled
    top: isSticky ? 0 : "auto",
    zIndex: isSticky ? 1100 : "auto",
    width: isSticky ? "100%" : "auto",
    boxShadow: isSticky ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none",
  }));

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <Box sx={{ flexGrow: 1, paddingTop: isSticky ? "70px" : "0px" }}>
      <StyledAppbar>
        <Toolbar>
          <Typography 
            variant="h5" 
            component="div" 
            sx={{ flexGrow: 2 }} 
            style={{ fontWeight: 950, fontSize: { xs: '1.5rem', md: '2rem' } }} 
          >
            Gnandeep Venigalla.
          </Typography>

          {/* Hamburger Menu Icon */}
          <Icon sx={{ display: { xs: 'block', md: 'none' }, color: '#c80e13' }} onClick={toggleMenu}>
            <MenuIcon />
          </Icon>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" style={{ fontWeight: 700 }} onClick={() => scrollToSection("home")}>Home</Button>
            <Button color="inherit" style={{ fontWeight: 700 }} onClick={() => scrollToSection("about")}>About</Button>
            <Button color="inherit" style={{ fontWeight: 700 }} onClick={() => scrollToSection("skills")}>Skills</Button>
            <Button color="inherit" style={{ fontWeight: 700 }} onClick={() => scrollToSection("projects")}>Projects</Button>
            <Button color="inherit" style={{ fontWeight: 700 }} onClick={() => scrollToSection("contact")}>Contact</Button>
          </Box>
        </Toolbar>
      </StyledAppbar>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={openMenu}
        onClose={toggleMenu}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#fff6e9', // Same background color as AppBar
            color: '#c80e13', // Text color same as AppBar
            padding: '20px', // Padding for better spacing in the drawer
          },
        }}
      >
        <List>
          <ListItem button onClick={() => scrollToSection("home")}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => scrollToSection("about")}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={() => scrollToSection("skills")}>
            <ListItemText primary="Skills" />
          </ListItem>
          <ListItem button onClick={() => scrollToSection("projects")}>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button onClick={() => scrollToSection("contact")}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Header;
