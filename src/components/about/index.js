import React from "react";
import { Box, Typography } from "@mui/material";
import aboutImage from "../../images/about_lifestyle.jpg";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        width: "100%",
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg-secondary)",
        padding: { xs: "80px 24px", md: "100px 12%" },
        textAlign: { xs: "center", md: "left" },
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 8, md: 12 },
      }}
    >
      <Box sx={{ flex: 1, position: "relative", zIndex: 1 }}>
        <Typography variant="overline" sx={{ color: "var(--accent-emerald)", fontWeight: 800, letterSpacing: 4, fontSize: "0.7rem" }}>
          GENESIS
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "var(--text-primary)", mb: 3, fontSize: { xs: "2.5rem", md: "4rem" }, textTransform: "uppercase", lineHeight: 1 }}>
          Architecting the <br /><span style={{ color: "var(--accent-emerald)" }}>Future</span>
        </Typography>
        
        <Box sx={{ borderLeft: "2px solid var(--accent-emerald)", pl: 3, mb: 4, textAlign: "left" }}>
          <Typography variant="body1" sx={{ fontSize: "1rem", color: "var(--text-primary)", fontWeight: 800, mb: 1, textTransform: "uppercase", letterSpacing: 1 }}>
            Founder & CEO // GD Enterprises
          </Typography>
          <Typography variant="body2" sx={{ color: "var(--text-secondary)", maxWidth: "500px" }}>
            Leading a multi-disciplinary tech organization focused on delivering high-end digital products from concept to scale.
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: "var(--text-secondary)", lineHeight: 1.8, mb: 3 }}>
          With over <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>7 years of professional UI experience</span>, 
          currently serving as a Senior UI Specialist at <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Fiserv</span>. 
          I am known for <span style={{ color: "var(--accent-emerald)", fontWeight: 600 }}>High-Velocity Engineering</span>—consistently delivering complex systems 
          ahead of aggressive schedules. My lead technical support was the engine that helped the <span style={{ color: "var(--accent-emerald)", fontWeight: 600 }}>Adobe Commerce plugin</span> 
          surpass all growth targets and boom into a flagship offering.
        </Typography>
        
        <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: "var(--text-secondary)", lineHeight: 1.8, mb: 4 }}>
          Beyond engineering, I am a seasoned <span style={{ color: "var(--accent-emerald)", fontWeight: 600 }}>Video & Photo Editor</span> and 
          <span style={{ color: "var(--accent-emerald)", fontWeight: 600 }}>Movie Poster Designer</span>. This allows me to 
          conceptualize UI/UX from a cinematic perspective.
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 4, md: 6 }, justifyContent: { xs: "center", md: "flex-start" } }}>
          {[
            { val: "7+", label: "YEARS EXP" },
            { val: "15+", label: "PROJECTS" },
            { val: "3+", label: "VENTURES" }
          ].map((stat, i) => (
            <Box key={i}>
              <Typography variant="h4" sx={{ color: "var(--accent-emerald)", fontWeight: 900 }}>{stat.val}</Typography>
              <Typography variant="caption" sx={{ color: "var(--text-muted)", fontWeight: 800, letterSpacing: 1 }}>{stat.label}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ flex: 1, position: "relative", width: { xs: "100%", md: "auto" }, display: "flex", justifyContent: "center" }}>
        <Box 
          sx={{ 
            width: { xs: "100%", sm: "400px", md: "100%" }, 
            height: { xs: "350px", md: "500px" }, 
            borderRadius: "0px",
            background: `url(${aboutImage}) center/cover`,
            border: "1px solid var(--glass-border)",
            filter: "grayscale(20%)",
            transition: "var(--transition)",
            "&:hover": { filter: "grayscale(0%)" }
          }} 
        />
        <Box 
          sx={{ 
            position: "absolute",
            top: -15,
            right: { xs: "2vw", md: -15 },
            width: "80px",
            height: "80px",
            border: "1px solid var(--accent-emerald)",
            opacity: 0.3,
            zIndex: -1
          }} 
        />
      </Box>
    </Box>
  );
};

export default About;
