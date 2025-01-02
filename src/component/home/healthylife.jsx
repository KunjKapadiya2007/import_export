import { Box, Typography } from '@mui/material'
import React from 'react'

const Healthylife = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{
                display: "flex",
                flexWrap: "wrap",
                width: { xs: "100%", sm: "80%", md: "50%" },  // Adjust width on different screen sizes
                gap: "20px",
                justifyContent: "center"
            }}>
                <Typography sx={{
                    fontSize: { xs: "3.5rem", sm: "5rem", md: "6.5rem" },
                    color: "#635729"
                }}>
                    Healthy
                </Typography>
                <Typography sx={{
                    fontSize: { xs: "3.5rem", sm: "5rem", md: "6.5rem" },
                    color: "#ff6262"
                }}>
                    life
                </Typography>
                <Typography sx={{
                    fontSize: { xs: "3.5rem", sm: "5rem", md: "6.5rem" },
                    color: "#ffbb4c"
                }}>
                    with
                </Typography>
                <Typography sx={{
                    fontSize: { xs: "3.5rem", sm: "5rem", md: "6.5rem" },
                    color: "#fcdb5a"
                }}>
                    fresh
                </Typography>
                <Typography sx={{
                    fontSize: { xs: "3.5rem", sm: "5rem", md: "6.5rem" },
                    color: "#5e9a4b"
                }}>
                    products
                </Typography>
            </Box>
        </Box>
    )
}

export default Healthylife
