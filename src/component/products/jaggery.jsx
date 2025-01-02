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
import bg12 from '../../assets/image/Rice/img1.png';
import bg13 from '../../assets/image/Rice/img2.jpg';
import bg14 from '../../assets/image/Rice/img3.png';
import bg15 from '../../assets/image/flour/img1.png';
import bg16 from '../../assets/image/flour/img2.png';
import bg17 from '../../assets/image/flour/img3.png';
import bg18 from '../../assets/image/vegetables/img1.jpg';
import bg19 from '../../assets/image/vegetables/img2.jpg';
import bg20 from '../../assets/image/sweet corns/img1.png';
import bg21 from '../../assets/image/sweet corns/img2.png';
import bg22 from '../../assets/image/sweet corns/img3.png';
import bg23 from '../../assets/image/pulses/img1.jpg';
import bg24 from '../../assets/image/pulses/img2.png';
import bg25 from '../../assets/image/pulses/img3.jpg';
import bg26 from '../../assets/image/pulses/img4.jpg';
import bg27 from '../../assets/image/pulses/img5.jpg';
import bg28 from '../../assets/image/pulses/img6.jpg';
import bg29 from '../../assets/image/pulses/img7.jpg';
import bg30 from '../../assets/image/pulses/img8.png';
import bg31 from '../../assets/image/pulses/img9.png';
import bg32 from '../../assets/image/pulses/img10.jpg';

function Jaggery({name}) {
    const products =
        [
            {
            url: 'jaggery',
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
        },
            {
            url: 'rice',
            items: [
                {
                    img: bg12,
                    title: "Rice IR 64",
                    description: "Rice",
                },
                {
                    img: bg13,
                    title: "Non Basmati",
                    description: "Rice",
                },
                {
                    img: bg14,
                    title: "Basmati Rice",
                    description: "Rice",
                },

            ]
        },
            {
            url: 'wheat-flour',
            items: [
                {
                    img: bg15,
                },
                {
                    img: bg16,
                },
                {
                    img: bg17,
                },

            ]
        },
            {
            url: 'vegetables',
            items: [
                {
                    img: bg18,
                    title: "Potato",
                    description: "Vegetables",
                },
                {
                    img: bg19,
                    title: "Onion",
                    description: "Vegetables",
                },

            ]
        },
            {
            url: 'sweet-corns',
            items: [
                {
                    img: bg20,
                },
                {
                    img: bg21,
                },
                {
                    img: bg22,
                },

            ]
        },
            {
            url: 'pulses',
            items: [
                {
                    img: bg23,
                    title: "Chickpeas / Garbanzo Beans",
                    description: "Pulses",
                },
                {
                    img: bg24,
                    title: "Peas",
                    description: "Pulses",
                },
                {
                    img: bg25,
                    title: "Kidney beans",
                    description: "Pulses",
                },
                {
                    img: bg26,
                    title: "Soya bean",
                    description: "Pulses",
                },
                {
                    img: bg27,
                    title: "Black-eyed beans / Cowpea",
                    description: "Pulses",
                },
                {
                    img: bg28,
                    title: "Horse gram",
                    description: "Pulses",
                },
                {
                    img: bg29,
                    title: "Masoor Dal / Red Lentil",
                    description: "Pulses",
                },
                {
                    img: bg30,
                    title: "Green gram / Mung bean",
                    description: "Pulses",
                },
                {
                    img: bg31,
                    title: "Chana Dal",
                    description: "Pulses",
                },
                {
                    img: bg32,
                    title: "Urad Dal Split",
                    description: "Pulses",
                },
            ]
        }
        ]

const singleProducts = products.find((item)=>(item.url === name))

    return (
        <>
            <Box sx={{padding: {md: "140px 0", xs: "70px 0"}, position: "relative"}}>
                <Container>
                    <Grid container spacing={4}>
                        {singleProducts?.items?.map((item, index) => (
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
                                            fontWeight: "700",
                                            transition: ".5s",
                                            '&:hover': {
                                                color: "#f8c311",
                                            }
                                        }}>
                                            {item.title}
                                        </Box>
                                        <Box sx={{
                                            textAlign: "start",
                                            lineHeight: "1.4",
                                            fontWeight: "400",
                                            fontSize: "14px"
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
