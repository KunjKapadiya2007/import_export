// import { Box, Button, Container, Grid, Typography } from '@mui/material'
// import React from 'react'
// import agro from '../../assets/image/homepage/agro_2.png'
// import img from '../../assets/image/homepage/site_logo.png'

// import product from '../../assets/image/homepage/7.png'
// import product1 from '../../assets/image/homepage/8.png'
// import product2 from '../../assets/image/homepage/9.png'
// import product3 from '../../assets/image/homepage/10.png'
// import product4 from '../../assets/image/homepage/11.png'
// import product5 from '../../assets/image/homepage/12.png'
// import product6 from '../../assets/image/homepage/13.png'
// import product7 from '../../assets/image/homepage/14.png'

// const Farmproducts = () => {

//     const products = [
//         {
//             image: product,
//             title: "Rice"
//         },
//         {
//             image: product1,
//             title: "Pulses"
//         },
//         {
//             image: product2,
//             title: "Sweet Corn"
//         },
//         {
//             image: product3,
//             title: "Jaggery"
//         },
//         {
//             image: product4,
//             title: "Wheat Flour"
//         },
//         {
//             image: product5,
//             title: "Molasses"
//         },
//         {
//             image: product6,
//             title: "Potato"
//         },
//         {
//             image: product7,
//             title: "Onion"
//         },
//     ]

//     return (
//         <Box sx={{ py: "140px" }}>
//             <Container>
//                 <Box sx={{ backgroundImage: `url(${agro})`, backgroundRepeat: "no-repeat" }}>
//                     <Grid container spacing={2}>
//                         <Grid item xs={4}>
//                             <Box>
//                                 <Box>
//                                     <Typography component={'img'} src={img}
//                                         sx={{ width: "50px" }}
//                                     ></Typography>
//                                 </Box>
//                                 <Box my={'20px'}>
//                                     <Typography sx={{ fontSize: "40px", fontWeight: "900", textTransform: "uppercase" }}>
//                                         Fresh Ratan House
//                                         <Typography sx={{ fontSize: "40px" }}>
//                                             farm products
//                                         </Typography>
//                                     </Typography>
//                                 </Box>
//                                 <Button
//                                     variant="outlined"
//                                     sx={{
//                                         border: "2px solid #f8c311",
//                                         color: "#f8c311",
//                                         fontWeight: "bold",
//                                         borderRadius: "50px",
//                                         p: { xs: "10px 20px", sm: "15px 30px" },
//                                         "&:hover": {
//                                             backgroundColor: "#f8c311",
//                                             color: "white",
//                                             transition: ".6s",
//                                         },
//                                     }}
//                                 >
//                                     contact us
//                                 </Button>
//                             </Box>
//                         </Grid>
//                         <Grid item xs={8}>
//                             <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", }}>
//                                 {products.map((item, index) => (
//                                     <Box sx={{ textAlign: "center", width: "165px", mb: "50px" }}>
//                                         <Typography component={'img'} src={item.image}></Typography>

//                                         <Typography>{item.title}</Typography>

//                                     </Box>
//                                 ))}
//                             </Box>
//                         </Grid>
//                     </Grid>
//                 </Box>
//             </Container>
//         </Box>
//     )
// }

// export default Farmproducts

import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import agro from '../../assets/image/homepage/agro_2.png'
import img from '../../assets/image/homepage/site_logo.png'

import product from '../../assets/image/homepage/7.png'
import product1 from '../../assets/image/homepage/8.png'
import product2 from '../../assets/image/homepage/9.png'
import product3 from '../../assets/image/homepage/10.png'
import product4 from '../../assets/image/homepage/11.png'
import product5 from '../../assets/image/homepage/12.png'
import product6 from '../../assets/image/homepage/13.png'
import product7 from '../../assets/image/homepage/14.png'

const Farmproducts = () => {

    const products = [
        {
            image: product,
            title: "Rice"
        },
        {
            image: product1,
            title: "Pulses"
        },
        {
            image: product2,
            title: "Sweet Corn"
        },
        {
            image: product3,
            title: "Jaggery"
        },
        {
            image: product4,
            title: "Wheat Flour"
        },
        {
            image: product5,
            title: "Molasses"
        },
        {
            image: product6,
            title: "Potato"
        },
        {
            image: product7,
            title: "Onion"
        },
    ]

    return (
        <Box sx={{ py: { xs: "60px", sm: "100px", md: "140px" } }}>
            <Container>
                <Box sx={{ backgroundImage: `url(${agro})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                                <Box>
                                    <Typography component={'img'} src={img}
                                        sx={{ width: "50px" }}
                                    ></Typography>
                                </Box>
                                <Box my={'20px'}>
                                    <Typography sx={{
                                        fontSize: { xs: "30px", sm: "40px" },
                                        fontWeight: "900",
                                        textTransform: "uppercase",
                                        textAlign: { xs: "center", sm: "left" }
                                    }}>
                                        Fresh Ratan House {' '}
                                        <Typography component={'span'} sx={{
                                            fontSize: { xs: "30px", sm: "40px" },
                                            textAlign: { xs: "center", sm: "left" },
                                            fontWeight:100
                                        }}>
                                            farm products
                                        </Typography>
                                    </Typography>
                                </Box>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        border: "2px solid #f8c311",
                                        color: "#f8c311",
                                        fontWeight: "bold",
                                        borderRadius: "50px",
                                        p: { xs: "10px 20px", sm: "15px 30px" },
                                        "&:hover": {
                                            backgroundColor: "#f8c311",
                                            color: "white",
                                            transition: ".6s",
                                        },
                                        display: "block"
                                    }}
                                >
                                    contact us
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: { xs: "center", sm: "flex-start" } }}>
                                {products.map((item, index) => (
                                    <Box sx={{
                                        textAlign: "center", 
                                        width: { xs: "120px", sm: "165px" }, 
                                        mb: "30px"
                                    }} key={index}>
                                        <Typography component={'img'} src={item.image}></Typography>
                                        <Typography>{item.title}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Farmproducts
