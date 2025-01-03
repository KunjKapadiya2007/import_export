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

                <Box sx={{ display: "flex" }}>
                    <Box
                        sx={{
                            fontSize: { sm: "80px", lg: "100px" },
                            color: "#F8C311",
                            letterSpacing: "1px",
                        }}
                    >
                        ❛❛
                    </Box>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop={true}
                        pagination={{
                            clickable: true,
                            renderBullet: (index, className) => (
                                `<span class="${className}"></span>`
                            ),
                        }}
                        spaceBetween={30}
                        style={{ maxWidth: "960px" }}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        justifyContent: "space-between",
                                        textAlign: "left",
                                        padding: "20px",
                                        gap: "20px",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontStyle: "italic",
                                            fontSize: "18px",
                                            marginBottom: "15px",
                                            color: "#555",
                                            maxWidth: "100%",
                                        }}
                                    >
                                        "{slide.des}"
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "15px",
                                        }}
                                    >
                                        <Avatar
                                            src={slide.img}
                                            alt={slide.name}
                                            sx={{ width: 70, height: 70 }}
                                        />
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "10px",
                                            }}
                                        >
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
                                                    color: "#777",
                                                    fontWeight: 400,
                                                }}
                                            >
                                                / {slide.class}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
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
