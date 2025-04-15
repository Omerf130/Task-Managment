import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  useColorScheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

const NAVIGATION_ROUTES = [
  [
    { label: "Home", route: "/", icon: <HomeIcon /> },
    { label: "Admin", route: "/admin", icon: <AdminPanelSettingsIcon /> },
    { label: "Projects", route: "/dashboard", icon: <DashboardIcon /> },
  ],
  [
    { label: "Login", route: "/login", icon: <LoginIcon /> },
    { label: "Register", route: "/register", icon: <AppRegistrationIcon /> },
    { label: "Logout", route: "/", icon: <LogoutIcon /> },
  ],
];

export const Nav = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const { t } = useTranslation();
  const { mode, setMode } = useColorScheme();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {NAVIGATION_ROUTES[0].map((routeItem) => (
          <ListItem key={routeItem.label} disablePadding>
            <ListItemButton
              component={NavLink}
              to={routeItem.route}
              sx={{
                "&.active": {
                  backgroundColor: "primary.main",
                  color: "white",
                },
              }}
            >
              <ListItemIcon>
                {routeItem.icon}
              </ListItemIcon>
              <ListItemText primary={routeItem.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {NAVIGATION_ROUTES[1].map((routeItem) => (
          <ListItem key={routeItem.label} disablePadding>
            <ListItemButton
              component={NavLink}
              to={routeItem.route}
              sx={{
                "&.active": {
                  backgroundColor: "primary.main",
                  color: "white",
                },
              }}
            >
              <ListItemIcon>
              {routeItem.icon}
              </ListItemIcon>
              <ListItemText primary={routeItem.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {t("NAV.APP_NAME")}
          </Typography>
        </Toolbar>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-theme-toggle"
            name="theme-toggle"
            row
            value={mode}
            onChange={(event) =>
              setMode(event.target.value as "light" | "dark")
            }
          >
            <FormControlLabel value="light" control={<Radio />} label="Light" />
            <FormControlLabel value="dark" control={<Radio />} label="Dark" />
          </RadioGroup>
        </FormControl>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
