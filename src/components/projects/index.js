import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Divider,
  Paper,
  Stack,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Define the `Item` component using the `styled` function
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  backgroundColor: "transparent",
  boxShadow: "none",
}));

const projectDetails = {
  1: {
    title: "Modern Video Streaming Platform",
    technologies: "React.js, Node.js, MySQL, Oracle Cloud",
    description:
      "Developed a video-sharing platform that enables content streaming without requiring login. Designed an interactive UI using React.js with features like video thumbnails, hover effects, and dark mode. Implemented secure backend with Node.js and MySQL for handling video uploads and metadata. Integrated cloud storage (Oracle Cloud) for scalability and high-performance content delivery.",
  },
  2: {
    title: "Responsive Portfolio Website",
    technologies: "HTML, CSS, JavaScript, Bootstrap, GitHub Pages",
    description:
      "Designed and developed a personal portfolio website showcasing projects and skills. Implemented smooth animations, transitions, and interactive elements to enhance user experience. Optimized performance for mobile-first and cross-browser compatibility.",
  },
  3: {
    title: "E-Commerce Frontend Interface",
    technologies: "React.js, Redux, Firebase, Tailwind CSS",
    description:
      "Built a dynamic and scalable e-commerce frontend with product listings and user authentication. Implemented state management using Redux for seamless cart and checkout functionality. Integrated real-time database (Firebase) for efficient product and user data handling.",
  },
};

// Add hover effect styles to enhance card appearance
const HoverCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  backgroundColor: "white",
  color: "#0d9276",
  zIndex: 9,
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.1)",
  },
}));

// Styled box for project details
const DetailsBox = styled(Box)(({ theme }) => ({
  position: "relative",
  top: "0",
  left: "0",
  transform: "translateY(10px)", // Adjusted to position below the card
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
  width: "300px",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {
    width: "250px",
  },
}));

export default function MediaCard() {
  const [clicked, setClicked] = React.useState(null);

  const handleClick = (projectId) => {
    // Toggle the visibility of the project details when clicking
    if (clicked === projectId) {
      setClicked(null); // If clicked project is already open, close it
    } else {
      setClicked(projectId); // Open clicked project details
    }
  };

  return (
    <Box sx={{ display:'flex', flexDirection:"column", textAlign: "center", height: "100vh", justifyContent: "center" }}>
      {/* Section Title */}
      <Typography variant="h4" gutterBottom sx={{ color: "#0d9276", fontWeight: 600, marginBottom: "40px" }}>
        My <span style={{ color: "#c80e13" }}>Projects</span>
      </Typography>

      {/* Project Cards */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        {/* Video Streaming Platform */}
        <Item>
          <HoverCard sx={{ color: "#0d9276" }}>
            <CardMedia
              sx={{ height: 240 }}
              image="./Screenshot 2025-02-24 at 12.51.18 PM 2.png" // Placeholder for image
              title="Modern Video Streaming Platform"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Video Streaming Platform
              </Typography>
              <Typography variant="body2">
                A modern video-sharing platform with hover effects, dark mode, and Oracle Cloud storage.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ color: "#c80e13" }} onClick={() => handleClick(1)}>
                Learn More
              </Button>
            </CardActions>
          </HoverCard>
          {clicked === 1 && (
            <DetailsBox>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#0d9276"}}>
                {projectDetails[1].title}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500, color: "#c80e13" }}>
                {projectDetails[1].technologies}
              </Typography>
              <Typography variant="body2">{projectDetails[1].description}</Typography>
            </DetailsBox>
          )}
        </Item>

        {/* Portfolio Website */}
        <Item>
          <HoverCard sx={{ color: "#0d9276" }}>
            <CardMedia
              sx={{ height: 240 }}
              image="./Screenshot 2025-03-02 at 8.50.41 PM (2).png" // Placeholder for image
              title="Portfolio Website"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Portfolio Website
              </Typography>
              <Typography variant="body2">
                A responsive portfolio site showcasing my projects, built with HTML, CSS, and JavaScript.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ color: "#c80e13" }} onClick={() => handleClick(2)}>
                Learn More
              </Button>
            </CardActions>
          </HoverCard>
          {clicked === 2 && (
            <DetailsBox>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#0d9276" }}>
                {projectDetails[2].title}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500, color: "#c80e13" }}>
                {projectDetails[2].technologies}
              </Typography>
              <Typography variant="body2">{projectDetails[2].description}</Typography>
            </DetailsBox>
          )}
        </Item>

        {/* E-Commerce Frontend */}
        <Item>
          <HoverCard sx={{ color: "#0d9276" }}>
            <CardMedia
              sx={{ height: 240 }}
              image="https://via.placeholder.com/345x240?text=E-Commerce+Frontend" // Placeholder for image
              title="E-Commerce Interface"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                E-Commerce Frontend
              </Typography>
              <Typography variant="body2">
                A scalable e-commerce frontend with React.js, Redux, and Firebase for real-time data.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ color: "#c80e13" }} onClick={() => handleClick(3)}>
                Learn More
              </Button>
            </CardActions>
          </HoverCard>
          {clicked === 3 && (
            <DetailsBox>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#0d9276", }}>
                {projectDetails[3].title}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500, color: "#c80e13" }}>
                {projectDetails[3].technologies}
              </Typography>
              <Typography variant="body2">{projectDetails[3].description}</Typography>
            </DetailsBox>
          )}
        </Item>
      </Stack>
    </Box>
  );
}
