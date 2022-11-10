import React, { useState } from "react";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PetsIcon from "@mui/icons-material/Pets";

const DogList = ({ allBreeds, loading, setSelectedBreed }) => {
   
   const [checked, setChecked] = useState([0]);

   if (loading) {
      return (
         <IconButton
            sx={{
               width: "100%",
               display: "flex",
               justifyContent: "center",
               alignContent: "center",
            }}
            color="secondary"
         >
            <PetsIcon fontSize="large" />
         </IconButton>
      );
   }

   const listAllBreeds = Object.keys(allBreeds);

   const handleToggleSelectedDog = (value) => async () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      try {
         const response = await axios.get(`https://dog.ceo/api/breed/${value}/images`);
         setSelectedBreed(response.data.message);
      } catch (error) {
         console.error(error);
      }

      if (currentIndex === -1) {
         newChecked.push(value);
      } else {
         newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
   };

   

   return (
      <Box sx={{ height: "100%" }}>
         <List sx={{ width: "100%", maxWidth: 220, bgcolor: "background.paper" }}>
            {listAllBreeds.map((breed) => {
               const labelId = `checkbox-list-label-${breed}`;

               return (
                  <ListItem key={breed} disablePadding>
                     <ListItemButton
                        role={undefined}
                        onClick={handleToggleSelectedDog(breed)}
                        dense
                     >
                        <ListItemIcon>
                           <Checkbox
                              edge="start"
                              checked={checked.indexOf(breed) !== -1}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ "aria-labelledby": labelId }}
                           />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={breed} />
                     </ListItemButton>
                  </ListItem>
               );
            })}
         </List>
      </Box>
   );
};

export default DogList;
