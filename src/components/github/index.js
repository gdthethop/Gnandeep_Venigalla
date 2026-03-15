import React from "react";
import { Box, Typography, Grid, Card, CardContent, IconButton, Button, Chip, Stack } from "@mui/material";
import { GitHub, GitHub as GitHubIcon, OpenInNew, Code, TrendingUp } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const StyledGithubCard = styled(Card)(({ theme }) => ({
  background: "rgba(15, 23, 42, 0.4)",
  backdropFilter: "blur(12px)",
  border: "1px solid var(--glass-border)",
  borderRadius: "24px",
  color: "var(--text-primary)",
  transition: "var(--transition)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    transform: "translateY(-5px)",
    borderColor: "var(--accent-emerald)",
    background: "rgba(15, 23, 42, 0.6)",
  }
}));

const RepoChip = styled(Chip)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.05)",
  color: "var(--text-secondary)",
  fontWeight: 600,
  fontSize: "0.75rem",
  border: "1px solid var(--glass-border)",
}));

const profiles = [
  {
    name: "Architect & CEO",
    username: "GnandeepVenigalla",
    bio: "Primary professional identity focusing on Paywise and enterprise repositories.",
    repos: ["Paywise", "paywise-backend", "paywise-admin"],
    link: "https://github.com/GnandeepVenigalla/",
    activity: "280+ contributions/year"
  },
  {
    name: "Innovation & Labs",
    username: "gdthethop",
    bio: "Experimental space for modern UI projects and the GD Enterprises lab.",
    repos: ["Gdplayer", "GD-ETS"],
    link: "https://github.com/gdthethop",
    activity: "Active Lab activity"
  }
];

const GithubShowcase = () => {
  return (
    <Box id="github" sx={{ py: 12, px: { xs: 2, md: 8 }, background: "var(--bg-secondary)" }}>
      <Box sx={{ mb: 8, textAlign: "center" }}>
        <Typography variant="overline" sx={{ color: "var(--accent-emerald)", fontWeight: 700, letterSpacing: 3 }}>
          Source Control & Open Source
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 800, mt: 1 }}>
          The <span style={{ color: "var(--accent-emerald)" }}>Engine Room</span>
        </Typography>
        <Typography variant="body1" sx={{ color: "var(--text-secondary)", maxWidth: "800px", mx: "auto", mt: 2 }}>
          With 2 dedicated GitHub profiles, I maintain a clear separation between enterprise-grade products 
          and my experimental UI research lab at GD Enterprises.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {profiles.map((profile) => (
          <Grid item xs={12} md={6} key={profile.username}>
            <StyledGithubCard>
              <CardContent sx={{ p: 4, flexGrow: 1 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <GitHubIcon sx={{ fontSize: "2.5rem", color: "var(--accent-emerald)" }} />
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 800 }}>{profile.username}</Typography>
                      <Typography variant="caption" sx={{ color: "var(--accent-emerald)", fontWeight: 700 }}>{profile.name}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ textAlign: "right" }}>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: "var(--text-primary)" }}>
                      <TrendingUp sx={{ fontSize: "1rem", verticalAlign: "middle", mr: 0.5 }} />
                      {profile.activity}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body2" sx={{ color: "var(--text-secondary)", mb: 4, minHeight: "3em" }}>
                  {profile.bio}
                </Typography>

                <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 700, color: "var(--text-primary)", display: "flex", alignItems: "center", gap: 1 }}>
                  <Code sx={{ fontSize: "1rem" }} /> Key Repositories
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1, mb: 4 }}>
                  {profile.repos.map((repo) => (
                    <RepoChip key={repo} label={repo} />
                  ))}
                </Stack>

                <Button 
                  fullWidth 
                  variant="outlined" 
                  startIcon={<GitHub />}
                  href={profile.link}
                  target="_blank"
                  sx={{ 
                    borderColor: "var(--accent-emerald)", 
                    color: "var(--accent-emerald)",
                    borderRadius: "50px",
                    fontWeight: 700,
                    py: 1.5,
                    "&:hover": {
                      background: "rgba(16, 185, 129, 0.1)",
                      borderColor: "var(--accent-emerald)"
                    }
                  }}
                >
                  View Profile
                </Button>
              </CardContent>
            </StyledGithubCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GithubShowcase;
