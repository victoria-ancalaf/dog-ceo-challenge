import * as React from "react";
import PropTypes from "prop-types";
import Dogos from "./components/Dogos";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PetsIcon from "@mui/icons-material/Pets";
import DogImages from "./components/DogImages";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 220;

function App(props) {
   const { window } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   const drawer = (
      <Box>
         <Toolbar />
        <Dogos />
      </Box>
   );

   const container = window !== undefined ? () => window().document.body : undefined;

   return (
      <Box sx={{ display: "flex" }}>
         <CssBaseline />
         <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
               <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2, display: { xs: "none", sm: "flex" } }}
               >
                  <PetsIcon />
               </IconButton>
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
               >
                  <MenuIcon />
               </IconButton>
               <Typography
                  component="div"
                  sx={{ flexGrow: 1, typography: { xs: "body2", sm: "h6" } }}
               >
                  Dog CEO Challenge
               </Typography>
            </Toolbar>
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
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
               }}
               sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
               }}
            >
               {drawer}
            </Drawer>
            <Drawer
               variant="permanent"
               sx={{
                  display: { xs: "none", sm: "block" },
                  "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
               }}
               open
            >
               {drawer}
            </Drawer>
         </Box>
         <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
         >
            <Toolbar />
            <DogImages />
         </Box>
      </Box>
   );
}

App.propTypes = {
  window: PropTypes.func,
};

export default App;
