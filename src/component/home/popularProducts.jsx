import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import PopularProducts1 from "../../assets/image/homepage/PopularProducts1.png";
import PopularProducts2 from "../../assets/image/homepage/PopularProducts2.png";
import PopularProducts3 from "../../assets/image/homepage/PopularProducts3.png";
import PopularProducts4 from "../../assets/image/homepage/PopularProducts4.jpg";
import PopularProducts5 from "../../assets/image/homepage/PopularProducts5.jpg";
import PopularProducts6 from "../../assets/image/homepage/PopularProducts6.png";
import PopularProducts7 from "../../assets/image/homepage/PopularProducts7.jpg";
import PopularProducts8 from "../../assets/image/homepage/PopularProducts8.png";

import banner_crops from "../../assets/image/homepage/banner_crops.png";
import banner_spices from "../../assets/image/homepage/banner_spices.png";
import bg5 from "../../assets/image/products/img5.jpg";
import bg6 from "../../assets/image/products/img6.jpg";
import bg7 from "../../assets/image/products/img7.jpg";
import bg8 from "../../assets/image/products/img8.jpg";
import bg9 from "../../assets/image/products/img9.jpg";

const PopularProducts = () => {
    const product = [
        { image: PopularProducts1, title: "Rice IR 64", subtitle: "Rice" },
        { image: PopularProducts2, title: "Sweet Corns", subtitle: "Sweet Corns" },
        { image: PopularProducts3, title: "Jaggery Powder", subtitle: "Jaggery And Molasses" },
        { image: PopularProducts4, title: "Onion", subtitle: "Vegetables" },
        { image: PopularProducts5, title: "Non Basmati", subtitle: "Rice" },
        { image: PopularProducts6, title: "Jaggery", subtitle: "Jaggery And Molasses" },
        { image: PopularProducts7, title: "Potato", subtitle: "Vegetables" },
        { image: PopularProducts8, title: "Molasses", subtitle: "Jaggery And Molasses" },
    ];

    return (
        <Box sx={{position: 'relative'}}>
            <Box sx={{ padding: "140px 0" }}>
                <Box
                    sx={{
                        margin: { lg: "0 163px", md: "0 100px", sm: "0 50px", xs: "0 22px" },
                        padding: "0 15px",
                        overflow: "hidden",
                    }}
                >
                    <Container>
                        <Box>
                            <Typography
                                sx={{
                                    display: "flex",
                                    gap: "15px",
                                    fontSize: { xs: "28px", sm: "36px", lg: "40px" },
                                    color: "#333333",
                                    fontWeight: "900",
                                    textTransform: "uppercase",
                                    flexWrap: "wrap",
                                }}
                            >
                                Popular
                                <Typography
                                    sx={{
                                        fontSize: { xs: "28px", sm: "36px", lg: "40px" },
                                        fontWeight: "100",
                                    }}
                                >
                                    Products
                                </Typography>
                            </Typography>
                        </Box>

                        <Box sx={{ position: "relative", pt: 5 }}>
                            <Grid container spacing={3}>
                                {product.map((item, index) => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                        <Box
                                            sx={{
                                                height: "100%",
                                                width: "100%",
                                                border: "1px solid #e5e5e5", // Consistent border
                                                overflow: "hidden",
                                                ":hover": {
                                                    boxShadow: "0 0 10px rgba(80, 79, 79, 0.28)",
                                                    transition: ".3s",
                                                },
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    padding: "20px",
                                                }}
                                            >
                                                <Typography
                                                    component="img"
                                                    src={item.image}
                                                    sx={{ width: "11pc" }}
                                                />
                                            </Box>
                                            <Box
                                                sx={{
                                                    padding: "5px 30px 35px",
                                                    textAlign: "center",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: "16px",
                                                        color: "#333333",
                                                        fontWeight: "bold",
                                                        ":hover": { color: "#F8C311", transition: ".3s" },
                                                        cursor: "pointer",
                                                        textAlign: "start",
                                                        margin: "0 0 5px",
                                                    }}
                                                >
                                                    {item.title}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        color: "#666666",
                                                        fontSize: "14px",
                                                        textAlign: "start",
                                                    }}
                                                >
                                                    {item.subtitle}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Container>
                </Box>
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
                    top: "55%",
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
                    top: "18%",
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
                    top: "55%",
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
                    top: "35%",
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

            <Box sx={{ p: "0 10px" }}>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <Typography
                                component="img"
                                src={banner_crops}
                                sx={{
                                    width: "100%",
                                    maxWidth: "100%",
                                    height: "auto",
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <Typography
                                component="img"
                                src={banner_spices}
                                sx={{
                                    width: "100%",
                                    maxWidth: "100%",
                                    height: "auto",
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default PopularProducts;
