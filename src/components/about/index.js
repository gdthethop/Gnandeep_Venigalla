import React from "react";
import { Box, Typography } from "@mui/material";
import aboutImage from "../../images/about.png";
import backgroundImg from "../../images/background2.png";

const About = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: { xs: "50px 20px", md: "80px 100px" },
        textAlign: { xs: "center", md: "left" },
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box sx={{ maxWidth: { xs: "100%", md: "50%" } }}>
        <Typography variant="h3" sx={{ fontWeight: 700, color: "#0d9276", mb: 2 }}>
          About <span style={{ color: "#c80e13" }}>Me</span>
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 500, color: "#45474b", lineHeight: 1.6, mb: 2 }}>
          Hi, I'm Gnandeep, a passionate and creative <span style={{ color: "#c80e13" }}>Frontend Developer</span> with over 6 years of experience in
          building user-friendly and visually appealing interfaces.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 500, color: "#45474b", lineHeight: 1.6, mb: 2 }}>
          My expertise includes HTML, CSS, JavaScript, React, and Node.js, allowing me to develop scalable applications with a seamless user experience.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 500, color: "#45474b", lineHeight: 1.6, mb: 2 }}>
          I have worked on various projects, from personal websites to open-source contributions, always focusing on delivering high-quality, responsive,
          and accessible web applications.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 500, color: "#45474b", lineHeight: 1.6 }}>
          I thrive in collaborative environments and enjoy working with cross-functional teams to create cutting-edge digital experiences.
        </Typography>
      </Box>

      {/* Image Section (Hidden on Mobile, Visible on Desktop) */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Box component="img" src={aboutImage} alt="About Me" sx={{ maxWidth: "700px" }} />
      </Box>
    </Box>
  );
};

export default About;
