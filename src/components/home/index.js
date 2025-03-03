import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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

  const styles = {
    home: {
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column-reverse", // Mobile-first (stacked) to place image on top
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `url(${backgroundHomeImg})`, // Updated background image path
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#0d9276",
      padding: "20px",
      textAlign: "center",
    },
    homeContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "600px",
      textAlign: "center",
    },
    profile: {
      width: "250px",
      height: "250px",
      marginBottom: "20px",
    },
    h3: {
      fontSize: "28px",
      fontWeight: "600",
      margin: "10px 0",
    },
    h1: {
      fontSize: "50px",
      fontWeight: "700",
      margin: "10px 0",
      color: "#c80e13",
    },
    span: {
      color: "#c80e13",
    },
    p: {
      fontSize: "18px",
      fontWeight: "400",
      color: "#45474b",
      marginTop: "10px",
    },
    socialLinksContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginTop: "20px",
    },
    socialLinks: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "50px",
      height: "50px",
      background: "transparent",
      border: "2px solid #45474b",
      borderRadius: "50%",
      fontSize: "22px",
      color: "#c80e13",
      transition: "0.3s",
      textDecoration: "none",
    },
    btn: {
      display: "inline-block",
      padding: "14px 32px",
      background: "#45474b",
      borderRadius: "30px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      textDecoration: "none",
      fontSize: "18px",
      color: "#fceed1",
      fontWeight: "600",
      letterSpacing: "1px",
      marginTop: "20px",
      transition: "0.3s",
      cursor: "pointer",
    },

    // Desktop View (Using Media Queries)
    desktopView: {
      "@media (min-width: 768px)": {
        home: {
          flexDirection: "row", // Image left, text right
          textAlign: "left",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "40px 80px",
        },
        homeContainer: {
          textAlign: "left",
          alignItems: "flex-start",
          maxWidth: "50%",
        },
        profile: {
          width: "750px",
          height: "750px",
          marginBottom: "0px",
        },
        socialLinksContainer: {
          justifyContent: "flex-start",
        },
      },
    },
  };

  return (
    <section style={{ ...styles.home, ...styles.desktopView["@media (min-width: 768px)"].home }}>
      <img src={profileImg} alt="profile" style={{ ...styles.profile, ...styles.desktopView["@media (min-width: 768px)"].profile }} />
      <div style={{ ...styles.homeContainer, ...styles.desktopView["@media (min-width: 768px)"].homeContainer }}>
        <h3 style={styles.h3}>Hello, It's me</h3>
        <h1 style={styles.h1}>Gnandeep Venigalla</h1>
        <h3 style={styles.h3}>
          And I'm a <span style={styles.span} ref={typedRef}></span>
        </h3>
        <p style={styles.p}>
          Hi, I'm Gnandeep, a passionate and creative{" "}
          <span style={styles.span}>Frontend Developer</span> with a strong focus on building
          user-friendly and visually appealing interfaces.
        </p>
        <div style={{ ...styles.socialLinksContainer, ...styles.desktopView["@media (min-width: 768px)"].socialLinksContainer }}>
          <a href="https://www.linkedin.com" style={styles.socialLinks} aria-label="LinkedIn Profile">
            <LinkedInIcon />
          </a>
          <a href="https://www.facebook.com" style={styles.socialLinks} aria-label="Facebook Profile">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com" style={styles.socialLinks} aria-label="Instagram Profile">
            <InstagramIcon />
          </a>
        </div>
        <a
          href="/path/to/your/cv.pdf" // Update with actual CV link
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
