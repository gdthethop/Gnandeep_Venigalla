import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { LinkedIn, Facebook, Instagram } from "@mui/icons-material";
import profileImg from "../../images/fiserv_professional.jpg";

export const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Founder & CEO",
        "Senior UI Developer",
        "Movie Poster Designer",
        "Creative Video Editor",
        "Professional Photo Editor",
        "Engineering Architect",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        background: "var(--bg-primary)",
        padding: { xs: "100px 24px", md: "0 8% 0 12%" },
        position: "relative",
        overflow: "hidden",
        gap: { xs: 8, md: 4 }
      }}
    >
      {/* ... background texture remains ... */}
      <Box 
        sx={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%", 
          opacity: 0.15,
          zIndex: 0,
          background: `
            radial-gradient(circle at 10% 20%, var(--accent-emerald) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, var(--bg-accent) 0%, transparent 40%)
          `,
          maskImage: "linear-gradient(to bottom, black, transparent)"
        }} 
      />

      {/* Intro Text Section */}
      <Box sx={{ maxWidth: { xs: "100%", md: "750px" }, position: "relative", zIndex: 1, textAlign: "left" }}>
        <Box sx={{ mb: 2, display: "inline-flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ width: 40, height: 1, background: "var(--accent-emerald)" }} />
          <Typography
            variant="overline"
            sx={{ 
              color: "var(--accent-emerald)", 
              fontWeight: 800, 
              letterSpacing: 4,
              fontSize: { xs: "0.6rem", md: "0.75rem" }
            }}
          >
            GNANDEEP'S DIGITAL LABORATORY
          </Typography>
        </Box>
        
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.8rem", sm: "4rem", md: "6rem" },
            lineHeight: 0.9,
            fontWeight: 900,
            mb: 3,
            color: "var(--text-primary)",
            letterSpacing: "-0.05em",
            textTransform: "uppercase",
          }}
        >
          Engineering <br />
          <span style={{ color: "var(--accent-emerald)" }}>Impact</span>
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "1.1rem", md: "1.75rem" },
            fontWeight: 400,
            color: "var(--text-secondary)",
            mb: 5,
            fontFamily: "var(--font-main)",
            maxWidth: "600px"
          }}
        >
          Senior UI Specialist & Founder building 
          <span style={{ color: "var(--text-primary)", fontWeight: 700 }}> high-growth</span> technical platforms.
          <br />
          <Box component="span" sx={{ color: "var(--accent-emerald)", fontSize: "0.8em", opacity: 0.8, display: "block", mt: 1 }}>Current context: </Box>
          <span ref={typedRef} style={{ fontSize: "0.8em", fontWeight: 700 }}></span>
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, alignItems: "center", justifyContent: { xs: "center", md: "flex-start" } }}>
          <Button
            variant="contained"
            sx={{
              background: "var(--accent-emerald)",
              color: "#000",
              fontWeight: 800,
              borderRadius: "0px",
              padding: { xs: "12px 30px", md: "16px 40px" },
              boxShadow: "8px 8px 0px rgba(16, 185, 129, 0.2)",
              "&:hover": { 
                background: "#059669",
                transform: "translate(-2px, -2px)",
                boxShadow: "10px 10px 0px rgba(16, 185, 129, 0.3)",
              },
              transition: "var(--transition)",
            }}
            href="#ecosystem"
          >
            INITIATE EXPLORATION
          </Button>
          
          <Box sx={{ display: "flex", gap: 1.5 }}>
            {[
              { icon: <LinkedIn fontSize="small" />, link: "https://www.linkedin.com/in/gnandeep-v-5b58711a7/" },
              { icon: <Instagram fontSize="small" />, link: "https://www.instagram.com/theycallme_gd?igsh=c2JndGFteXhiM2xw&utm_source=qr" },
              { icon: <Facebook fontSize="small" />, link: "https://www.facebook.com/share/1AmG4aj6GL/?mibextid=wwXIfr" }
            ].map((social, i) => (
              <IconButton
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "var(--text-muted)",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "0px",
                  p: 1.5,
                  "&:hover": { color: "var(--accent-emerald)", background: "var(--accent-emerald-glow)", borderColor: "var(--accent-emerald)" },
                  transition: "var(--transition)",
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Visual Identity Section */}
      <Box sx={{ position: "relative", width: { xs: "100%", md: "auto" }, display: "flex", justifyContent: "center" }}>
        <Box 
          sx={{ 
            position: "relative",
            width: { xs: "90vw", sm: "400px", md: "500px" },
            height: { xs: "400px", sm: "500px", md: "650px" },
            background: `url(${profileImg}) center/cover`,
            zIndex: 2,
            filter: "brightness(0.95)",
            border: "1px solid var(--glass-border)",
          }}
        />
        {/* Abstract Geometry */}
        <Box 
          sx={{ 
            position: "absolute",
            bottom: -20,
            left: { xs: "2vw", md: -30 },
            width: "100%",
            height: "100%",
            border: "1px solid var(--accent-emerald)",
            opacity: 0.2,
            zIndex: 1
          }} 
        />
        <Box 
          sx={{ 
            position: "absolute",
            top: 20,
            right: { xs: "2vw", md: -20 },
            padding: "10px 20px",
            background: "rgba(0,0,0,0.8)",
            border: "1px solid var(--accent-emerald)",
            color: "var(--accent-emerald)",
            fontFamily: "var(--font-main)",
            fontWeight: 800,
            fontSize: { xs: "0.6rem", md: "0.8rem" },
            letterSpacing: 2,
            zIndex: 3,
            whiteSpace: "nowrap"
          }}
        >
          FOUNDER: GD ENTERPRISES
        </Box>
      </Box>
    </Box>
  );
};
