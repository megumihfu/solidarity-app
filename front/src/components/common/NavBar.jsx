import Button from './Button';
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from '../../context/AuthContext';

const NavBar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        background: 'var(--bg-primary)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <span
              className="text-xl font-black tracking-tight cursor-pointer"
              style={{ color: 'var(--text-primary)' }}
            >
              Solidarity
              <span style={{ color: 'var(--accent-primary)' }}>App</span>
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <span
                className="text-base font-bold tracking-wide"
                style={{ color: 'var(--text-primary)' }}
              >
                Welcome,&nbsp;
                <span style={{ color: 'var(--accent-primary)' }}>
                  {user?.userName || user?.email} 
                </span>
                 &nbsp;!
              </span>

              <Button variant='primary' onClick={handleLogout}>
                <FiLogOut />
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant='secondary'>Login</Button>
              </Link>
              <Link to="/register">
                <Button variant='primary'>Register</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
