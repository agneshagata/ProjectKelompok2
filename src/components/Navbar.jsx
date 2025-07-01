import '../assets/CSS/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../pages/Login&SignUpPage/authContext';

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();     
    navigate('/login'); 
  };

  return (
    <nav className="navbar">
      <div><h1 className="logo glow-text">Nebulix</h1></div>
      <ul className="nav-links">
        

        {!user ? (
          <>
            <li className="logo glow-text"><Link to="/">Home</Link></li>
            <li className="logo glow-text"><Link to="/articles">Articles</Link></li>
            <li className="logo glow-text"><Link to="/signup">Sign Up</Link></li>
            <li className="logo glow-text"><Link to="/login">Login</Link></li>
            <li className="logo glow-text"><Link to="/aboutus">About Us</Link></li>
          </>
        ) : (
          <>
            <li className="logo glow-text"><Link to="/">Home</Link></li>
            <li className="logo glow-text"><Link to="/articles">Articles</Link></li>
            <li className="logo glow-text"><Link to="/profile">Profile</Link></li>
            <li className="logo glow-text"><Link to="/aboutus">About Us</Link></li>
            <li className="logo glow-text">
  <a onClick={handleLogout} className="logout-link">Logout</a>
</li>

            
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
