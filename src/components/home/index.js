import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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

  const styles = {
    home: {
      position: "relative",
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "flex-end", // Moves content to the right
      alignItems: "center",
      padding: "60px 10%",
      backgroundImage: 'url("Cream Simple Personal Portfolio Desktop Protoype.png")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#0d9276",
    },
    homeContainer: {
      maxWidth: "600px",
      textAlign: "left", // Keep text left-aligned
      marginLeft: "auto", // Moves block to the right
    },
    h3: {
      fontSize: "32px",
      fontWeight: "700",
      margin: "0px",
    },
    span: {
      color: "#c80e13",
    },
    h1: {
      fontSize: "56px",
      fontWeight: "700",
      margin: "10px 0px",
    },
    p: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#45474b",
    },
    socialLinksContainer: {
      display: "flex",
      justifyContent: "flex-start", // Keep icons aligned with text
      gap: "15px",
      marginTop: "20px",
    },
    socialLinks: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "45px",
      height: "45px",
      background: "transparent",
      border: "2px solid #45474b",
      borderRadius: "50%",
      fontSize: "20px",
      color: "#c80e13",
      textDecoration: "none",
      transition: "0.3s",
    },
    btn: {
      display: "inline-block",
      padding: "12px 28px",
      background: "#45474b",
      borderRadius: "40px",
      boxShadow: "0 0 10px #45474b",
      textDecoration: "none",
      fontSize: "16px",
      color: "#fceed1",
      fontWeight: "600",
      letterSpacing: "1px",
      marginTop: "20px",
      transition: "0.3s",
    },
  };

  return (
    <section style={styles.home}>
      <div style={styles.homeContainer}>
        <h3 style={styles.h3}>Hello, It's me</h3>
        <h1 style={styles.h1}>Gnandeep Venigalla</h1>
        <h3 style={styles.h3}>
          And I'm a <span style={styles.span} ref={typedRef}></span>
        </h3>
        <p style={styles.p}>
          Hi, I'm Gnandeep, a passionate and creative{" "}
          <span style={styles.span}>Frontend Developer </span>
          with a strong focus on building user-friendly and visually appealing
          interfaces. I'm always looking for new challenges and opportunities to
          learn and grow.
        </p>
        <div style={styles.socialLinksContainer}>
          <a href="https://www.linkedin.com" style={styles.socialLinks}>
            <LinkedInIcon />
          </a>
          <a href="https://www.facebook.com" style={styles.socialLinks}>
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com" style={styles.socialLinks}>
            <InstagramIcon />
          </a>
        </div>
        <a
          href="#"
          style={styles.btn}
          onMouseEnter={(e) => (e.target.style.background = "#c80e13")}
          onMouseLeave={(e) => (e.target.style.background = "#45474b")}
        >
          Download CV
        </a>
      </div>
    </section>
  );
};
