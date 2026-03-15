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
      id="contact"
      sx={{
        width: "100%",
        minHeight: "70vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        background: "var(--bg-primary)",
        padding: { xs: "120px 24px", md: "150px 12%" },
        position: "relative",
      }}
    >
      {/* Decorative Line */}
      <Box sx={{ position: "absolute", top: 0, left: "12%", width: "1px", height: "100%", background: "var(--glass-border)", zIndex: 0 }} />

      {/* Left Text Section */}
      <Box sx={{ flex: 1, textAlign: "left", position: "relative", zIndex: 1 }}>
        <Typography
          variant="overline"
          sx={{ color: "var(--accent-emerald)", fontWeight: 800, letterSpacing: 5 }}
        >
          CONTACT PROTOCOL
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "var(--text-primary)",
            fontWeight: 900,
            mt: 2,
            mb: 4,
            fontSize: { xs: "2.5rem", md: "4.5rem" },
            lineHeight: 1,
            textTransform: "uppercase"
          }}
        >
          Initiate <br /> <span style={{ color: "var(--accent-emerald)" }}>The Dialogue</span>
        </Typography>
        <Typography variant="body1" sx={{ color: "var(--text-secondary)", mb: 6, maxWidth: "550px", fontSize: "1.1rem" }}>
          Secure a dedicated session to discuss strategic ventures, architectural consulting, 
          or senior-level UI engineering opportunities.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "var(--accent-emerald)",
            color: "#000",
            borderRadius: 0,
            px: 6,
            py: 2.5,
            fontWeight: 900,
            letterSpacing: 2,
            ":hover": { backgroundColor: "#059669" },
            fontSize: "0.9rem",
            boxShadow: "10px 10px 0px rgba(16, 185, 129, 0.2)"
          }}
          onClick={handleClick}
        >
          EXECUTE DISPATCH
        </Button>
        <Popover 
          id={id} 
          open={open} 
          anchorEl={anchorEl} 
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          PaperProps={{
            sx: {
              background: "var(--bg-secondary)",
              border: "1px solid var(--accent-emerald)",
              borderRadius: 0,
              mt: 2,
              p: 2
            }
          }}
        >
          <Box sx={{ p: 1, width: { xs: "90vw", sm: 450 } }}>
            <Typography variant="caption" sx={{ color: "var(--accent-emerald)", fontWeight: 900, mb: 2, display: "block" }}>
              {"// ENCRYPTED TRANSMISSION"}
            </Typography>
            <ContactForm />
          </Box>
        </Popover>
      </Box>

      {/* Right Contact Details */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: { xs: "center", md: "flex-end" },
          width: "100%",
          position: "relative",
          zIndex: 1
        }}
      >
        <Box 
          sx={{ 
            p: 6, 
            background: "var(--bg-secondary)", 
            border: "1px solid var(--glass-border)",
            width: { xs: "100%", md: "auto" },
            minWidth: { md: "450px" },
            borderRadius: 0
          }}
        >
          {[
            { icon: <Phone sx={{ color: "var(--accent-emerald)", fontSize: "1.2rem" }} />, label: "NETWORKS", value: "609-210-3151" },
            { icon: <Link sx={{ color: "var(--accent-emerald)", fontSize: "1.2rem" }} />, label: "LINKED_ID", value: "/gnandeep-v-5b58711a7" },
            { icon: <Language sx={{ color: "var(--accent-emerald)", fontSize: "1.2rem" }} />, label: "SECURE_HUB", value: "gnandeepvenigalla.com" }
          ].map((item, i) => (
            <Box key={i} sx={{ display: "flex", alignItems: "center", mb: i < 2 ? 5 : 0, gap: 3 }}>
              <Box sx={{ p: 1, border: "1px solid var(--accent-emerald-glow)", background: "rgba(16, 185, 129, 0.05)" }}>
                {item.icon}
              </Box>
              <Box>
                <Typography sx={{ color: "var(--accent-emerald)", fontSize: "0.65rem", fontWeight: 900, letterSpacing: 2, mb: 0.5 }}>{item.label}</Typography>
                <Typography sx={{ fontWeight: 800, color: "var(--text-primary)", fontSize: "1rem" }}>{item.value}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
