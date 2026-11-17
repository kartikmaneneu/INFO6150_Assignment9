import { Box, Button, Chip, Grid, Paper, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Box>
      <Paper sx={{ p: { xs: 4, md: 7 }, bgcolor: '#0f172a', color: 'white', overflow: 'hidden', position: 'relative' }}>
        <Chip label="Your next career starts here" sx={{ mb: 3, bgcolor: 'rgba(20,184,166,.18)', color: '#5eead4' }} />
        <Typography variant="h2" sx={{ maxWidth: 720, fontWeight: 900, lineHeight: 1.08 }}>
          Find work that <Box component="span" sx={{ color: '#60a5fa' }}>fits your future.</Box>
        </Typography>
        <Typography sx={{ maxWidth: 620, mt: 3, mb: 4, color: '#cbd5e1', fontSize: 18 }}>
          Explore hand-picked roles, discover great companies, and take the next step in your career.
        </Typography>
        <Button component={Link} to="/jobs" variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
          Browse jobs
        </Button>
      </Paper>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {[['6', 'Open roles'], ['5', 'Companies'], ['1', 'New opportunity']].map(([number, label]) => (
          <Grid size={{ xs: 12, sm: 4 }} key={label}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h4" color="primary" sx={{ fontWeight: 800 }}>{number}</Typography>
              <Typography color="text.secondary">{label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
