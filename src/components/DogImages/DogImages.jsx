import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";

const DogImages = ({ selectedBreed }) => {
   if (!selectedBreed) {
      return (
         <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <img src="dog-api-logo.svg" alt="Dog Ceo" width={80} height={80} />
            <Typography variant="h6">Selecciona una raza</Typography>
         </Box>
      );
   }

   return (
      <Box sx={{ width: "100%", height: "calc(100vh - 120px)", overflowY: "scroll" }}>
         <ImageList variant="masonry" cols={3} gap={8}>
            {selectedBreed &&
               selectedBreed.map((item) => (
                  <ImageListItem key={item + "dog"}>
                     <img
                        src={`${item}?w=248&fit=crop&auto=format`}
                        srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item}
                        loading="lazy"
                     />
                  </ImageListItem>
               ))}
         </ImageList>
      </Box>
   );
};

export default DogImages;
