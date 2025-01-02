import { Box, Container, Typography } from '@mui/material';
import React from 'react';

function ContactUs({ backgroundImage, title, subtitle, textColor, height, width }) {
    return (
        <Box
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                width: width || "100%",
                height: height || "auto",
                padding:{md:"144px 0",xs:"80px 0"},
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "start",
                color: textColor || "#fff",
            }}
        >
            <Container>
                <Box>
                    <Typography
                        variant="inherit"
                        sx={{
                            fontSize: { xs: '30px', sm: '42px' },
                            fontWeight: 100,
                            textTransform: 'uppercase',
                            // mb: 2,
                        }}
                    >
                        {subtitle}
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '35px', sm: '50px' },
                            fontWeight: 800,
                            textTransform: 'uppercase',
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default ContactUs;
