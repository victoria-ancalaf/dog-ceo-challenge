import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import DogList from "../DogList";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PetsIcon from "@mui/icons-material/Pets";
import DogImages from "../DogImages";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 220;

const Home = (props) => {
   const { window } = props;
   const [mobileOpen, setMobileOpen] = useState(false);
   const [allBreeds, setAllBreeds] = useState(null);
   const [selectedBreed, setSelectedBreed] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      getData();
   }, []);

   async function getData() {
      await axios("https://dog.ceo/api/breeds/list/all")
         .then((response) => {
            setAllBreeds(response.data.message);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setLoading(false);
         });
   }

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   const drawer = (
      <Box>
         <DogList allBreeds={allBreeds} loading={loading} setSelectedBreed={setSelectedBreed} />
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
               <Toolbar />
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
               <Toolbar />
               {drawer}
            </Drawer>
         </Box>
         <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
         >
            <Toolbar />
            <DogImages selectedBreed={selectedBreed} />
         </Box>
      </Box>
   );
};

Home.propTypes = {
   window: PropTypes.func,
};

export default Home;
