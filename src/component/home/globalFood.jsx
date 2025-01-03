import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import agro from '../../assets/image/homepage/agro_img.png';
import mapimage from '../../assets/image/homepage/mapimage.webp';

const GlobalFood = () => {
    return (
        <Box sx={{ padding: { xs: "30px 15px", sm: "50px 20px" }, backgroundColor: "#f9f9f9" }}>
            <Container>
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    sx={{
                        fontWeight: "400",
                        fontSize: { xs: "20px", sm: "25px", md: "30px" },
                        textAlign: "center"
                    }}
                >
                    RATAN HOUSE: <span style={{ color: "#27ae60", fontWeight: 100 }}>GLOBAL FOOD IMPORTERS & EXPORTERS</span>
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography
                        sx={{
                            marginBottom: "30px",
                            fontSize: { xs: "14px", sm: "15px" },
                            color: "#7f8c8d",
                            textAlign: "center",
                            width: { xs: "90%", sm: "80%", md: "70%" }
                        }}
                    >
                        Established in March 2014, Ratan House has quickly become a trusted name in the global food industry.
                        With a mission to provide top-quality food services, we have positioned ourselves as leading exporters
                        of diverse agricultural products, catering to a wide range of global markets.
                    </Typography>
                </Box>

                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={6}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography
                                component="img"
                                src={agro}
                                sx={{
                                    width: "100%",
                                    maxWidth: "550px",
                                    borderRadius: "10px",
                                    objectFit: "cover"
                                }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography
                                component="img"
                                src={mapimage}
                                sx={{
                                    width: "100%",
                                    maxWidth: "550px",
                                    borderRadius: "10px",
                                    objectFit: "cover"
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default GlobalFood;
