import React, { useState } from 'react';
import { TextField, Button, Box, Alert, Snackbar } from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'info', msg: 'DISPATCHING TRANSMISSION...' });
    setOpen(true);

    try {
      // Using Web3Forms for automation
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "62fae5d0-7a5b-4357-9e7f-689e3f746193", // Static fallback or generic key, user can update
          subject: `Portfolio Contact from ${formData.name}`,
          from_name: "Portfolio Terminal",
          to_email: "gnandeep.venigalla.5@gmail.com",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success || response.ok) {
        setStatus({ type: 'success', msg: 'TRANSMISSION RECEIVED. PROTOCOL COMPLETE.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', msg: 'ENCRYPTION ERROR. USE DIRECT CHANNELS.' });
      }
    } catch (error) {
      setStatus({ type: 'error', msg: 'NETWORK BREACH. DISPATCH FAILED.' });
    }
  };

  const inputStyles = {
    mb: 3,
    '& .MuiOutlinedInput-root': {
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-main)',
      borderRadius: 0,
      '& fieldset': { borderColor: 'var(--glass-border)' },
      '&:hover fieldset': { borderColor: 'var(--accent-emerald)' },
      '&.Mui-focused fieldset': { borderColor: 'var(--accent-emerald)' },
    },
    '& .MuiInputLabel-root': {
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-main)',
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: 1,
      fontSize: '0.7rem',
      '&.Mui-focused': { color: 'var(--accent-emerald)' },
    }
  };

  return (
    <Box sx={{ width: '100%', p: 1 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="IDENTITY / NAME"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          sx={inputStyles}
        />
        <TextField
          fullWidth
          label="COMMUNICATION / EMAIL"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          sx={inputStyles}
        />
        <TextField
          fullWidth
          label="TRANSMISSION / MESSAGE"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          required
          sx={inputStyles}
        />

        <Button 
          type="submit" 
          variant="contained" 
          fullWidth 
          sx={{ 
            background: 'var(--accent-emerald)', 
            color: '#000', 
            fontWeight: 900, 
            letterSpacing: 2,
            borderRadius: 0,
            py: 2,
            boxShadow: '8px 8px 0px rgba(16, 185, 129, 0.2)',
            '&:hover': { background: '#059669', transform: 'translate(-2px, -2px)' }
          }}
        >
          EXECUTE TRANSMISSION
        </Button>
      </form>

      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert severity={status.type === 'info' ? 'info' : (status.type === 'success' ? 'success' : 'error')} sx={{ width: '100%', borderRadius: 0, background: 'var(--bg-secondary)', border: `1px solid var(--accent-emerald)`, color: 'var(--text-primary)' }}>
          {status.msg}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;