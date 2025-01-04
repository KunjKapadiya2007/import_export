import React from 'react';
import { Box, Container, Typography } from "@mui/material";
import 'swiper/css';
import 'swiper/css/pagination';


function OurPartners() {


    return (
        <Box sx={{ padding: "140px 0", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Container maxWidth="lg">

                <Box>
                    <Typography
                        variant="h1"
                        component="h2"
                        sx={{ fontSize: "40px", fontWeight: 900, textAlign: "center", color: "#333333" }}
                    >
                        Our Partners
                    </Typography>
                    <Box
                        sx={{
                            textAlign: "center",
                            color: "#B3B3B3",
                            marginTop: "25px",
                            fontSize: "18px",
                        }}
                    >
                        We collaborate with trusted partners to deliver the highest quality <br />
                        agricultural products worldwide.
                    </Box>
                </Box>


            </Container>


        </Box>
    );
}

export default OurPartners;
