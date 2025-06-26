import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Articles from './components/Article.jsx';
import Footer from './components//Footer';
import { ThemeProvider } from './theme/ThemeContext.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ShootingStars from './components/ShootingStars.jsx';
import ConstellationCanvas from './components/ConstellationCanvas';
import Signup from './pages/Login&SignUpPage/Signup.jsx';
import Login from './pages/Login&SignUpPage/Login.jsx';
import { AuthProvider } from './pages/Login&SignUpPage/authContext';
import PrivateRoute from './pages/Login&SignUpPage/PrivateRoute.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlackholeLoader from './components/BlackholeLoader.jsx';
import RouteChangeLoader from './components/RouteChangeLoader.jsx';
import ArticlesPage from './pages/ArticlesPage/ArticlePage.jsx';
import UserProfile from './pages/UserProfile/UserProfile.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import CursorGlow from './components/CursorGlow.jsx';
import PortfolioJasswant from './pages/Portofolio/PortofolioJasswant/PortofolioJasswant.jsx';
import PortfolioAlfrido from './pages/Portofolio/PortofolioAlfrido/PortofolioAlfrido.jsx';
import PortfolioAgnes from './pages/Portofolio/PortofolioAgnes/PortofolioAgnes.jsx';
function App() {
  document.title = "Nebulix";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <BlackholeLoader />;
  }

  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <RouteChangeLoader>
            <div className="app">
              <CursorGlow />
              <ConstellationCanvas />
              <ShootingStars />
              <Navbar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <Articles />
                      <Footer />
                    </>
                  }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                  path="/articles"
                  element={
                    <PrivateRoute>
                      <ArticlesPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <PrivateRoute>
                      <UserProfile />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/aboutus"
                  element={
                    <PrivateRoute>
                      <AboutUs />
                    </PrivateRoute>
                  }
                />
                <Route
                path='/jasswant' element={<PortfolioJasswant />}
                />
                <Route
                path='/alfrido' element={<PortfolioAlfrido />}
                />
                <Route
                path='/agnes' element={<PortfolioAlfrido />}
                />
              </Routes>
              
            </div>
          </RouteChangeLoader>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
