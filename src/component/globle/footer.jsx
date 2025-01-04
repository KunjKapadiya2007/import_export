import React from 'react';
import { Box, Typography, Grid, Link, IconButton, Container } from '@mui/material';
import { Email, Phone, LocationOn, Twitter, Facebook, LinkedIn } from '@mui/icons-material';
import Logo from '../../assets/image/globle/footer_logo.webp'; // Make sure path is correct

const footerData = {
    logo: Logo,
    menu: [
        { label: 'Home', link: '/' },
        { label: 'About', link: '/about' },
        { label: 'Contact', link: '/contact' },
    ],
    categories: [
        { label: 'Pulses', link: '/products/pulses' },
        { label: 'Vegetables', link: '/products/vegetables' },
        { label: 'Jaggery & Molasses', link: '/products/jaggery' }
    ],
    products: [
        { label: 'Rice', link: '/products/rice' },
        { label: 'Wheat Flour', link: '/products/wheat-flour' },
        { label: 'Corn', link: '/products/corn' },
    ],
    contact: {
        address: 'Pragati Vihar, Marris Road, Aligarh, UP, India',
        phone: ['+91 7599240763', '+91 9990041840'],
        emails: ['lav@ratanhouse.com', 'exports@ratanhouse.com'],
    },
    socialLinks: [
        { icon: <Twitter />, link: '#' },
        { icon: <Facebook />, link: '#' },
        { icon: <LinkedIn />, link: '#' },
    ],
    footerNote: '© 2024, Designed by Techsbeta',
};

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#2E3B55',
                color: '#fff',
                padding: '40px 0',
            }}
        >
            <Box sx={{ margin: { md: "0 120px" } }}>
                <Container maxWidth="lg">
                    <Grid container>
                        {/* Logo Section */}
                        <Grid item xs={12} sm={3} lg={2} sx={{ textAlign: 'center' }}>
                            <Link href="/">
                                <Box component="img" src={footerData.logo} alt="Logo"
                                     sx={{ width: '100px', height: 'auto' }} />
                            </Link>
                        </Grid>

                        {/* Menu, Categories, and Products Sections */}
                        <Grid item xs={12} sm={6} lg={7}>
                            <Grid container spacing={6}>
                                {/* Menu Section */}
                                <Grid item xs={12} sm={4} lg={2}>
                                    <Typography variant="h6"
                                                sx={{ color: '#F8C311', fontSize: '16px', fontWeight: 'bold', mb: 2 }}>
                                        MENU
                                    </Typography>
                                    {footerData.menu.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.link}
                                            display="block"
                                            sx={{
                                                mb: 1,
                                                color: '#FFF',
                                                textDecoration: 'none',
                                                transition: '0.3s',
                                                '&:hover': { color: '#F8C311', cursor: 'pointer' },
                                            }}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </Grid>

                                <Grid item xs={12} sm={4} lg={3}>
                                    <Typography variant="h6"
                                                sx={{ color: '#F8C311', fontSize: '16px', fontWeight: 'bold', mb: 2 }}>
                                        CATEGORIES
                                    </Typography>
                                    {footerData.categories.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.link}
                                            display="block"
                                            sx={{
                                                mb: 1,
                                                color: '#FFF',
                                                textDecoration: 'none',
                                                transition: '0.3s',
                                                '&:hover': { color: '#F8C311', cursor: 'pointer' },
                                            }}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </Grid>

                                {/* Products Section */}
                                <Grid item xs={12} sm={4} lg={3}>
                                    <Typography variant="h6"
                                                sx={{ color: '#F8C311', fontSize: '16px', fontWeight: 'bold', mb: 2 }}>
                                        PRODUCTS
                                    </Typography>
                                    {footerData.products.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.link}
                                            display="block"
                                            sx={{
                                                mb: 1,
                                                color: '#FFF',
                                                textDecoration: 'none',
                                                transition: '0.3s',
                                                '&:hover': { color: '#F8C311', cursor: 'pointer' },
                                            }}
                                        >
                                            {item.label} {/* Updated to reference item.label */}
                                        </Link>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Contact Section */}
                        <Grid item xs={12} sm={12} lg={3}>
                            <Typography variant="h6"
                                        sx={{ color: '#F8C311', fontSize: '16px', fontWeight: 'bold', mb: 2 }}>
                                CONTACT US
                            </Typography>
                            <Box display="flex" alignItems="center" mb={1}>
                                <LocationOn sx={{ mr: 1 }} />
                                <Typography sx={{ fontSize: "14px" }}>{footerData.contact.address}</Typography>
                            </Box>
                            {footerData.contact.phone.map((phone, index) => (
                                <Box key={index} display="flex" alignItems="center" mb={1}>
                                    <Phone sx={{ mr: 1 }} />
                                    <Typography sx={{ fontSize: "14px" }}>{phone}</Typography>
                                </Box>
                            ))}
                            {footerData.contact.emails.map((email, index) => (
                                <Box key={index} display="flex" alignItems="center" mb={1}>
                                    <Email sx={{ mr: 1 }} />
                                    <Link
                                        href={`mailto:${email}`}
                                        sx={{
                                            color: '#BAA245',
                                            textDecoration: 'none',
                                            transition: '0.3s',
                                            fontSize: "14px",
                                            '&:hover': { color: '#F8C311', cursor: 'pointer' },
                                        }}
                                    >
                                        {email}
                                    </Link>
                                </Box>
                            ))}
                            <Box mt={2} display="flex" gap={1}>
                                {footerData.socialLinks.map((social, index) => (
                                    <IconButton
                                        key={index}
                                        href={social.link}
                                        sx={{
                                            color: '#FFF',
                                            transition: '0.3s',
                                            '&:hover': { color: '#F8C311', cursor: 'pointer' },
                                        }}
                                    >
                                        {social.icon}
                                    </IconButton>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>

                    {/* Footer Note */}
                    <Box textAlign="center" mt={4} borderTop="1px solid #566573" pt={2}>
                        <Typography sx={{ fontSize: '14px', color: '#FFF' }}>{footerData.footerNote}</Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;
