import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setOpenMenu(false);
  };

  const menuItems = [
    { label: "PROTOCOL", id: "home" },
    { label: "VENTURES", id: "ecosystem" },
    { label: "SOURCE", id: "github" },
    { label: "MANIFEST", id: "skills" },
    { label: "ARCHIVE", id: "about" }
  ];

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: isSticky ? "rgba(2, 6, 23, 0.95)" : "transparent",
        boxShadow: "none",
        transition: "var(--transition)",
        borderBottom: isSticky ? "1px solid var(--glass-border)" : "none",
        py: isSticky ? 1 : 2
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 10 } }}>
        <Typography 
          variant="h6" 
          onClick={() => scrollToSection("home")}
          sx={{ 
            fontWeight: 900, 
            cursor: "pointer",
            letterSpacing: 4,
            color: "var(--text-primary)",
            fontFamily: "Outfit",
            fontSize: "1.1rem"
          }} 
        >
          GNANDEEP <span style={{ color: "var(--accent-emerald)" }}>GD</span>
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, alignItems: "center" }}>
          {menuItems.map((item) => (
            <Button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              sx={{ 
                color: "var(--text-secondary)", 
                fontWeight: 800,
                fontSize: "0.7rem",
                letterSpacing: 2,
                px: 2,
                borderRadius: 0,
                "&:hover": { color: "var(--accent-emerald)", background: "transparent" }
              }}
            >
              {item.label}
            </Button>
          ))}
          <Button 
            variant="outlined" 
            sx={{ 
              ml: 3, 
              borderColor: "var(--accent-emerald)", 
              color: "var(--accent-emerald)", 
              fontWeight: 900,
              fontSize: "0.7rem",
              letterSpacing: 2,
              borderRadius: 0,
              px: 3,
              py: 1,
              "&:hover": { background: "var(--accent-emerald)", color: "#000" }
            }}
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
          >
            INITIATE CONTACT
          </Button>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          sx={{ display: { xs: "flex", md: "none" }, color: "var(--text-primary)" }}
          onClick={() => setOpenMenu(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        PaperProps={{
          sx: {
            width: "300px",
            background: "var(--bg-primary)",
            color: "var(--text-primary)",
            borderLeft: "1px solid var(--glass-border)",
            p: 4
          }
        }}
      >
        <Typography variant="overline" sx={{ color: "var(--accent-emerald)", fontWeight: 800, mb: 4, display: "block" }}>
          TERMINAL_ACCESS
        </Typography>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.id} onClick={() => scrollToSection(item.id)} sx={{ py: 2, borderBottom: "1px solid var(--glass-border)" }}>
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{ sx: { fontWeight: 900, fontSize: "0.8rem", letterSpacing: 2 } }} 
              />
            </ListItem>
          ))}
          <ListItem button onClick={() => scrollToSection("contact")} sx={{ py: 2, mt: 4, background: "var(--accent-emerald-glow)" }}>
            <ListItemText 
              primary="INITIATE CONTACT" 
              primaryTypographyProps={{ sx: { fontWeight: 900, fontSize: "0.8rem", letterSpacing: 2, color: "var(--accent-emerald)" } }} 
            />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
