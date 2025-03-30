import { AppBar, Toolbar, IconButton } from '@mui/material';
import AccountTreeIcon from '@mui/icons-material/AccountTree'; // Logo icon

const Header = () => (
  <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0, zIndex: 1000 }}>
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="logo" id="header-logo">
        <AccountTreeIcon sx={{ fontSize: 40 }} /> {/* Logo icon */}
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;