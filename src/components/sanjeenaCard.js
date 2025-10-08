// Standard import statement needed for all React components
import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
// TODO 1.0: Read the following instructions
// 1. In the components folder, create a new file called yournameCard.js
// 2. Copy the code from starterCode.js into yournameCard.js
// 3. Put your name in the function name (i.e. yourNameCard)
// 4. Add your own code to the function
// 5. Add your component to the practice.js file that is in the pages folder
// 6. Once you're done with TODO 1.0, go to practice.js and complete TODO 2.0 and TODO 3.0

export default function sanjeenaCard() {

    return (
        <Card 
            sx={{ 
                maxWidth: 190,
                transition: '0.3s',
                '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                },
                borderRadius: '15px',
                overflow: 'hidden',
            }}
        >
            <CardContent 
                sx={{ 
                    backgroundColor: "#005f56",
                    background: 'linear-gradient(45deg, #005f56, #008075)',
                    padding: '16px',
                }}
            >
                <Typography 
                    gutterBottom 
                    id="cardText" 
                    sx={{ 
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: '8px',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                    }}
                >
                    Sanjeena Shrestha
                </Typography>
                <Typography 
                    variant="body2"
                    sx={{ 
                        color: 'rgba(255,255,255,0.9)',
                        fontSize: '0.9rem',
                        lineHeight: 1.4,
                    }}
                >
                    Hello! I'm Sanjeena a 2nd Year CM Major!
                </Typography>
            </CardContent>
        </Card>
    );
}