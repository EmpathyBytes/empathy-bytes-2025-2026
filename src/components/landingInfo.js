import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import teampic from "../images/homepage/teampic.jpg";
import "../styles/components/landingInfo.css"
import Icon from "../images/homepage/next-page-icon.png"

   
export default function LandingCardInfo() {
    return (
      <Box sx={{ minWidth: '20vw' }}>
        <React.Fragment>
            <CardContent className="card">
                <Typography variant="h1" component="div" className="header">
                    What Is Empathy Bytes?
                </Typography>
                <Typography variant="body1" className="content">
                <p>
                Empathy Bytes is a student run research project focused on creating immersive technology and media centered around empathy. 
                We think outside traditional modes of communication and documentation to create radical and unique experiences. 
                Our research currently focuses on identifying and presenting distinct communities connected to Georgia Tech.</p>
                </Typography>
    
                <CardActions>
                    <Button className="button">Learn More<img src={ Icon}></img></Button>
                    
                </CardActions>
                
            </CardContent>
        </React.Fragment>
        
    
      </Box>
    );
  }