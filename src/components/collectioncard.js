import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";
import Button from "@mui/material/Button";
import "../styles/components/collectioncard.css";

import { Link } from "gatsby";

/**
 * This component is used in projects.js to display categories
 * of interviews. It uses the MUI card component and contains 
 * an image, title, blurb, and link pulled from Drupal.
 * @returns the card 
 */
export default function CollectionCard(props) {

  return (
    <Card sx={{ maxWidth: '40vw' }}>
      <CardMedia
        component="img"
        img
        height="240"
        width="350"
        objectFit='cover'
        src={"https://empathybytes.library.gatech.edu" + props.image}
        alt="img"
      />
      <CardContent className="collectionCard">
        <h5 className="collectionTitle">{props.title}</h5>
        <div className="collectionText" dangerouslySetInnerHTML={{ __html: props.body }} />
      </CardContent>
      <CardActions className="collectionCard">
        <Link to={"/collections" + props.url}>
          <Button size="small" style={{color: 'lightgray'}}>
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}