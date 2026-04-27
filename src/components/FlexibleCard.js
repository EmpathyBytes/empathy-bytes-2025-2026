import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
    Box
} from '@mui/material';

/**
 * A flexiblecard component that supports multiple layout variants (Collection, Interview, Info, Learn).
 * * This component automatically handles:
 * - Orientation shifts (Horizontal vs Vertical) based on variant.
 * - Conditional rendering of Gatsby Links vs standard static cards.
 * - HTML body parsing via dangerouslySetInnerHTML.
 * - Action button arrays for footer interactions.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {('collection'|'interview'|'info'|'learn')} [props.variant='info'] - Determines the layout, sizing, and hover animations of the card.
 * @param {string} props.title - The primary heading text for the card.
 * @param {string} [props.subtitle] - Secondary text displayed below the title (e.g., date or author).
 * @param {string} [props.image] - The source URL for the card's media.
 * @param {string} [props.body] - The main descriptive content. Can be plain text or a string of HTML.
 * @param {boolean} [props.isHtmlBody=false] - If true, the `body` prop will be rendered as HTML.
 * @param {string} [props.link] - If provided, the entire card becomes a Gatsby `Link` pointing to this path.
 * @param {Array<Object>} [props.actions] - An array of objects for footer buttons.
 * @param {string} props.actions[].label - The text to display on the button.
 * @param {string} props.actions[].url - The destination path for the button link.
 * @param {string} [props.className] - Optional CSS class for external styling overrides.
 * * @returns {JSX.Element} The rendered Material UI Card.
 */

const themeColors = {
    navy: "#003057",   // Card Background
    blue: "#004B87",   // Page Background / Accents
    gold: "#b3a369",   // Tech Gold (Borders)
    brightGold: "#E0BB56", // Hover Gold
    white: "#FFFFFF",
    textGray: "#EFEFEF" // Body text
};

const cardVariants = {
    collection: {
        orientation: 'vertical',
        sx: {
            borderRadius: "40px", //
            maxWidth: { xs: '80vw', md: '40vw' },
            transition: 'transform 0.2s ease',
            '&:hover': { transform: 'scale(1.02)' }
        },
        titleStyle: { fontSize: "1.65rem", marginTop: "3%", marginBottom: "5%" },
        imageHeight: 240,
    },

    interview: {
        orientation: 'horizontal',
        sx: {
            borderRadius: "20px",
            maxWidth: "900px",
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 20px rgba(70, 150, 233, 0.2)'
            }
        },
        imageStyle: {
            width: 150,
            height: 150,
            borderRadius: "15px",
            border: `3px solid ${themeColors.brightGold}`,
            objectFit: 'cover',
            flexShrink: 0
        },
        titleStyle: { color: themeColors.brightGold, fontSize: "1.75rem", fontWeight: 600 },
    },

    info: {
        orientation: 'vertical',
        sx: {
            borderRadius: "1vw",
            padding: "2vw",
            maxWidth: "50vw",
            height: "auto",
            alignItems: "center"
        },
        titleStyle: { fontSize: "1.875rem", fontWeight: 700 },
    },

    learn: {
        orientation: 'vertical',
        sx: {
            borderRadius: "15px", //
            width: { xs: '92vw', md: 'auto' },
            maxWidth: "100vw",
            textAlign: "center"
        },
        titleStyle: { fontSize: "30px", fontWeight: 700 },
    }
};


const FlexibleCard = ({
                          variant = "info",
                          title,
                          subtitle,
                          image,
                          body,
                          isHtmlBody = false,
                          link,
                          actions,
                          className
                      }) => {
    const preset = cardVariants[variant] || cardVariants.info;
    const isHorizontal = preset.orientation === 'horizontal';

    const contentJSX = (
        <CardContent sx={{
            flex: '1 0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            padding: isHorizontal ? '0 0 0 2rem' : '16px'
        }}>
            <Typography variant="h5" component="div" sx={{
                fontFamily: '"Roboto Slab", serif',
                color: themeColors.white,
                ...preset.titleStyle
            }}>
                {title}
            </Typography>

            {subtitle && (
                <Typography variant="subtitle2" sx={{ color: "#bdc7d4", mb: 1, fontFamily: '"Roboto", sans-serif' }}>
                    {subtitle}
                </Typography>
            )}

            {isHtmlBody ? (
                <Typography
                    variant="body1"
                    component="div"
                    sx={{
                        color: isHorizontal ? themeColors.textGray : themeColors.white,
                        fontFamily: '"Roboto", sans-serif',
                        lineHeight: 1.6
                    }}
                    dangerouslySetInnerHTML={{ __html: body }}
                />
            ) : (
                <Typography variant="body1" sx={{ color: themeColors.white, fontFamily: '"Roboto", sans-serif' }}>
                    {body}
                </Typography>
            )}
        </CardContent>
    );

    const mediaJSX = image && (
        <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={preset.imageStyle || {
                height: preset.imageHeight || 240,
                width: '100%',
                objectFit: 'cover'
            }}
        />
    );

    return (
        <Card
            className={className}
            sx={{
                bgcolor: themeColors.navy,
                color: themeColors.white,
                display: 'flex',
                flexDirection: isHorizontal ? { xs: 'column', md: 'row' } : 'column',
                alignItems: isHorizontal ? 'center' : 'stretch',
                ...preset.sx
            }}
        >
            {link ? (
                <CardActionArea
                    component={Link}
                    to={link}
                    sx={{
                        display: 'flex',
                        flexDirection: isHorizontal ? { xs: 'column', md: 'row' } : 'column',
                        alignItems: isHorizontal ? 'center' : 'stretch',
                        justifyContent: 'flex-start',
                        height: '100%',
                        p: isHorizontal ? 3 : 0
                    }}
                >
                    {mediaJSX}
                    {contentJSX}
                </CardActionArea>
            ) : (
                <>
                    {mediaJSX}
                    {contentJSX}
                </>
            )}

            {actions && (
                <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
                    {actions.map((btn, index) => (
                        <Button
                            key={index}
                            component={Link}
                            to={btn.url}
                            sx={{
                                borderRadius: "50px", //
                                bgcolor: themeColors.white,
                                color: themeColors.navy,
                                fontWeight: 'bold',
                                padding: "10px 30px",
                                '&:hover': {
                                    bgcolor: themeColors.brightGold,
                                    transition: "0.3s"
                                }
                            }}
                        >
                            {btn.label}
                        </Button>
                    ))}
                </CardActions>
            )}
        </Card>
    );
};

FlexibleCard.propTypes = {
    variant: PropTypes.oneOf(['collection', 'interview', 'info', 'learn']),
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    body: PropTypes.string,
    isHtmlBody: PropTypes.bool,
    link: PropTypes.string,
    actions: PropTypes.array,
    className: PropTypes.string
};

export default FlexibleCard;