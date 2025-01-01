import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import bg1 from '../../assets/image/products/img1.png';
import bg2 from '../../assets/image/products/img2.png';
import bg3 from '../../assets/image/products/img3.png';
import bg4 from '../../assets/image/products/img4.png';
import bg5 from '../../assets/image/products/img5.jpg';
import bg6 from '../../assets/image/products/img6.jpg';
import bg7 from '../../assets/image/products/img7.jpg';
import bg8 from '../../assets/image/products/img8.jpg';
import bg9 from '../../assets/image/products/img9.jpg';
import bg10 from '../../assets/image/products/img10.png';
import bg11 from '../../assets/image/products/img11.png';

function Jaggery(props) {
    const products =
        {
            url: 'jaggery_molasses',
            items: [
                {
                    img: bg1,
                    title: "Jaggery",
                    description: "Jaggery And Molasses",
                },
                {
                    img: bg2,
                    title: "Jaggery Cube",
                    description: "Jaggery And Molasses",
                },
                {
                    img: bg3,
                    title: "Jaggery Powder",
                    description: "Jaggery And Molasses",
                },
                {
                    img: bg4,
                    title: "Molasses",
                    description: "Jaggery And Molasses",
                },
            ]
        }

    // const products = [
    //
    // ];

    return (
        <>
            <Box sx={{padding: {md: "140px 0", xs: "70px 0"}, position: "relative"}}>
                <Container>
                    <Grid container spacing={4}>
                        {products.map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box
                                    sx={{
                                        border: "1px solid #B0B0B0",
                                        transition: ".5s",
                                        '&:hover': {
                                            background: "rgba(255, 255, 255, 0.1)",
                                            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.17)",
                                            backdropFilter: "blur(0px)",
                                            WebkitBackdropFilter: "blur(0px)",
                                            border: "1px solid rgba(255, 255, 255, 0.18)",
                                        },
                                    }}
                                >
                                    <Box sx={{
                                        height: {sm: "180px", xs: "150px"},
                                        width: {sm: "180px", xs: "150px"},
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        margin: {
                                            lg: "60px 89px 60px 89px",
                                            md: "38px 54px 38px 54px",
                                            sm: "55px 74px",
                                            xs: "60px 60px"
                                        },

                                    }}>
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{
                                        padding: "5px 30px 35px",
                                    }}>
                                        <Box sx={{
                                            marginBottom: "5px",
                                            textAlign: "start",
                                            fontSize: "16px",
                                            fontWeight: "700px",
                                        }}>
                                            {item.title}
                                        </Box>
                                        <Box sx={{
                                            textAlign: "start",
                                            lineHeight: "1.4",
                                            fontWeight: "400",
                                            fontSize: "1.4rem"
                                        }}>
                                            {item.description}
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Box sx={{
                    position: "absolute",
                    left: " 9%",
                    top: "30%",
                    bottom: "0%",
                    width: "99px",
                    height: "88px",
                    backgroundImage: `url(${bg5})`,
                    backgroundRepeat: "no-repeat",
                    objectFit: "cover",
                    backgroundPosition: "center",
                    zIndex: -1,
                    display: {xs: "none", lg: "unset"},
                    backgroundSize: "cover"
                }}/>
                <Box sx={{
                    position: "absolute",
                    left: " 0%",
                    top: "68%",
                    bottom: "0%",
                    width: "286px",
                    height: "280px",
                    backgroundImage: `url(${bg6})`,
                    backgroundRepeat: "no-repeat",
                    objectFit: "cover",
                    backgroundPosition: "center",
                    zIndex: -1,
                    display: {xs: "none", lg: "unset"},
                    backgroundSize: "cover"
                }}/>
                <Box sx={{
                    position: "absolute",
                    right: " 8%",
                    top: "13%",
                    bottom: "0%",
                    width: "115px",
                    height: "117px",
                    backgroundImage: `url(${bg7})`,
                    backgroundRepeat: "no-repeat",
                    objectFit: "cover",
                    backgroundPosition: "center",
                    zIndex: -1,
                    display: {xs: "none", lg: "unset"},
                    backgroundSize: "cover"
                }}/>
                <Box sx={{
                    position: "absolute",
                    right: " 0%",
                    top: "63%",
                    bottom: "0%",
                    width: "248px",
                    height: "309px",
                    backgroundImage: `url(${bg8})`,
                    backgroundRepeat: "no-repeat",
                    objectFit: "cover",
                    backgroundPosition: "center",
                    zIndex: -1,
                    display: {xs: "none", lg: "unset"},
                    backgroundSize: "cover"
                }}/>
                <Box sx={{
                    position: "absolute",
                    right: " 9%",
                    top: "38%",
                    bottom: "0%",
                    width: "95px",
                    height: "85px",
                    backgroundImage: `url(${bg9})`,
                    backgroundRepeat: "no-repeat",
                    objectFit: "cover",
                    backgroundPosition: "center",
                    zIndex: -1,
                    display: {xs: "none", lg: "unset"},
                    backgroundSize: "cover"
                }}/>
            </Box>

            <Box>
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    width: "100%",
                                }}
                            >
                                <img
                                    src={bg10}
                                    alt="Image 11"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    width: "100%",
                                }}
                            >
                                <img
                                    src={bg11}
                                    alt="Image 11"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </>


    );
}

export default Jaggery;
