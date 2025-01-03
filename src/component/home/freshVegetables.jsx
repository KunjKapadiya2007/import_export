import React from 'react';
import { Grid, Typography, Button, Box, Container } from '@mui/material';
import img from '../../assets/image/homepage/banner_bg_5.jpg'

const FreshVegetables = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5', padding: '2rem' }}>
            <Container>
                <Box>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" color="textSecondary" gutterBottom>
                                A House of Agro Products
                            </Typography>
                            <Typography
                                variant="h2"
                                color="primary"
                                sx={{ fontWeight: 'bold', marginBottom: '1rem' }}
                            >
                                Fresh Organic Vegetables
                            </Typography>
                            <Typography
                                variant="h4"
                                color="textSecondary"
                                gutterBottom
                                sx={{ marginBottom: '1rem' }}
                            >
                                Directly from Our Farm
                            </Typography>
                            <Typography
                                variant="body1"
                                color="textSecondary"
                                sx={{ marginBottom: '2rem' }}
                            >
                                Discover a wide range of premium organic vegetables grown with the
                                highest standards of quality and sustainability. Our farm-fresh
                                produce is delivered straight to your table, ensuring you get the
                                best of nature's bounty.
                            </Typography>
                            <Button
                                variant="outlined"
                                color="primary"
                                sx={{
                                    padding: '0.8rem 2rem',
                                    borderColor: '#c1a72d',
                                    color: '#c1a72d',
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        backgroundColor: '#c1a72d',
                                        color: '#fff',
                                    },
                                }}
                            >
                                Shop Now
                            </Button>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <img
                                src={img}
                                alt="Fresh Organic Vegetables"
                                style={{
                                    maxWidth: '100%',
                                    borderRadius: '8px',
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default FreshVegetables