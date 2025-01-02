import React from 'react';
import {Box, Container, Typography, Grid} from "@mui/material";
import bgimg2 from '../../assets/image/about/house/img1.png';

function House() {
    const timelineData = [
        {
            name: "Established 2014",
            title: "A Trusted Foundation",
            description: "Since our inception, Ratan House has been committed to excellence in the agricultural sector. Our foundation is built on a promise of quality, reliability, and innovation in every aspect of our operations."
        },
        {
            name: "Global Expansion",
            title: "Expanding Our Reach",
            description: "Our strategic expansion into international markets has allowed us to build a robust network of partners and distributors, ensuring that our high-quality products are accessible to a global audience."
        },
        {
            name: "Sustainability Focus",
            title: "Commitment to Sustainability",
            description: "We are dedicated to sustainable agricultural practices, integrating advanced techniques and eco-friendly solutions to minimize our environmental footprint and promote long-term agricultural health."
        },
        {
            name: "Enhanced Capabilities",
            title: "Strengthened Supply Chain",
            description: "By acquiring regional farms and integrating new technologies, we have significantly enhanced our supply chain capabilities, ensuring a steady supply of diverse and high-quality agricultural products."
        }
    ];

    return (
        <>
            <Box sx={{
                padding: {md:"140px 0" , sm:"70px 0"},
                backgroundColor: "#F8C311",
                margin: {xs: "0", md: "0 20px"},
                position: "relative",
                overflow:"hidden"
            }}>
                <Container maxWidth={'lg'}>
                    <Box sx={{margin: {sm: "0 100px", xs: "0 15px", md: "0"}}}>
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontSize: {xs: "35px", sm: "40px"},
                                fontWeight: "900",
                                textTransform: "uppercase",
                            }}
                        >
                            Why Choose{" "}
                            <Typography
                                component="span"
                                sx={{
                                    fontWeight: "100",
                                    fontSize: {xs: "35px", sm: "40px"},
                                    paddingLeft: "15px",
                                    color: "#333333",
                                }}
                            >
                                Ratan House
                            </Typography>
                        </Typography>
                        <Grid container>
                            {timelineData.map((item, index) => (
                                <Grid item xs={12} md={3} key={index}>
                                    <Box
                                        sx={{
                                            display: {xs: "flex", md: "unset"},
                                            alignItems: {xs: "flex-start", md: "center"},
                                            position: "relative",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: {xs: "column", md: "row"},
                                                margin: {md: "60px 0 0 0", xs: "20px 0 0 0 "},
                                                alignItems: {xs: "flex-start", md: "center"},
                                                position: "relative",
                                            }}
                                        >
                                            <Box
                                                className="dot"
                                                sx={{
                                                    border: "1px solid #C6AD4D",
                                                    borderRadius: "50%",
                                                    padding: "6px",
                                                    position: "relative",
                                                    zIndex: 1,
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        width: "10px",
                                                        height: "10px",
                                                        backgroundColor: "#C6AD4D",
                                                        borderRadius: "50%",
                                                    }}
                                                />
                                            </Box>
                                            <Typography
                                                sx={{
                                                    border: "1px #C6AD4D solid",
                                                    width: {xs: "0px", md: "100%"},
                                                    height: {xs: "170px", md: "100%"},
                                                    position: {xs: "absolute", md: "relative"},
                                                    left: {xs: "45%", md: "unset"},
                                                    top: {xs: "100%", md: "unset"},
                                                    transform: {xs: "rotate(0deg)", md: "unset"},
                                                    zIndex: 0,
                                                }}
                                            />
                                        </Box>
                                        <Box
                                            sx={{
                                                marginRight: {xs: "10px", md: "50px"},
                                                padding: {md: "80px 0 0 0", xs: "20px 0 0 0 "},
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: 900,
                                                    fontSize: "30px",
                                                    color: "#333333",
                                                }}
                                            >
                                                {item.name}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    marginTop: "20px",
                                                    fontWeight: 700,
                                                    fontSize: "18px",
                                                    color: "#333333",
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    marginTop: "20px",
                                                    fontSize: "14px",
                                                    lineHeight: "1.5",
                                                    color: "#000000",
                                                }}
                                            >
                                                {item.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
                <Box
                    sx={{
                        position: "absolute",
                        left: {md:'80%' , xs:"20%"},
                        top: {md:'50%' , xs:"55%"},
                        bottom: 0,
                        width: "100%",
                        height:"100%",
                        backgroundImage: `url(${bgimg2})`,
                        backgroundRepeat: "no-repeat",
                        // backgroundSize: "cover",
                        // objectFit: "cover",
                        // backgroundPosition: "center",
                        zIndex: 1,
                        // display: {xs: "none", md: "unset"},
                    }}
                />
            </Box>

        </>
    );
}

export default House;
