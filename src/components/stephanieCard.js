// Standard import statement needed for all React components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from "react";

// TODO 1.0: Read the following instructions
// 1. In the components folder, create a new file called yournameCard.js
// 2. Copy the code from starterCode.js into yournameCard.js
// 3. Put your name in the function name (i.e. yourNameCard)
// 4. Add your own code to the function
// 5. Add your component to the practice.js file that is in the pages folder
// 6. Once you're done with TODO 1.0, go to practice.js and complete TODO 2.0 and TODO 3.0

export default function StephanieCard() {

    return (

        // TODO 1.1: Add your own code here
        // I'm returning a div here because you need to return something, or else you'll get an error. 
        // You should replace this with your own code/delete the div when you're done
        // Visit https://mui.com/material-ui/all-components/ to see all the components you can use
        // You can also look at joshCard.js for an example of how to use MUI components
        // Have fun! Spice up your card however you want!
        <Card sx={{ maxWidth: 190, borderRadius: 2}}>
            <CardActionArea href="https://i.pinimg.com/1200x/8f/dd/cd/8fddcd84cfb99ba98bec485a9362b1e7.jpg">
                <CardMedia
                    component="img"
                    height="160"
                    image="https://i.pinimg.com/1200x/3d/93/f7/3d93f77e9c44d9e8b5486d7f8a740ff1.jpg"
                    alt="picture of silly "
                />
                <CardContent className="cardContentStyle" style={{ backgroundColor: "#ffffff" }}>
                    <Typography gutterBottom id="cardText" style={{ fontSize: 'large', fontFamily: 'Courier New', color: "#000000", textAlign: "center"}}>Stephanie Wu</Typography>
                    <Typography variant="body2" style={{color: "#000000", fontFamily: 'Courier New', textAlign: "center"}}>
                        third year cm major :)
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}