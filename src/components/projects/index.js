import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Box,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { OpenInNew, Code } from "@mui/icons-material";

import paywiseImg from "../../images/paywise.png";
import gdplayerImg from "../../images/gdplayer.png";
import gdenterprisesImg from "../../images/gdenterprises.png";
import creativestudioImg from "../../images/creativestudio.png";

const StyledCard = styled(Card)(({ theme }) => ({
  background: "var(--bg-secondary)",
  border: "1px solid var(--glass-border)",
  color: "var(--text-primary)",
  transition: "var(--transition)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "0px", /* Industrial sharp corners */
  overflow: "hidden",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "2px",
    background: "var(--accent-emerald)",
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "var(--transition)",
  },
  "&:hover": {
    transform: "translateY(-5px)",
    borderColor: "rgba(16, 185, 129, 0.3)",
    "&::after": { transform: "scaleX(1)" }
  },
}));

const projectData = [
  {
    id: "paywise",
    title: "Paywise App",
    image: paywiseImg,
    subtitle: "Founder & CEO | FinTech Solution",
    description: "Architecting a high-performance bill-splitting engine for modern financial collaboration. Zero-latency state management and enterprise encryption.",
    tech: ["React", "High-Load API", "Secure-Vault"],
    link: "https://paywiseapp.com",
    accent: "var(--accent-emerald)",
    status: "MISSION: ACTIVE"
  },
  {
    id: "gd-creative",
    title: "Creative Arm",
    image: creativestudioImg,
    subtitle: "Creative Lead | GD Lab",
    description: "Bridging the gap between cinematic storytelling and technical interactive design through high-fidelity visuals and multi-media engineering.",
    tech: ["Cinema Design", "Visual Engineering"],
    link: "#",
    accent: "var(--accent-gold)",
    status: "CONTEXT: CREATIVE"
  },
  {
    id: "gdplayer",
    title: "GD Player",
    image: gdplayerImg,
    subtitle: "Lead Architect | Media Ecosystem",
    description: "Engineering immersive media consumption. High-performance playback architectures optimized for distributed content delivery.",
    tech: ["Playback Engine", "Distributed UI"],
    link: "https://gdplayer.gnandeep.com",
    accent: "var(--accent-crimson)",
    status: "PHASE: PRODUCTION"
  },
  {
    id: "gd-enterprises",
    title: "GD Enterprises",
    image: gdenterprisesImg,
    subtitle: "Consolidated Parent Entity",
    description: "The strategic foundation for all modern ventures. Consolidating engineering excellence, creative vision, and scalable business logic.",
    tech: ["Architecture", "Strategy", "Execution"],
    link: "https://gdenterprises.gnandeep.com",
    accent: "var(--accent-emerald)",
    status: "CORE: OPERATION"
  }
];

export default function Ecosystem() {
  return (
    <Box id="ecosystem" sx={{ py: { xs: 12, md: 20 }, px: { xs: 3, md: "12%" }, background: "linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)" }}>
      <Box sx={{ mb: { xs: 8, md: 12 }, textAlign: { xs: "center", md: "left" }, maxWidth: "800px" }}>
        <Typography variant="overline" sx={{ color: "var(--accent-emerald)", fontWeight: 800, letterSpacing: 5 }}>
          VENTURE PROTOCOLS
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 900, mt: 2, fontSize: { xs: "2.5rem", md: "4rem" }, textTransform: "uppercase", lineHeight: 1 }}>
          Selected <span style={{ color: "var(--accent-emerald)" }}>Ventures</span>
        </Typography>
        <Typography variant="body1" sx={{ color: "var(--text-secondary)", mt: 3, fontSize: { xs: "1rem", md: "1.1rem" }, maxWidth: "600px" }}>
          A documentation of scalable digital assets and creative engineering projects architected under the vision of GD Enterprises.
        </Typography>
      </Box>

      <Grid container spacing={{ xs: 4, md: 6 }}>
        {projectData.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>
            <StyledCard>
              <Box sx={{ position: "relative", overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  height={{ xs: "280", md: "340" }}
                  image={project.image}
                  alt={project.title}
                  sx={{ 
                    filter: "grayscale(30%) contrast(1.1)",
                    transition: "var(--transition)",
                    "&:hover": { filter: "grayscale(0%) contrast(1.2)", scale: "1.05" }
                  }}
                />
                <Box sx={{ 
                  position: "absolute", 
                  top: 20, 
                  right: 20, 
                  background: "rgba(0,0,0,0.8)", 
                  color: project.accent,
                  px: 2, 
                  py: 0.5, 
                  fontSize: "0.65rem", 
                  fontWeight: 900, 
                  border: `1px solid ${project.accent}`,
                  letterSpacing: 1
                }}>
                  {project.status}
                </Box>
              </Box>
              <CardContent sx={{ flexGrow: 1, p: { xs: 3, md: 5 } }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: "var(--text-primary)", fontSize: { xs: "1.5rem", md: "2.1rem" } }}>
                  {project.title}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "var(--text-muted)", mb: 3, fontWeight: 700, textTransform: "uppercase", fontSize: "0.7rem" }}>
                  {project.subtitle}
                </Typography>
                <Typography variant="body2" sx={{ color: "var(--text-secondary)", mb: 4, height: { xs: "auto", md: "3.5em" }, overflow: "hidden", fontSize: { xs: "0.85rem", md: "0.95rem" } }}>
                  {project.description}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                  {project.tech.map((t) => (
                    <Typography key={t} sx={{ 
                      fontSize: "0.6rem", 
                      fontWeight: 800, 
                      color: "var(--text-muted)",
                      border: "1px solid var(--glass-border)",
                      px: 1.5,
                      py: 0.5,
                      background: "rgba(255,255,255,0.02)"
                    }}>
                      // {t}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
              <CardActions sx={{ px: { xs: 3, md: 5 }, pb: { xs: 3, md: 5 } }}>
                <Button 
                  fullWidth 
                  variant="outlined" 
                  endIcon={<OpenInNew />}
                  href={project.link}
                  sx={{ 
                    border: "1px solid var(--glass-border)", 
                    color: "var(--text-primary)",
                    borderRadius: "0px",
                    fontWeight: 800,
                    letterSpacing: 2,
                    fontSize: "0.75rem",
                    py: 1.5,
                    "&:hover": { borderColor: "var(--text-primary)", background: "var(--text-primary)", color: "#000" }
                  }}
                >
                  ACCESS TRANSMISSION
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
