import { useEffect, useState } from 'react';
import { Alert, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import api from '../../api/axios';

const fallbackCompanies = [
  { id: 1, name: 'No uploaded company images yet' },
];

export default function CompanyShowcase() {
  const [companies, setCompanies] = useState(fallbackCompanies);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    let active = true;
    api.get('/user/images')
      .then(({ data }) => {
        if (!active) return;
        const items = data.images;
        if (Array.isArray(items) && items.length) {
          setCompanies(items.map((item, index) => ({
            ...item,
            id: item.id || item.imagePath || index,
            image: new URL(item.imagePath, api.defaults.baseURL).toString(),
          })));
        } else {
          setCompanies(fallbackCompanies);
        }
      })
      .catch(() => {
        if (active) setUsingFallback(true);
      });
    return () => { active = false; };
  }, []);

  return (
    <>
      <Typography variant="h3" sx={{ fontWeight: 900, mb: 1 }}>Company showcase</Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>Meet the teams hiring today.</Typography>
      {usingFallback && (
        <Alert severity="info" sx={{ mb: 3 }}>
          Company images are unavailable. Check that the Assignment 8 server is running.
        </Alert>
      )}
      <Grid container spacing={3}>
        {companies.map((company) => {
          const image = company.image;
          return (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={company.id || company.name}>
              <Card>
                {image ? (
                  <CardMedia component="img" height="180" image={image} alt={company.name} />
                ) : (
                  <BusinessIcon sx={{ display: 'block', width: '100%', height: 180, p: 7, bgcolor: '#eef2ff', color: 'primary.main' }} />
                )}
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 800 }}>{company.name}</Typography>
              </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
