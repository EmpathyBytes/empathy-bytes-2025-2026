import React from "react";
import FlexibleCard from "./FlexibleCard";
/**
 * A wrapper component that maps CMS project data to a FlexibleCard format.
 * * This component specifically handles the concatenation of the base URL for 
 * images and the routing prefix for project links.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The display title for the collection card.
 * @param {string} props.body - The description text (rendered as HTML).
 * @param {string} props.image - The relative file path for the image (e.g., '/sites/default/files/...').
 * @param {string} props.url - The relative project slug (e.g., '/web-history').
 * * @returns {JSX.Element} A configured FlexibleCard instance with 'collection' variant.
 */

export default function CollectionCard(props) {
    return (
      <Card sx={{borderRadius: "40px"}}>
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