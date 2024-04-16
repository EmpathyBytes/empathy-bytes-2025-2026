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
      <div className="card-wrapper">
        <Box sx={{ minWidth: '20vw' }}>
          <React.Fragment>
            <Card className="card">
              <CardContent className="card-content">
                  <Typography variant="h1" component="div" className="header">
                      {props.title}
                  </Typography>
                  <Typography variant="body1" className="content">
                      {props.body}
                  </Typography>
      
                  <CardActions>
                  
                    <Button className="button" onClick={() => btnLink(props.link)}>{props.btnTitle}<img src={Icon}>
                      </img>
                    </Button>
                  
                      
                      
                  </CardActions>
                  
              </CardContent>
            </Card>
          </React.Fragment>
        </Box>
      </div>
    );
  }
  export default LandingCardInfo