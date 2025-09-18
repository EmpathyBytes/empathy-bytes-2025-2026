// Standard import statement needed for all React components
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import pic from "/src/images/katyreact.jpg"


// TODO 1.0: Read the following instructions
// 1. In the components folder, create a new file called yournameCard.js
// 2. Copy the code from starterCode.js into yournameCard.js
// 3. Put your name in the function name (i.e. yourNameCard)
// 4. Add your own code to the function
// 5. Add your component to the practice.js file that is in the pages folder
// 6. Once you're done with TODO 1.0, go to practice.js and complete TODO 2.0 and TODO 3.0

export default function katyCard() {

    return (

         
        <Card sx={{ maxWidth: 190, borderRadius: "16px"}}>
            <CardActionArea href="https://www.youtube.com/shorts/9JnGuLUvE4A">
                <CardMedia
                component="img"
                height="180"
                image={pic}
                alt="Katy Pic"
                sx={{
                objectFit: "cover",
                transition: "0.3s ease-in-out",
                "&:hover": {filter: "brightness(1.1)", },
                }}
                />
                <CardContent sx={{
                background: "linear-gradient(135deg, #00bfa6, #005f56)",
                color: "white",
                textAlign: "center",
                p: 2,
                }}
                >
                    <Typography variant="h6"
                        sx={{
                        fontWeight: 700,
                        letterSpacing: "0.5px",
                        mb: 1,
                        }}
                        >
                        Katy Kim
                    </Typography>
                    <Typography variant="body2">
                        Nice to meet you all!
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        

        // TODO 1.1: Add your own code here
        // I'm returning a div here because you need to return something, or else you'll get an error. 
        // You should replace this with your own code/delete the div when you're done
        // Visit https://mui.com/material-ui/all-components/ to see all the components you can use
        // You can also look at joshCard.js for an example of how to use MUI components
        // Have fun! Spice up your card however you want!
        

    );
}