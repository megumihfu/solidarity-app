import Button from './Button';

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
          <span
            className="text-xl font-black tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Solidarity
            <span style={{ color: 'var(--accent-primary)' }}>App</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Button isPrimary={false}>Login</Button>
          <Button isPrimary={true}>Register</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
