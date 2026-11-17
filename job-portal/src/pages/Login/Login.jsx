import { useState } from 'react';
import { Alert, Box, Button, Card, CardContent, CircularProgress, TextField, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate(location.state?.from?.pathname || '/', { replace: true });
    } catch (requestError) {
      if (!requestError.response) {
        setError('Unable to reach the login service. Make sure the Assignment 8 server is running.');
      } else {
        setError(requestError.response?.data?.error || 'Invalid email or password.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center', px: 2 }}>
      <Card sx={{ width: '100%', maxWidth: 420, boxShadow: '0 20px 50px rgba(37,99,235,.12)' }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>Welcome back</Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>Sign in to explore opportunities.</Typography>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          <Box component="form" onSubmit={handleSubmit}>
            <TextField fullWidth required label="Email" type="email" margin="normal" value={email}
              onChange={(event) => setEmail(event.target.value)} autoComplete="email" />
            <TextField fullWidth label="Password" type="password" margin="normal" value={password}
              onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" />
            <Button fullWidth size="large" variant="contained" type="submit" startIcon={<LoginIcon />} sx={{ mt: 3 }} disabled={loading}>
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign in'}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
