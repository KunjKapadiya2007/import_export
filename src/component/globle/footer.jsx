import React from 'react';
import { Box, Typography, Grid, Link, IconButton, Container } from '@mui/material';
import { Email, Phone, LocationOn, Twitter, Facebook, LinkedIn } from '@mui/icons-material';
import Logo from '../../assets/image/globle/footer_logo.webp';

const footerData = {
    logo: Logo,
    menu: ['Home', 'About', 'Certificate', 'Contact'],
    categories: ['Pulses', 'Vegetables', 'Jaggery & Molasses'],
    products: ['Rice', 'Wheat Flour', 'Corn'],
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
            <Container maxWidth="lg">
                <Grid container spacing={0}>
                    {/* Logo */}
                    <Grid item xs={12} sm={6} md={2} sx={{ textAlign: 'center' }}>
                        <Link href="/">
                            <Box component="img" src={footerData.logo} alt="Logo" sx={{ width: '100px', height: 'auto' }} />
                        </Link>
                    </Grid>

                    {/* Menu */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" sx={{ color: '#F8C311', fontSize: '18px', fontWeight: 'bold', mb: 2 }}>
                            MENU
                        </Typography>
                        {footerData.menu.map((item, index) => (
                            <Link
                                key={index}
                                href="#"
                                display="block"
                                sx={{
                                    mb: 1,
                                    color: '#FFF',
                                    textDecoration: 'none',
                                    transition: '0.3s',
                                    '&:hover': { color: '#F8C311', cursor: 'pointer' },
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </Grid>

                    {/* Categories */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" sx={{ color: '#F8C311', fontSize: '18px', fontWeight: 'bold', mb: 2 }}>
                            CATEGORIES
                        </Typography>
                        {footerData.categories.map((item, index) => (
                            <Link
                                key={index}
                                href="#"
                                display="block"
                                sx={{
                                    mb: 1,
                                    color: '#FFF',
                                    textDecoration: 'none',
                                    transition: '0.3s',
                                    '&:hover': { color: '#F8C311', cursor: 'pointer' },
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </Grid>

                    {/* Products */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" sx={{ color: '#F8C311', fontSize: '18px', fontWeight: 'bold', mb: 2 }}>
                            PRODUCTS
                        </Typography>
                        {footerData.products.map((item, index) => (
                            <Link
                                key={index}
                                href="#"
                                display="block"
                                sx={{
                                    mb: 1,
                                    color: '#FFF',
                                    textDecoration: 'none',
                                    transition: '0.3s',
                                    '&:hover': { color: '#F8C311', cursor: 'pointer' },
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </Grid>

                    {/* Contact */}
                    <Grid item xs={12} sm={12} md={5}>
                        <Typography variant="h6" sx={{ color: '#F8C311', fontSize: '18px', fontWeight: 'bold', mb: 2 }}>
                            CONTACT US
                        </Typography>
                        <Box display="flex" alignItems="center" mb={1}>
                            <LocationOn sx={{ mr: 1 }} />
                            <Typography>{footerData.contact.address}</Typography>
                        </Box>
                        {footerData.contact.phone.map((phone, index) => (
                            <Box key={index} display="flex" alignItems="center" mb={1}>
                                <Phone sx={{ mr: 1 }} />
                                <Typography>{phone}</Typography>
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

                <Box textAlign="center" mt={4} borderTop="1px solid #566573" pt={2}>
                    <Typography sx={{ fontSize: '14px', color: '#FFF' }}>{footerData.footerNote}</Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
