import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

const DogPlaceholder = () => {
   return (
      <Box
         sx={{
            display: "flex",
            width: "100%",
            height: "calc(100vh - 120px)",
            flexDirection: "column",
            bgcolor: "background.paper",
            alignItems: "center",
         }}
      >
         <ImageList
            variant="woven"
            cols={5}
            gap={8}
            sx={{ overflowY: "hidden", width: 650, height: 350 }}
         >
            {itemData.map((item) => (
               <ImageListItem key={item.img}>
                  <img
                     src={`${item.img}?w=161&fit=crop&auto=format`}
                     srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                     alt={item.title}
                     loading="lazy"
                  />
               </ImageListItem>
            ))}
         </ImageList>
         <Typography variant="subtitle2">
            Todas las imágenes utilizadas corresponden a{"  "}
            <Link
               href="https://dog.ceo/dog-api/"
               underline="hover"
               target="_blank"
               rel="noopener"
               variant="subtitle1"
            >
               Dog API
            </Link>
         </Typography>
      </Box>
   );
};

export default DogPlaceholder;

const itemData = [
   {
      img: "https://images.dog.ceo/breeds/australian-shepherd/sadie.jpg?w=248&fit=crop&auto=format",
      title: "Australian",
   },
   {
      img: "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_6539.jpg?w=248&fit=crop&auto=format",
      title: "Corgi",
   },
   {
      img: "https://images.dog.ceo/breeds/mix/Sydney_Aussiedoodle_11_weeks_sml.jpg?w=248&fit=crop&auto=format",
      title: "Aussiedoodle",
   },
   {
      img: "https://images.dog.ceo/breeds/poodle-toy/Cookie.jpeg?w=248&fit=crop&auto=format",
      title: "Poodle Toy",
   },
   {
      img: "https://images.dog.ceo/breeds/shiba/shiba-19.jpg?w=248&fit=crop&auto=format",
      title: "Shiba",
   },
];
