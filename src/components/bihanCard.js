// Standard import statement needed for all React components
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// TODO 1.0: Read the following instructions
// 1. In the components folder, create a new file called yournameCard.js
// 2. Copy the code from starterCode.js into yournameCard.js
// 3. Put your name in the function name (i.e. yourNameCard)
// 4. Add your own code to the function
// 5. Add your component to the practice.js file that is in the pages folder
// 6. Once you're done with TODO 1.0, go to practice.js and complete TODO 2.0 and TODO 3.0

export default function BihanCard() {

    return (

        // TODO 1.1: Add your own code here
        // I'm returning a div here because you need to return something, or else you'll get an error. 
        // You should replace this with your own code/delete the div when you're done
        // Visit https://mui.com/material-ui/all-components/ to see all the components you can use
        // You can also look at joshCard.js for an example of how to use MUI components
        // Have fun! Spice up your card however you want!
        <Card sx={{ maxWidth: 200 }}>
            <CardActionArea href="https://open.spotify.com/user/comeatmeskrub?si=8b36ff002584464f">
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'rgb(49, 21, 4)', fontSize: 29, fontFamily: 'Georgia' }}>Bihan</Typography>
                    <Box sx={{ backgroundColor: '#000000ff', borderRadius: 3, p: 1, mb: 1.5 }}>
                        <Typography sx={{ color: '#ffffffff', fontFamily: 'Georgia' }}>
                            this cat is me :3
                        </Typography>
                    </Box>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://i.pinimg.com/736x/c1/b7/f8/c1b7f823b7455d3bf29f613866b30bb2.jpg"
                        alt="music cat"
                    />
                    <Typography variant="body3" sx={{ color: 'rgba(31, 7, 49, 1)', fontFamily: 'Georgia' }}>
                        Hi everyone! I'm a second year CS Major :)
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    );
}