import React from "react";
import { Card, CardContent, Typography, CardMedia, CardActionArea } from '@mui/material';


export default function ChiamakaCard() {

    return (

        <Card 
            sx={{ 
                maxWidth: 190, 
                backgroundColor: "#b0adfa",
                transition: '0.3s',
                '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 8px 20px rgb(76, 0, 255)',
                },
                borderRadius: '14px',
                overflow: 'hidden', 
            }}
        >
            <CardActionArea href="https://www.crunchyroll.com/series/GP5HJ84P7/gachiakuta?srsltid=AfmBOoqEVZ-ugZF324lsNdzXUU6AVzEKaxyn2smRwXuorLmh_UycFzLz">
                <CardMedia 
                    component="img"
                    height="160"
                    image="https://i.pinimg.com/474x/3a/f3/87/3af3873e475bd184d20c99bf0fdc5f1a.jpg"
                    alt="poly bunny with headset"

                    sx={{
                        transition: '0.3s',
                        '&:hover': {
                            transform: 'scale(1.1)',
                        },
                    }}
                >    
                </CardMedia>
            </CardActionArea>
            
            <CardContent className ="cardContentStyle" style={{ backgroundColor: "#b0adfa" }}>
                <Typography gutterBottom id="cardText" style={{ fontSize: 'large', fontWeight: 'bold', color: "#000000", textAlign: "center"}}>
                    Chiamaka Okoro
                </Typography>
                <Typography variant="body2" style={{color: "#000000", textAlign: "center"}}>
                    Hii! ≽^•⩊•^≼ I'm a 2nd year CM major!
                </Typography>
            </CardContent>
        </Card>

    );
}

// TODO 1.0: Read the following instructions
// 1. In the components folder, create a new file called yournameCard.js
// 2. Copy the code from starterCode.js into yournameCard.js
// 3. Put your name in the function name (i.e. yourNameCard)
// 4. Add your own code to the function
// 5. Add your component to the practice.js file that is in the pages folder
// 6. Once you're done with TODO 1.0, go to practice.js and complete TODO 2.0 and TODO 3.0

//in function:
// TODO 1.1: Add your own code here
// I'm returning a div here because you need to return something, or else you'll get an error. 
// You should replace this with your own code/delete the div when you're done
// Visit https://mui.com/material-ui/all-components/ to see all the components you can use
// You can also look at joshCard.js for an example of how to use MUI components
// Have fun! Spice up your card however you want!