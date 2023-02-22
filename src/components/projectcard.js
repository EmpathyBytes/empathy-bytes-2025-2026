// import React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";

// /**
//  * Creates a Project component in the form of a card with 
//  * set height and width that uses the title and featured image 
//  * of a WordPress post and links to a page containing the prop post.
//  * @returns the card 
//  */
// export default function Project(props) {

//   return (
//     <Card sx={{ maxWidth: 380 }}>
//       <CardMedia
//         component="img"
//         img
//         height="240"
//         width="240"
//         objectFit='cover'
//         src={props.image}
//         alt="img"
//       />
//       <CardActions>
//         <Button href={"/post/" + props.url}
//           size="small">
//           {props.title}
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }