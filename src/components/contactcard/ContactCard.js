import React, { useState } from "react";
import { Box, Button, Popover, Typography } from "@mui/material";
import ContactForm from "../contact form";
import { Language, Phone, Link } from "@mui/icons-material";

export default function ContactCard() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "contact-popover" : undefined;

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: 'url("./backgroundimg.png")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* Left Text Section */}
      <Box
        sx={{
          position: "absolute",
          left: { xs: "0", md: "10%" },
          textAlign: { xs: "center", md: "left" },
          mt: { xs: 5, md: 0 },
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "#333", fontWeight: "500", fontSize: { xs: "1rem", md: "1.2rem" } }}
        >
          CONTACT
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "#007a4e",
            fontWeight: "bold",
            mt: 1,
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          Let’s Work <br /> Together
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "black",
            color: "white",
            borderRadius: "20px",
            px: 3,
            py: 1,
            fontWeight: "bold",
            ":hover": { backgroundColor: "#555" },
            fontSize: { xs: "0.8rem", md: "1rem" },
          }}
          onClick={handleClick}
        >
          Contact
        </Button>
        <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}>
          <Box sx={{ p: 2, width: 300 }}>
            <ContactForm />
          </Box>
        </Popover>
      </Box>

      {/* Profile Image (Hidden on Mobile and Reduced Height on Mobile) */}
      <Box
        sx={{
          width: { xs: "80%", md: "40%" },
          height: { xs: "40vh", md: "80vh" }, // Decrease height on mobile
          display: { xs: "none", md: "block" }, // Hide on mobile
        }}
      >
        <img
          src="/Profilecontact.png"
          alt="Profile"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            boxShadow: 3,
          }}
        />
      </Box>

      {/* Right Contact Details */}
      <Box
        sx={{
          position: "absolute",
          right: { xs: "10%", md: "10%" },
          bottom: { xs: "20%", md: "10%" },
          textAlign: { xs: "center", md: "right" },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, justifyContent: { xs: "center", md: "flex-end" } }}>
          <Phone sx={{ color: "#007a4e", mr: 1 }} />
          <Typography variant="body1" sx={{ fontWeight: "bold", color: "#333" }}>
            609-210-3151
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, justifyContent: { xs: "center", md: "flex-end" } }}>
          <Link sx={{ color: "#007a4e", mr: 1 }} />
          <Typography variant="body1" sx={{ fontWeight: "bold", color: "#333" }}>
            @Gnandeep
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-end" } }}>
          <Language sx={{ color: "#007a4e", mr: 1 }} />
          <Typography variant="body1" sx={{ fontWeight: "bold", color: "#333" }}>
            github.io/gnandeep
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
