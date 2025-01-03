import { Box, Container, Typography } from '@mui/material';
import React from 'react';

function HeroSection({ backgroundImage, title, subtitle, textColor, height, width }) {
    return (
        <Box
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                width: width || "100%",
                // height: height || "auto",
                py: { xs: 10, sm: 18 },
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
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
                            mb: 2,
                        }}
                    >
                        {subtitle}
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '35px', sm: '50px'},
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            width: {sm:"450px", xs:"250px"}
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default HeroSection;
