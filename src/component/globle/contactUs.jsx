import {Box, Container, Typography} from '@mui/material';
import React from 'react';
import bgimg from '../../assets/image/contact/contact_banner.webp';

function ContactUs(backgroundImage, title, subtitle, textColor) {
    return (
        <>
            <Box sx={{
                backgroundImage: `url(${backgroundImage})`,
                width: "100%",
                py: {xs: 10, sm: 18},
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "start",
                color: {textColor},
            }}>
                <Container>
                    <Box>
                        <Typography variant="inherit" sx={{
                            fontSize: {xs: '30px', sm: '42px'},
                            fontWeight: 100,
                            textTransform: 'uppercase',
                            mb: 2,
                        }}>
                            {title}
                        </Typography>
                        <Typography variant="h1" sx={{
                            fontSize: {xs: '35px', sm: '50px'},
                            fontWeight: 800,
                            textTransform: 'uppercase',
                        }}>
                            {subtitle}
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default ContactUs
