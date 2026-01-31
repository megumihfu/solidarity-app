import Button from './Button';
import { Link } from "react-router-dom";

const NavBar = () => {
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
          <Link to="/login">
            <Button isPrimary={false}>Login</Button>
          </Link>
          <Link to="/register">
            <Button isPrimary={true}>Register</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
