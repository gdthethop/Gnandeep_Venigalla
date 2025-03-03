import React from "react";
import aboutImage from "../../images/about.png";
import backgroundImg from "../../images/background2.png";

const About = () => {
  const styles = {
    about: {
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "50px 20px",
      textAlign: "center",
      flexDirection: "column", // Mobile-first
    },
    aboutContainer: {
      maxWidth: "800px",
      textAlign: "center",
    },
    h3: {
      fontSize: "50px",
      fontWeight: "700",
      color: "#0d9276",
      marginBottom: "20px",
    },
    span: {
      color: "#c80e13",
    },
    p: {
      fontSize: "18px",
      fontWeight: 500,
      color: "#45474b",
      lineHeight: "1.6",
      marginBottom: "15px",
    },
    imgContainer: {
      display: "none", // Hidden by default (mobile)
    },

    // Desktop Styles
    desktopView: {
      "@media (min-width: 768px)": {
        about: {
          flexDirection: "row",
          textAlign: "left",
          justifyContent: "space-between",
          padding: "80px 100px",
        },
        aboutContainer: {
          maxWidth: "50%",
        },
        imgContainer: {
          display: "block", // Show image on larger screens
        },
        img: {
          maxWidth: "700px",
        },
      },
    },
  };

  return (
    <section style={{ ...styles.about, ...styles.desktopView["@media (min-width: 768px)"].about }}>
      <div style={{ ...styles.aboutContainer, ...styles.desktopView["@media (min-width: 768px)"].aboutContainer }}>
        <h3 style={styles.h3}>
          About <span style={styles.span}>Me</span>
        </h3>
        <p style={styles.p}>
          Hi, I'm Gnandeep, a passionate and creative{" "}
          <span style={styles.span}>Frontend Developer</span> with over 6 years of experience in building user-friendly and visually appealing interfaces.
        </p>
        <p style={styles.p}>
          My expertise includes HTML, CSS, JavaScript, React, and Node.js, allowing me to develop scalable applications with a seamless user experience.
        </p>
        <p style={styles.p}>
          I have worked on various projects, from personal websites to open-source contributions, always focusing on delivering high-quality, responsive, and accessible web applications.
        </p>
        <p style={styles.p}>
          I thrive in collaborative environments and enjoy working with cross-functional teams to create cutting-edge digital experiences.
        </p>
      </div>

      {/* Image (Hidden on Mobile, Visible on Desktop) */}
      <div style={{ ...styles.imgContainer, ...styles.desktopView["@media (min-width: 768px)"].imgContainer }}>
        <img
          src={aboutImage}
          alt="About Me"
          style={styles.desktopView["@media (min-width: 768px)"].img}
        />
      </div>
    </section>
  );
};

export default About;
