import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import JobListings from './pages/JobListings/JobListings';
import Contact from './pages/Contact/Contact';
import CompanyShowcase from './pages/CompanyShowcase/CompanyShowcase';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<JobListings />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/companies" element={<CompanyShowcase />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
