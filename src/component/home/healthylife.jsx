import React from "react";
import { Box, Typography } from "@mui/material";
import healthyLifeImage from "../../assets/image/home/health/img1.png";

const HealthyLifeBanner = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 0 50px",
                backgroundColor: "#fff",
                pb:"140px"
            }}
        >
            <Typography
                component="img"
                src={healthyLifeImage}
                alt="Healthy Life with Fresh Products"
                sx={{
                    width: "100%",
                    height: "auto",
                }}
            />
        </Box>
    );
};

export default HealthyLifeBanner;
