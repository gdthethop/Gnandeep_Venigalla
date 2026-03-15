import React, { useEffect, useState } from "react";
import { Box, Typography, LinearProgress, CircularProgress, Grid } from "@mui/material";
import { FaAngular, FaReact, FaNodeJs, FaJs, FaMagento } from "react-icons/fa";
import { SiRedux, SiReactivex, SiTypescript } from "react-icons/si";

const skillsData = [
  { name: "Angular & NGRX", icon: <FaAngular color="#dd0031" />, percentage: 95, color: "#dd0031" },
  { name: "Redux & State Mgmt", icon: <SiRedux color="#764abc" />, percentage: 98, color: "#764abc" },
  { name: "Adobe Commerce", icon: <FaMagento color="#ff6b00" />, percentage: 90, color: "#ff6b00" },
  { name: "RxJS & Reactive", icon: <SiReactivex color="#e10098" />, percentage: 88, color: "#e10098" },
  { name: "React & Context", icon: <FaReact color="#61dafb" />, percentage: 85, color: "#61dafb" },
  { name: "TypeScript", icon: <SiTypescript color="#3178c6" />, percentage: 92, color: "#3178c6" },
  { name: "Node.js & Backend", icon: <FaNodeJs color="#339933" />, percentage: 80, color: "#339933" },
  { name: "UI/UX Design", icon: <FaJs color="#f7df1e" />, percentage: 85, color: "#f7df1e" },
];

const leadershipSkills = [
  { name: "Strategic Vision", percentage: 95 },
  { name: "Team Leadership", percentage: 90 },
  { name: "Product Architecture", percentage: 92 },
  { name: "System Scalability", percentage: 88 },
];

const SkillsSection = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: 20,
        px: { xs: 2, md: "12%" },
        background: "var(--bg-primary)",
        position: "relative",
      }}
    >
      {/* Structural Decoration */}
      <Box sx={{ position: "absolute", top: 0, right: "10%", width: "1px", height: "100%", background: "var(--glass-border)", zIndex: 0 }} />

      <Box sx={{ mb: 12, position: "relative", zIndex: 1 }}>
        <Typography variant="overline" sx={{ color: "var(--accent-emerald)", fontWeight: 800, letterSpacing: 6 }}>
          CAPABILITIES MANIFEST
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 900, mt: 2, fontSize: { xs: "2.5rem", md: "4.5rem" }, textTransform: "uppercase" }}>
          Technical <span style={{ color: "var(--accent-emerald)" }}>Mastery</span>
        </Typography>
      </Box>

      <Grid container spacing={8}>
        {/* Core Architecture */}
        <Grid item xs={12} lg={8}>
          <Box sx={{ borderTop: "1px solid var(--text-primary)", pt: 4, mb: 8 }}>
            <Typography variant="h5" sx={{ fontWeight: 900, mb: 4, letterSpacing: 2, textTransform: "uppercase" }}>
              01. System Architecture & UI
            </Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 4 }}>
              {skillsData.map((skill, index) => (
                <Box key={index} sx={{ borderBottom: "1px solid var(--glass-border)", pb: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", mb: 1 }}>
                    <Typography sx={{ fontWeight: 800, fontSize: "0.9rem", color: "var(--text-primary)" }}>
                      {skill.name.toUpperCase()}
                    </Typography>
                    <Typography sx={{ fontSize: "0.75rem", fontWeight: 900, color: "var(--accent-emerald)" }}>
                      {skill.percentage}% / LEVEL: MASTER
                    </Typography>
                  </Box>
                  <Box sx={{ height: 2, width: "100%", background: "rgba(255,255,255,0.05)" }}>
                    <Box sx={{ height: "100%", width: `${skill.percentage}%`, background: "var(--accent-emerald)" }} />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Leadership & Creative */}
        <Grid item xs={12} lg={4}>
          <Box sx={{ borderTop: "1px solid var(--accent-emerald)", pt: 4, height: "100%", background: "var(--accent-emerald-glow)", p: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 900, mb: 4, letterSpacing: 2, textTransform: "uppercase" }}>
              02. Leadership Matrix
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {leadershipSkills.map((skill, index) => (
                <Box key={index}>
                  <Typography sx={{ fontWeight: 800, fontSize: "0.85rem", color: "var(--text-primary)", mb: 1 }}>
                    {skill.name.toUpperCase()}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "var(--text-secondary)", fontSize: "0.8rem", lineHeight: 1.4 }}>
                    Operational excellence in {skill.name.toLowerCase()} for enterprise scale and growth.
                  </Typography>
                </Box>
              ))}
            </Box>
            
            <Box sx={{ mt: 10, p: 3, border: "1px dashed var(--accent-emerald)", opacity: 0.8 }}>
              <Typography sx={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--accent-emerald)", textAlign: "center", textTransform: "uppercase" }}>
                Multidisciplinary Creative Eye: <br />
                Video // Photo // Poster Design
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillsSection;
