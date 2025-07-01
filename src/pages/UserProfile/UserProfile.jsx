// src/components/UserProfile/UserProfile.jsx
import { useContext } from 'react';
import { AuthContext } from '../Login&SignUpPage/authContext';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login'; // langsung reload
  };

  return (
    <div className="user-profile-page">
      <div className="profile-card">
        <h2>Welcome, <span>{user?.username}</span> 🚀</h2>
        <p>You're logged in to Nebulix ✨</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default UserProfile;
