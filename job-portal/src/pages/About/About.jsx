import { Card, CardContent, Grid, Typography } from '@mui/material';

export default function About() {
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, md: 7 }}>
        <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>About JobHub</Typography>
        <Typography color="text.secondary" sx={{ fontSize: 18, lineHeight: 1.8 }}>
          JobHub is a modern job portal designed to connect talented people with ambitious teams.
          Browse opportunities, learn about companies, and find a role that matches your goals.
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 5 }}>
        <Card><CardContent sx={{ p: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Our mission</Typography>
          <Typography color="text.secondary">
            Make career discovery clear, approachable, and accessible for every job seeker.
          </Typography>
        </CardContent></Card>
      </Grid>
    </Grid>
  );
}
