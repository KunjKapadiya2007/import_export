import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import bgImg1 from '../../assets/image/about/img1.png';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function AgricultureFarm() {
    const number = [
        { no: 150, name: 'Number Of Products' },
        { no: 2720, name: 'Export in' },
        { no: 10000, name: 'Hectares of farm' },
        { no: 128, name: 'Units of technic' },
    ];

    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures animation triggers only once when in view
        threshold: 0.1,    // Fires when 10% of the component is in view
    });

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    padding: '140px 0',
                    overflow: 'hidden',
                }}
            >
                <Container maxWidth="lg" sx={{ zIndex: 2 }}>
                    <Grid container>
                        <Grid item xs={12} md={8}>
                            <Box>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontSize: '40px',
                                        fontWeight: '900',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    We are{' '}
                                    <Typography
                                        component="span"
                                        sx={{
                                            fontWeight: '100',
                                            fontSize: '40px',
                                            paddingLeft: '15px',
                                            color: '#333333',
                                        }}
                                    >
                                        Agriculture Farm
                                    </Typography>
                                </Typography>
                                <Box sx={{ marginTop: '20px' }}>
                                    <Typography paragraph>
                                        Established in March 2014, Ratan House has quickly become a trusted name in the
                                        global food industry. With a mission to provide top-quality food services, we
                                        have positioned ourselves as leading exporters of diverse agricultural products,
                                        catering to a wide range of global markets.
                                    </Typography>
                                    <Typography paragraph>
                                        We are committed to delivering excellence through strategic planning,
                                        storytelling, and integrated solutions across web, mobile, and real-world
                                        applications. Our focus is on bringing value to brands and consumers alike.
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        marginTop: '20px',
                                        color: '#F8C311',
                                        padding: '19px 28px',
                                        border: '1px solid #F8C311',
                                        display: 'inline-block',
                                        borderRadius: '50px',
                                        fontSize: '14px',
                                        fontWeight: '700',
                                        transition: '.6s',
                                        '&:hover': { backgroundColor: '#FFC107', color: '#fff' },
                                    }}
                                >
                                    GET IN TOUCH
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                <Box
                    sx={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: '40%',
                        backgroundImage: `url(${bgImg1})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        zIndex: 1,
                        display: { xs: 'none', md: 'unset' },
                    }}
                />
            </Box>

            <Box ref={ref} sx={{ paddingBottom: '140px' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {number.map((item, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Box
                                    sx={{
                                        padding: '16px',
                                        borderRadius: '8px',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            fontWeight: 900,
                                            fontSize: '50px',
                                            marginBottom: '8px',
                                            color: '#333333',
                                        }}
                                    >
                                        {inView ? (
                                            <CountUp end={item.no} duration={2} separator="," />
                                        ) : (
                                            '0'
                                        )}
                                    </Box>
                                    <Box
                                        sx={{
                                            fontSize: '16px',
                                            fontWeight: 700,
                                            color: '#555555',
                                        }}
                                    >
                                        {item.name}
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default AgricultureFarm;
