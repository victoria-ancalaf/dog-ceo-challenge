import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import DogPlaceholder from "../DogPlaceholder";

const DogImages = ({ selectedBreed }) => {
   if (!selectedBreed) {
      return <DogPlaceholder />;
   }

   return (
      <Box
         sx={{
            width: "100%",
            height: "100%",
            overflowY: "scroll",
            bgcolor: "background.paper",
         }}
      >
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
