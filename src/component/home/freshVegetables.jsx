import React from 'react';
import { Grid, Typography, Button, Box, Container } from '@mui/material';
import img from '../../assets/image/homepage/banner_bg_5.jpg'
import logo from '../../assets/image/home/freshVagetables.jsx/logo.png'
import {useNavigate} from "react-router-dom";

const FreshVegetables = () => {

    const navigate = useNavigate();

    return (
        <Box sx={{ backgroundColor: '#f5f5f5' , position: "relative", overflow: "hidden" , margin: {md:"0 15px" , xs:"0"} }}>
            <Container>

                <Box sx={{
                margin: {xs:"0" , sm:"0 50px" , md:"0"},
                }}>
                    <img
                        src={logo}
                        alt="Logo"
                        style={{
                            width: '100px',
                            height: 'auto',

                        }}
                    />

                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box sx={{
                                padding:"85px 0 120px",
                                backgroundSize:"cover",
                            }}>
                                <Box sx={{ margin: "0 0 20px" }}>
                                    <Typography
                                        sx={{
                                            color: "#c6c820",
                                            fontWeight: "bold",
                                            fontSize: { sm: "60px", xs: "45px" },
                                            lineHeight: "1",
                                        }}
                                    >
                                        Fresh Organic Vegetables
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        color="textSecondary"
                                        gutterBottom
                                        sx={{
                                            marginBottom: "1rem",
                                            fontSize: {sm: "55px", md: "60px", xs: "45px" },
                                            fontWeight:"100",
                                            lineHeight: "1",
                                        }}
                                    >
                                        Directly from Our Farm
                                    </Typography>
                                </Box>

                                <Typography
                                    variant="body1"
                                    color="textSecondary"
                                    sx={{
                                        marginBottom: '2rem',
                                        margin:"25px 0",
                                        fontSize:"14px",
                                }}
                                >
                                    Discover a wide range of premium organic vegetables grown with the
                                    highest standards of quality and sustainability. Our farm-fresh
                                    produce is delivered straight to your table, ensuring you get the
                                    best of nature's bounty.
                                </Typography>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    sx={{
                                        padding: '1rem 2.5rem',
                                        borderColor: '#c1a72d',
                                        color: '#c1a72d',
                                        fontWeight: 'bold',
                                        borderRadius: '50px',
                                        fontSize:"12px",
                                        transition:"0.5px",
                                        '&:hover': {
                                            backgroundColor: '#f8c311',
                                            color: '#fff',
                                        },
                                    }}
                                    onClick={() => navigate('/products/vegetables')}
                                >
                                    Shop Now
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{
                    padding:"85px 0 120px",
                    backgroundImage: `url(${img})`,
                    height:"100%",
                    width:"100%",
                    backgroundRepeat:"no-repeat",
                    display:{xs:"none" , md:"flex"},
                    position:"absolute",
                    top:"0",
                    left:"51%",
                    Zindex: "-1",
                }}/>
            </Container>
        </Box>
    );
};

export default FreshVegetables