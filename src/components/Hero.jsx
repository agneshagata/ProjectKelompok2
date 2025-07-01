import '../assets/CSS/Hero.css';
import CosmicType from './Cosmictype';
import { Link } from 'react-router-dom'; 
import { useContext } from 'react';
import { AuthContext } from '../pages/Login&SignUpPage/authContext';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleExplore = () => {
    if (user) {
      navigate('/articles');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="hero-container" id="hero">
      <div className="hero-content">
        <CosmicType text="🛰 Booting up Nebulix Core AI..." speed={50} />
        <h1 className="hero-title">Latest Cosmic Reads</h1>
        <p className="hero-subtitle">Explore the universe of knowledge, one article at a time.</p>
        <button className="hero-button" onClick={handleExplore}>
          Start Exploring
        </button>
      </div>
    </div>
  );
}

export default Hero;


