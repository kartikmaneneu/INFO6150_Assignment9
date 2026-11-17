import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutlineOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Footer from './Footer';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Jobs', '/jobs'],
  ['Contact', '/contact'],
  ['Companies', '/companies'],
];

export default function Layout() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="sticky" elevation={0} color="transparent" sx={{ bgcolor: 'rgba(255,255,255,.96)', borderBottom: '1px solid #e5e7eb' }}>
        <Toolbar sx={{ gap: 1 }}>
          <WorkOutlineIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6" sx={{ mr: { xs: 0, md: 3 }, fontWeight: 800, color: '#111827' }}>
            JobHub
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: .5 }}>
            {links.map(([label, path]) => (
              <Button component={NavLink} to={path} end={path === '/'} key={path}
                sx={{ color: '#4b5563', '&.active': { color: 'primary.main', bgcolor: '#eff6ff' } }}>
                {label}
              </Button>
            ))}
          </Box>
          <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ display: { xs: 'none', sm: 'block' }, color: '#6b7280' }}>
              {user?.fullName || user?.email || 'User'}
            </Typography>
            <Button variant="outlined" startIcon={<LogoutIcon />} onClick={handleLogout} size="small">
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ py: 5, flexGrow: 1 }}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
}
