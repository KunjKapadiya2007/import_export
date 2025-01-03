import React, { useState, useEffect } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import Img from "../../assets/image/home/Clients/img1.png";
import Img1 from "../../assets/image/home/Clients/img2.png";
import Img2 from "../../assets/image/home/Clients/img3.png";
import Img3 from "../../assets/image/home/Clients/img4.avif";

function Clients() {
    const slides = [
        {
            des:
                "We have sourced agricultural products from Ratan House for years. Their quality and timely deliveries are unmatched, and the support team is always helpful.",
            img: Img1,
            name: "Rohit Sharma",
            class: "Export Manager",
        },
        {
            des:
                "Ratan House has been an invaluable partner in our business. Their wide range of products and commitment to sustainability align perfectly with our values.",
            img: Img2,
            name: "Anita Desai",
            class: "Procurement Specialist",
        },
        {
            des:
                "Working with Ratan House has been a smooth experience. Their certificates and documentation are always in order, ensuring a hassle-free process every time.",
            img: Img3,
            name: "Vikram Patel",
            class: "Logistic Coordinator",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "140px 0",
                backgroundImage: `url(${Img})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "8px",
            }}
        >
            <Box
                sx={{
                    margin: {
                        lg: "0 160px",
                        md: "0 100px",
                        sm: "0 80px",
                        xs: "0",
                        xl: "0 355px",
                    },
                    padding: "0 15px",
                }}
            >
                <Box sx={{ marginBottom: "30px" }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: "40px",
                            fontWeight: "900",
                            textTransform: "uppercase",
                            textAlign: "center",
                        }}
                    >
                        What Our Clients{" "}
                        <Typography
                            component="span"
                            sx={{
                                fontWeight: 100,
                                fontSize: "40px",
                                paddingLeft: "15px",
                                color: "#333333",
                                textAlign: "center",
                            }}
                        >
                            Say <br /> About Us
                        </Typography>
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        maxWidth: "960px",
                        position: "relative",
                    }}
                >

                    <Box
                        sx={{
                            position: "absolute",
                            top: "-35%",
                            left: "-10%",
                            fontSize: {sm:"80px", md: "80px", lg: "100px" },
                            color: "#F8C311",
                            letterSpacing: "1px",
                        }}
                    >
                        ❛❛
                    </Box>

                    <Typography
                        sx={{
                            fontStyle: "italic",
                            fontSize: "18px",
                            marginBottom: "15px",
                            color: "#555",
                        }}
                    >
                        "{slides[currentIndex].des}"
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
                            <Avatar
                                src={slides[currentIndex].img}
                                alt={slides[currentIndex].name}
                                sx={{ width: 70, height: 70 }}
                            />
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Typography
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "16px",
                                        color: "#333",
                                    }}
                                >
                                    {slides[currentIndex].name}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "16px",
                                        color: "#333",
                                        marginLeft: "5px",
                                    }}
                                >
                                    /
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        color: "#777",
                                        marginLeft: "5px",
                                    }}
                                >
                                    {slides[currentIndex].class}
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                gap: "10px",
                                marginLeft: "-10px",
                                position: "relative",
                            }}
                        >
                            {slides.map((_, index) => (
                                <Box
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    sx={{
                                        width: "10px",
                                        height: "10px",
                                        borderRadius: "50%",
                                        backgroundColor:
                                            currentIndex === index ? "#f9b233" : "#ccc",
                                        cursor: "pointer",
                                    }}
                                ></Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Clients;
