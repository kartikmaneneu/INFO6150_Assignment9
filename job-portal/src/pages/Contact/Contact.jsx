import { useState } from 'react';
import { Alert, Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, md: 5 }}>
        <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>Get in touch</Typography>
        <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
          Questions about an opportunity or need help with your profile? Our team is here to help.
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 7 }}>
        <Card><CardContent sx={{ p: 4 }}>
          {sent && <Alert severity="success" sx={{ mb: 2 }}>Your message has been sent.</Alert>}
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField required fullWidth label="Name" name="name" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField required fullWidth label="Email" name="email" type="email" />
              </Grid>
              <Grid size={12}>
                <TextField required fullWidth multiline minRows={5} label="Message" name="message" />
              </Grid>
              <Grid size={12}>
                <Button type="submit" variant="contained" endIcon={<SendIcon />}>Send message</Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent></Card>
      </Grid>
    </Grid>
  );
}
