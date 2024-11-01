import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../styles/components/infocard.css"
import Icon from "../images/homepage/next-page-icon.png"
import { Link } from "gatsby"

/**
 * This component is for quick infomation and a link to learn more about the related subject
 * @param {*} props the parameter for setting the title, body, and link
 * @returns the infocard
 */
function InfoCard(props) {
    return (
      <div className="card-wrapper">
        <Box>
          <React.Fragment>
            <Card className="card">
              <CardContent className="card-content">
                  <Typography variant="h1" component="div" className="header">
                      {props.title}
                  </Typography>
                  <Typography variant="body1" className="content">
                      {props.body}
                  </Typography>
                  
              </CardContent>
            </Card>
          </React.Fragment>
        </Box>
      </div>
    );
  }
  export default InfoCard