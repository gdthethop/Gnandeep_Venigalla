import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // You can add your backend logic here
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom style={{ color: '#41356C', fontWeight:600}}>
          Contact <span style={{ color: '#c80e13' }}>Us</span>
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
            sx={{
              input: { color: '#41356C' }, // Set text color to white
              label: { color: '#41356C' }, // Set label color to white
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#41356C' }, // Set border color to white
                '&:hover fieldset': { borderColor: '#41356C' }, // Set hover border color to white
              },
            }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            sx={{
              input: { color: '#41356C' }, // Set text color to white
              label: { color: '#41356C' }, // Set label color to white
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#41356C' }, // Set border color to white
                '&:hover fieldset': { borderColor: '#41356C' }, // Set hover border color to white
              },
            }}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={4}
            required
            sx={{
              textarea: { color: '#41356C' }, // Set text color to white
              label: { color: '#41356C' }, // Set label color to white
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#41356C' }, // Set border color to white
                '&:hover fieldset': { borderColor: '#41356C' }, // Set hover border color to white
              },
            }}
          />
 
<Box sx={{ mt: 2 }}>
<Button type="submit" variant="contained" fullWidth style={{ backgroundColor:'#7d3cff', color:'#fceed1', fontWeight:'600', fontSize: '16px'}}>
  Submit
</Button>
</Box>
</form>
</Box>
    </Container>
  );
};

export default ContactForm;