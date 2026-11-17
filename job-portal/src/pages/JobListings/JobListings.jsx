import { Box, Button, Card, CardContent, Chip, Grid, Stack, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { jobPosts } from '../../data/jobPosts';

export default function JobListings() {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontWeight: 900, mb: 1 }}>Open positions</Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>Explore roles from growing teams.</Typography>
      <Grid container spacing={3}>
        {jobPosts.map((job) => (
          <Grid size={{ xs: 12, md: 6 }} key={job.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ p: 3, flexGrow: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>{job.title}</Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>{job.description}</Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 2 }}>
                  {job.skills.map((skill) => <Chip label={skill} size="small" key={skill} />)}
                </Stack>
                <Typography sx={{ fontWeight: 700, color: 'primary.main' }}>{job.salary}</Typography>
                <Typography variant="caption" color="text.secondary">{job.lastUpdated}</Typography>
              </CardContent>
              <Box sx={{ px: 3, pb: 3 }}>
                <Button href={job.applyLink} target="_blank" rel="noreferrer" variant="outlined" endIcon={<OpenInNewIcon />}>
                  Apply now
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
