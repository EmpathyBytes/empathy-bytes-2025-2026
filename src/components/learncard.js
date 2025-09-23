import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../styles/components/learncard.css"
import { Link } from "gatsby"

/**
 * This component is for the learn more section
 * @param {*} props the parameter for setting the title, body, and link
 * @returns the infocard
 */
function LearnCard(props) {
    return (
      <div className="card2-wrapper">
        <Box>
          <React.Fragment>
            <Card className="card2">
              <CardContent className="card2-content">
                  <Typography variant="h1" component="div" className="header">
                      {props.title}
                  </Typography>
                  <Typography variant="body1" className="content" >
                      {props.body}
                  </Typography>
                  
                  <CardActions >
                  <Link style={{ textDecoration: 'none'}} to={props.link}>
                    <Button className="button">
                      {props.btnTitle}
                      
                    </Button>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to={props.link2}>
                    <Button className="button">
                      {props.btnTitle2}
                      
                    </Button>
                    </Link>
                      
                  </CardActions>
              </CardContent>
            </Card>
          </React.Fragment>
        </Box>
      </div>
    );
  }
  export default LearnCard