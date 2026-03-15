import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FaReact } from 'react-icons/fa';
// import JavascriptIcon from '@mui/icons-material/Javascript';

export default function DenseAppBar({ isHidden }) {
  return (
    <Box component="footer" sx={{ py: 4, background: "var(--bg-primary)", borderTop: "1px solid var(--glass-border)" }}>
      <Typography variant="body2" sx={{ textAlign: "center", color: "var(--text-muted)", fontWeight: 800, letterSpacing: 2 }}>
        © 2026 GNANDEEP VENIGALLA // GD ENTERPRISES ARCHIVE
      </Typography>
    </Box>
  );
}
