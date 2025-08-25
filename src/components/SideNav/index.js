import React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Root = styled('div')({
  display: 'flex',
});

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.0)',
  boxShadow: 'none',
}));

const ToolbarSpacer = styled('div')(({ theme }) => theme.mixins.toolbar);

function SideNav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <ToolbarSpacer />
      <List>
        <ListItem component={Link} to="/" className="nav-link">
          <ListItemText primary="Home" className="nav-text" />
        </ListItem>
        <ListItem component={Link} to="/production-engineering" className="nav-link">
          <ListItemText primary="Portfolio" className="nav-text" />
        </ListItem>
        <ListItem component={Link} to="/research" className="nav-link">
          <ListItemText primary="Research" className="nav-text" />
        </ListItem>
        <ListItem component={Link} to="/bio" className="nav-link">
          <ListItemText primary="About" className="nav-text" />
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <AppBarStyled position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dale Shack
          </Typography>
        </Toolbar>
      </AppBarStyled>
      <nav>
        {/* Temporary Drawer for All Screen Sizes */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#45464A',
              color: '#fafafa',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Root>
  );
}

export default SideNav;