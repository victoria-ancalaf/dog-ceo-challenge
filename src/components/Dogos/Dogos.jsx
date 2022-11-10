import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

const Dogos = () => {
   const [allBreeds, setAllBreeds] = useState(null);
   const [loading, setLoading] = useState(true);
   const [checked, setChecked] = useState([0]);

   useEffect(() => {
      getData();
   }, []);

   const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
         newChecked.push(value);
      } else {
         newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
   };

   async function getData() {
      await axios("https://dog.ceo/api/breeds/list/all")
         .then((response) => {
            setAllBreeds(response.data.message);
         })
         .catch((error) => {
            // handle error
            console.log(error);
         })
         .finally(() => {
            setLoading(false);
         });
   }

   if (loading) {
      return (
         <div>
            <h1>Cargando...</h1>
         </div>
      );
   }

   const listAllBreeds = Object.keys(allBreeds);
   console.log(listAllBreeds);

   return (
      <Box sx={{ bgcolor: "#cfe8fc", height: "100%" }}>
         <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
            {listAllBreeds.map((breed) => {
               const labelId = `checkbox-list-label-${breed}`;

               return (
                  <ListItem key={breed} disablePadding>
                     <ListItemButton role={undefined} onClick={handleToggle(breed)} dense>
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

export default Dogos;
