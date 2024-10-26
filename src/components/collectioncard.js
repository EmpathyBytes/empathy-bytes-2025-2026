import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";
import { CardActionArea } from '@mui/material';
import "../styles/components/collectioncard.css";
import useMediaQuery from '@mui/material/useMediaQuery';

import { Link } from "gatsby";

/**
 * This component is used in projects.js to display categories
 * of interviews. It uses the MUI card component and contains 
 * an image, title, blurb, and link pulled from Drupal.
 * @returns the card
 */
export default function CollectionCard(props) {
  const matches = useMediaQuery('(min-width:600px)');

  if (matches) { //desktop
    return (
      <Card sx={{ maxWidth: '40vw', borderRadius: "40px"}}>
        <Link style={{ textDecoration: 'none' }} to={"/projects" + props.url}>
            <CardActionArea>
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
            </CardActionArea>
          </Link>
        
      </Card>
    );

  } else {
    return ( //mobile
      <Card sx={{ width: '80vw',  margin: '5% auto'}}>
        <Link style={{textDecoration:"none"}} to={"/projects" + props.url}>
          <CardActionArea>
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
          </CardActionArea>
        </Link>
        
        
      </Card>
    );
  }
}