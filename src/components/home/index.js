import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Box, Typography, Button, Avatar, IconButton } from "@mui/material";
import { LinkedIn, Facebook, Instagram } from "@mui/icons-material";
import profileImg from "../../images/profile.png";
import backgroundHomeImg from "../../images/backgroundhome.png";

export const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Frontend Developer",
        "Web Developer",
        "Photo Designer",
        "Video Editor",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${backgroundHomeImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#0d9276",
        padding: 4,
        gap: 9,
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Avatar
        src={profileImg}
        alt="Profile"
        sx={{ width: { xs: 250, md: 550 }, height: { xs: 250, md: 550 }, mb: { xs: 2, md: 0 } }}
      />

      <Box sx={{ maxWidth: "600px" }}>
        <Typography variant="h6">Hello, It's me</Typography>
        <Typography variant="h3" sx={{ fontWeight: 700, color: "#c80e13" }}>
          Gnandeep Venigalla
        </Typography>
        <Typography variant="h6">
          And I'm a <span ref={typedRef} style={{ color: "#c80e13" }}></span>
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: "#45474b" }}>
          Hi, I'm Gnandeep, a passionate and creative{' '}
          <span style={{ color: "#c80e13" }}>Frontend Developer</span> with a strong focus on building user-friendly
          and visually appealing interfaces.
        </Typography>

        <Box sx={{ display: "flex", gap: 2, mt: 3, justifyContent: { xs: "center", md: "flex-start" } }}>
          <IconButton href="https://www.linkedin.com" sx={{ color: "#c80e13" }}>
            <LinkedIn fontSize="large" />
          </IconButton>
          <IconButton href="https://www.facebook.com" sx={{ color: "#c80e13" }}>
            <Facebook fontSize="large" />
          </IconButton>
          <IconButton href="https://www.instagram.com" sx={{ color: "#c80e13" }}>
            <Instagram fontSize="large" />
          </IconButton>
        </Box>

        <Button
          variant="contained"
          sx={{ mt: 3, background: "#45474b", "&:hover": { background: "#c80e13" } }}
          href="/path/to/your/cv.pdf"
        >
          Download CV
        </Button>
      </Box>
    </Box>
  );
};
