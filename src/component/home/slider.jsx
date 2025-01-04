import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import {Box, Typography, Button, IconButton, Container, Grid} from "@mui/material";
import {EffectFade, Navigation, Autoplay} from "swiper/modules";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import sliderImage1 from "../../assets/image/homepage/sliderImage1.jpg";
import sliderImage2 from "../../assets/image/homepage/sliderImage2.png";
import sliderImage3 from "../../assets/image/homepage/sliderImage3.jpg";
import sliderImage4 from "../../assets/image/homepage/sliderImage4.png";

import jaggery from '../../assets/image/homepage/jaggery.png'
import rice from '../../assets/image/homepage/rice.png'
import wheat from '../../assets/image/homepage/wheat.png'
import {useNavigate} from "react-router-dom";

const Slider = () => {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    const [swiperInstance, setSwiperInstance] = React.useState(null);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (swiperInstance) {
            swiperInstance.params.navigation.prevEl = navigationPrevRef.current;
            swiperInstance.params.navigation.nextEl = navigationNextRef.current;
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    const sliderData = [
        {
            image: sliderImage1,
            title: "Exporting",
            highlightedText: "Quality",
            subtitle: "Agro Products",
            buttonText: "KNOW MORE",
            textColor: "black",
        },
        {
            image: sliderImage2,
            title: "Quatty",
            highlightedText: "Jaggery",
            subtitle: "from Ratan House",
            buttonText: "KNOW MORE",
            textColor: "white",
        },
        {
            image: sliderImage3,
            title: "Premium",
            highlightedText: "Grains and Cereal",
            subtitle: "from Ratan House",
            buttonText: "KNOW MORE",
            textColor: "black",
        },
        {
            image: sliderImage4,
            title: "Get the",
            highlightedText: "Quality Rice",
            highlightedText1: "Ratan House",
            subtitle: "from our",
            buttonText: "KNOW MORE",
            textColor: "white",
        },
    ];

    const products = [
        {
            image: jaggery,
            title: "Jaggery",
            subtitle: "Natural sweetness, pure goodness",
            path:"/products/jaggery",
        },
        {
            image: rice,
            title: "Rice",
            subtitle: "The foundation of every meal",
            path:"/products/rice",
        },
        {
            image: wheat,
            title: "Wheat Flour",
            subtitle: "The heart of wholesome baking",
            path:"/products/wheat-flour",
        },
    ];


    return (
        <Box sx={{mb: 9}}>
            <Box
                sx={{
                    width: "100%",
                    position: "relative",
                }}
            >
                <Swiper
                    spaceBetween={30}
                    effect="fade"
                    loop
                    modules={[EffectFade, Navigation, Autoplay]}
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    className="mySwiper"
                >
                    {sliderData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                sx={{
                                    height: {xs: 300, sm: 450, md: 600},
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundSize: "cover",
                                    position: "relative",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "100%",
                                        textAlign: "center",
                                        color: slide.textColor,
                                        px: 2,
                                    }}
                                >
                                    <Typography
                                        variant="inherit"
                                        sx={{
                                            mb: 5,
                                            fontSize: {xs: "1.5rem", sm: "2rem", md: "4.5rem"},
                                            display: "flex",
                                            flexWrap: "wrap",
                                            width: {xs: "18pc", sm: "22pc", md: "48pc"},
                                            justifyContent: "center",
                                            gap: "15px",
                                            fontWeight: 100,
                                            lineHeight: 1,
                                        }}
                                    >
                                        {slide.title}
                                        <Typography
                                            variant="inherit"
                                            sx={{
                                                fontWeight: "bold",
                                                fontSize: {xs: "1.5rem", sm: "2rem", md: "4.5rem"},
                                            }}
                                        >
                                            {slide.highlightedText}
                                        </Typography>
                                        {slide.subtitle}
                                        <Typography
                                            variant="inherit"
                                            sx={{
                                                fontWeight: "bold",
                                                fontSize: {xs: "1.5rem", sm: "2rem", md: "4.5rem"},
                                            }}
                                        >
                                            {slide.highlightedText1}
                                        </Typography>
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            border: "2px solid #f8c311",
                                            color: "#f8c311",
                                            fontWeight: "bold",
                                            borderRadius: "50px",
                                            p: {xs: "10px 20px", sm: "15px 30px"},
                                            "&:hover": {
                                                backgroundColor: "#f8c311",
                                                color: "white",
                                                transition: ".6s",
                                            },
                                        }}
                                        onClick={() => navigate("/about")}
                                    >
                                        {slide.buttonText}
                                    </Button>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <IconButton
                    ref={navigationPrevRef}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: 30,
                        transform: "translateY(-50%)",
                        zIndex: 10,
                        color: "#666",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#fff",
                        width: "68px",
                        height: "65px",
                        ":hover": {backgroundColor: "#fff"},
                        display: {xs: "none", md: "flex"}
                    }}
                >
                    <ArrowBackIosNewIcon/>
                </IconButton>

                <IconButton
                    ref={navigationNextRef}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        right: 30,
                        transform: "translateY(-50%)",
                        zIndex: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#666",
                        backgroundColor: "#fff",
                        width: "68px",
                        height: "65px",
                        ":hover": {backgroundColor: "#fff"},
                        display: {xs: "none", md: "flex"}
                    }}
                >
                    <ArrowForwardIosIcon/>
                </IconButton>
            </Box>

            <Box sx={{padding: "15px 15px 0 15px"}}>
                <Grid container spacing={2}>
                    {products.map((product, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Box>
                                <Typography
                                    component="img"
                                    src={product.image}
                                    sx={{
                                        width: "100%",
                                        maxWidth: "100%",
                                        height: "auto",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => navigate(product.path)}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                </Box>


        </Box>
    );
};

export default Slider;
