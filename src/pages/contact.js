import React from "react";
import Layout from "../components/layout";
import {
    Box,
    Container,
    Grid,
    TextField,
    Button,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../styles/contactPage.css";

const navyBlue = "#003057";
const techGold = "#b3a369";
const white = "#ffffff";

function ContactPage() {

    const faqs = [
        {
            question: "How do I apply?",
            answer: (
                <span>
          To register for a VIP at Georgia Tech as an undergraduate, please follow this link:{" "}
                    <a style={{color: techGold}} href="https://www.vip.gatech.edu/apply-undergraduate-students">
            https://www.vip.gatech.edu/apply-undergraduate-students
          </a>
        </span>
            )
        },
        {
            question: "Can I be on many teams?",
            answer: "Yes! If you want to be on more than one team per semester, make sure to pick the 2-3 credit option."
        },
        {
            question: "Is this for Georgia Tech students only?",
            answer: "Yes. Masters and undergrads."
        },
        {
            question: "Can I join as a freshman?",
            answer: "Please wait until your Sophomore year."
        }
    ];

    return (
        <Layout>
            <Box sx={{
                bgcolor: "#004B87",
                minHeight: "100vh",
                paddingTop: "150px",
                paddingBottom: "5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>

                {/* Page Title */}
                <Typography variant="h2" sx={{
                    fontFamily: "'Roboto Slab', serif",
                    color: white,
                    fontWeight: "bold",
                    marginBottom: "3rem",
                    textAlign: "center"
                }}>
                    Contact US
                </Typography>

                {/* --- CONTACT FORM CARD --- */}
                <Container maxWidth="md">
                    <Box sx={{
                        bgcolor: navyBlue,
                        borderRadius: "30px",
                        padding: { xs: 3, md: 6 },
                        boxShadow: "0px 10px 30px rgba(0,0,0,0.3)"
                    }}>
                        <Typography variant="h4" sx={{
                            fontFamily: "'Roboto Slab', serif",
                            color: techGold,
                            textAlign: "center",
                            marginBottom: 4
                        }}>
                            Let’s Talk!
                        </Typography>

                        {/* Form Start */}
                        <form noValidate autoComplete="off">
                            <Grid container spacing={3}>

                                {/* First Name */}
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        placeholder="First name*"
                                        variant="outlined"
                                        sx={{ bgcolor: white, borderRadius: 1 }}
                                        inputProps={{ style: { padding: '15px' } }} // Adjust height
                                    />
                                </Grid>

                                {/* Last Name */}
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        placeholder="Last name"
                                        variant="outlined"
                                        sx={{ bgcolor: white, borderRadius: 1 }}
                                        inputProps={{ style: { padding: '15px' } }}
                                    />
                                </Grid>

                                {/* Email */}
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        placeholder="Email*"
                                        variant="outlined"
                                        sx={{ bgcolor: white, borderRadius: 1 }}
                                        inputProps={{ style: { padding: '15px' } }}
                                    />
                                </Grid>

                                {/* Phone Number */}
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        placeholder="Phone Number"
                                        variant="outlined"
                                        sx={{ bgcolor: white, borderRadius: 1 }}
                                        inputProps={{ style: { padding: '15px' } }}
                                    />
                                </Grid>

                                {/* Message */}
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={6}
                                        placeholder="Your message..."
                                        variant="outlined"
                                        sx={{ bgcolor: white, borderRadius: 1 }}
                                    />
                                </Grid>

                                {/* Submit Button */}
                                <Grid item xs={12}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{
                                            bgcolor: techGold,
                                            color: white,
                                            padding: "1rem",
                                            fontWeight: "bold",
                                            fontSize: "1rem",
                                            textTransform: "none",
                                            borderRadius: "5px",
                                            '&:hover': {
                                                bgcolor: "#c9a74e" // Slightly darker gold for hover
                                            }
                                        }}
                                    >
                                        Send Message
                                    </Button>
                                </Grid>

                            </Grid>
                        </form>
                    </Box>
                </Container>

                {/* --- FAQ SECTION --- */}
                <Container maxWidth="md" sx={{ marginTop: "4rem" }}>
                    <Typography variant="h4" sx={{
                        fontFamily: "'Roboto Slab', serif",
                        color: techGold,
                        textAlign: "center",
                        marginBottom: 3
                    }}>
                        Frequently Asked Questions
                    </Typography>

                    <Box sx={{
                        bgcolor: navyBlue,
                        borderRadius: "15px",
                        overflow: "hidden",
                        padding: 2
                    }}>
                        {faqs.map((faq, index) => (
                            <Accordion
                                key={index}
                                disableGutters
                                elevation={0}
                                sx={{
                                    bgcolor: "transparent",
                                    color: white,
                                    borderBottom: index !== faqs.length - 1 ? "1px solid rgba(255,255,255,0.2)" : "none",
                                    '&:before': { display: 'none' },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: techGold }} />}
                                    sx={{ padding: "1rem" }}
                                >
                                    <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                                        {faq.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ padding: "0 1rem 1.5rem 1rem" }}>
                                    <Typography sx={{ color: "#d1d1d1" }}>
                                        {faq.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </Container>

            </Box>
        </Layout>
    );
}

export default ContactPage;

export const Head = () => (
    <>
        <link rel="icon" type="image/png" href="https://educast.library.gatech.edu/static/empbytes-8c9db7ee75f110e619f7d85cb8b170c5.jpg" />
        <title>Contact Us</title>
    </>
);