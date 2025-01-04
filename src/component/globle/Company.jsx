import React from 'react';
import {Box, Container} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import img1 from "../../assets/image/about/our partners/img1.jpg";
import img2 from "../../assets/image/about/our partners/img2.jpg";
import img3 from "../../assets/image/about/our partners/img3.jpg";
import img4 from "../../assets/image/about/our partners/img4.jpg";
import img5 from "../../assets/image/about/our partners/img5.jpg";


function Company() {

    const images = [
        { image: img1 },
        { image: img2 },
        { image: img3 },
        { image: img4 },
        { image: img5 },
    ];

    return (
        <Box sx={{padding:"0 0 140px 0"}}>
            <Box>
                <Container maxWidth="lg">
                    <Box sx={{ marginTop: "40px", display: { xs: "none", lg: "block" } }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "space-around",
                            }}
                        >
                            {images.map((item, index) => (
                                <Box key={index} sx={{ margin: "10px" }}>
                                    <img
                                        src={item.image}
                                        alt={`Partner-${index}`}
                                        style={{
                                            height: "auto",
                                            width: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Box sx={{ marginTop: "40px", marginBottom: "20px", display: { lg: "none" } }}>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        600: {
                            slidesPerView: 3,
                        },
                        900: {
                            slidesPerView: 4,
                        },
                    }}
                    style={{
                        paddingBottom: "50px",
                    }}
                >
                    {images.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Box sx={{ margin: "10px", display: "flex", justifyContent: "center" }}>
                                <img
                                    src={item.image}
                                    alt={`Partner-${index}`}
                                    style={{
                                        height: "120px",
                                        width: "auto",
                                        objectFit: "contain",
                                    }}
                                />
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>


            <style>
                {`
                    .swiper-pagination-bullet {
                        width: 10px; /* Dot size */
                        height: 10px; /* Dot size */
                        background-color: #ccc; /* Default dot color */
                        opacity: 0.8; /* Slight opacity */
                        margin: 0 6px; /* Space between dots */
                        border: 1px solid #000; /* Border for better visibility */
                        transition: transform 0.3s ease, background-color 0.3s ease; /* Smooth transitions */
                    }

                    .swiper-pagination-bullet-active {
                        background-color: #F8C311 !important; /* Active dot color */
                        transform: scale(1.2); /* Slightly larger active dot */
                        opacity: 1; /* Fully opaque */
                    }
                `}
            </style>
        </Box>
    );
}

export default Company;