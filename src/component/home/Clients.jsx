import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
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

    return (
        <Box
            sx={{
                padding: "140px 0",
                backgroundImage: `url(${Img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                textAlign: "center",
                position: "relative",
            }}
        >
            <Box
                sx={{
                    margin: {
                        xl: "0 365px",
                        lg: "0 151px",
                        md: "0 130px",
                        sm: "0 65px",
                        xs: "0",
                    },
                    padding: "0 15px",
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: "40px",
                        fontWeight: "900",
                        textTransform: "uppercase",
                        textAlign: "center",
                        marginBottom: "30px",
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
                        }}
                    >
                        Say <br /> About Us
                    </Typography>
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        maxWidth: "900px",
                    }}
                >
                    <Swiper
                        pagination={true}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        padding: "20px",
                                        textAlign: "left",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontStyle: "italic",
                                            fontSize: "18px",
                                            color: "#555",
                                            marginBottom: "15px",
                                            fontFamily: "Times New Roman !notimportant"
                                        }}
                                    >
                                        "{slide.des}"
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                        }}
                                    >
                                        <Avatar
                                            src={slide.img}
                                            alt={slide.name}
                                            sx={{ width: 70, height: 70 }}
                                        />
                                        <Typography
                                            sx={{
                                                fontWeight: "bold",
                                                fontSize: "18px",
                                                color: "#333",
                                            }}
                                        >
                                            {slide.name}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "18px",
                                                color: "#333",
                                            }}
                                        >
                                            /
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "16px",
                                                color: "#777",
                                            }}
                                        >
                                            {slide.class}
                                        </Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
                <Box
                    sx={{
                        fontSize: "100px",
                        position: "absolute",
                        color: "#F8C311",
                        top: "44%",
                        left: { xl: "17%", lg: "5%", md: "5%", sm: "3%" },
                        display: { xs: "none", sm: "unset" },
                        letterSpacing:"1px"
                    }}
                >
                    ❛❛
                </Box>
            </Box>

            <style>
                {`
                    .swiper-pagination {
                        position: absolute;
                        top: 50%;
                        right: 0; /* Align to the right side */
                        transform: translateY(-50%); /* Vertically center the dots */
                        padding-right: 10px; /* Add some space from the right edge */
                    }
                    
                    .swiper-pagination-bullet {
                        width: 10px; /* Dot size */
                        height: 10px; /* Dot size */
                        background-color: transparent; /* Default dot color */
                        opacity: 0.8; /* Slight opacity */
                        margin: 0 6px; /* Space between dots */
                        border: 1px solid #000; /* Border for better visibility */
                        transition: transform 0.3s ease, background-color 0.3s ease; /* Smooth transitions */
                    }
                    
                    .swiper-pagination-bullet-active {
                        background-color: #F8C311 !important; /* Active dot color */
                        transform: scale(1); /* Slightly larger active dot */
                        opacity: 1; /* Fully opaque */
                    }
                `}
            </style>
        </Box>
    );
}

export default Clients;
