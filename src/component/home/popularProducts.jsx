import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import PopularProducts1 from "../../assets/image/homepage/PopularProducts1.png";
import PopularProducts2 from "../../assets/image/homepage/PopularProducts2.png";
import PopularProducts3 from "../../assets/image/homepage/PopularProducts3.png";
import PopularProducts4 from "../../assets/image/homepage/PopularProducts4.jpg";
import PopularProducts5 from "../../assets/image/homepage/PopularProducts5.jpg";
import PopularProducts6 from "../../assets/image/homepage/PopularProducts6.png";
import PopularProducts7 from "../../assets/image/homepage/PopularProducts7.jpg";
import PopularProducts8 from "../../assets/image/homepage/PopularProducts8.png";

import Productsbgimg1 from "../../assets/image/homepage/Productsbgimg1.jpg";
import Productsbgimg2 from "../../assets/image/homepage/Productsbgimg2.jpg";
import Productsbgimg3 from "../../assets/image/homepage/Productsbgimg3.jpg";
import Productsbgimg4 from "../../assets/image/homepage/Productsbgimg4.jpg";
import Productsbgimg5 from "../../assets/image/homepage/Productsbgimg5.jpg";

import banner_crops from '../../assets/image/homepage/banner_crops.png'
import banner_spices from '../../assets/image/homepage/banner_spices.png'

const PopularProducts = () => {
    const product = [
        {
            image: PopularProducts1,
            title: "Rice IR 64",
            subtitle: "Rice",
        },
        {
            image: PopularProducts2,
            title: "Sweet Corns",
            subtitle: "Sweet Corns",
        },
        {
            image: PopularProducts3,
            title: "Jaggery Powder",
            subtitle: "Jaggery And Molasses",
        },
        {
            image: PopularProducts4,
            title: "Onion",
            subtitle: "Vegetables",
        },
        {
            image: PopularProducts5,
            title: "Non Basmati",
            subtitle: "Rice",
        },
        {
            image: PopularProducts6,
            title: "Jaggery",
            subtitle: "Jaggery And Molasses",
        },
        {
            image: PopularProducts7,
            title: "Potato",
            subtitle: "Vegetables",
        },
        {
            image: PopularProducts8,
            title: "Molasses",
            subtitle: "Jaggery And Molasses",
        },
    ];

    return (
        <Box>
            <Box sx={{ py: "140px" }}>
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
                                flexWrap: "wrap"
                            }}
                        >
                            Popular
                            <Typography sx={{ fontSize: { xs: "28px", sm: "36px", lg: "40px" }, fontWeight: "100" }}>
                                Products
                            </Typography>
                        </Typography>
                    </Box>

                    <Box sx={{ position: "relative" }}>
                        <Box sx={{ display: { lg: "block", xs: "none" } }}>
                            <Typography
                                component={"img"}
                                src={Productsbgimg1}
                                sx={{ width: 99, position: "absolute", zIndex: -1, top: "12%", left: "-3%" }}
                            ></Typography>
                        </Box>

                        <Box sx={{ display: { lg: "block", xs: "none" } }}>
                            <Typography
                                component={"img"}
                                src={Productsbgimg2}
                                sx={{ width: 99, position: "absolute", zIndex: -1, top: "-4%", right: "0" }}
                            ></Typography>
                        </Box>

                        <Box sx={{ display: { lg: "block", xs: "none" } }}>
                            <Typography
                                component={"img"}
                                src={Productsbgimg3}
                                sx={{ width: 99, position: "absolute", zIndex: -1, top: "33%", right: "1%" }}
                            ></Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "25px", pt: 5, justifyContent: "center" }}>
                            {product.map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: "255px",
                                        height: "317px",
                                        border: "1px solid #e5e5e5",
                                        ":hover": { boxShadow: "0 0 10px rgba(80, 79, 79, 0.28)", transition: ".3s" },
                                    }}
                                >
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <Typography
                                            component="img"
                                            src={item.image}
                                            sx={{ width: "11pc", margin: "20px" }}
                                        />
                                    </Box>
                                    <Box sx={{ padding: "5px 30px 35px" }}>
                                        <Typography
                                            sx={{
                                                fontSize: "16px",
                                                color: "#333333",
                                                fontWeight: "bold",
                                                ":hover": { color: "#F8C311", transition: ".3s" },
                                                cursor: "pointer",
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography sx={{ color: "#666666", fontSize: "14px" }}>
                                            {item.subtitle}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>

                        <Box sx={{ display: { lg: "block", xs: "none" } }}>
                            <Typography
                                component={"img"}
                                src={Productsbgimg4}
                                sx={{ width: "286px", position: "absolute", zIndex: -1, bottom: "0%", left: "-18%" }}
                            ></Typography>
                        </Box>

                        <Box sx={{ display: { lg: "block", xs: "none" } }}>
                            <Typography
                                component={"img"}
                                src={Productsbgimg5}
                                sx={{ width: "248px", position: "absolute", zIndex: -1, bottom: "-8%", right: "-10%" }}
                            ></Typography>
                        </Box>

                    </Box>
                </Container>

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
