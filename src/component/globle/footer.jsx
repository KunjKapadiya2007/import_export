import React from 'react';
import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
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
        padding: '20px',
      }}
    >
      <Grid container spacing={4}>
        {/* Logo */}
        <Grid item xs={12} sm={12} md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ width: { xs: '80px', sm: '140px' } }}>
            <Link href="/">
              <Typography component="img" src={footerData.logo} alt="Logo" sx={{ width: '100%', height: 'auto' }} />
            </Link>
          </Box>
        </Grid>
        {/* Menu */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ color: '#F8C311', fontSize: '18px', fontWeight: 'bold', mb: '15px' }}>MENU</Typography>
          {footerData.menu.map((item, index) => (
            <Link
              key={index}
              href="#"
              display="block"
              sx={{
                mb: '10px', color: '#FFF', textDecoration: 'none', transition: '0.5s', '&:hover': {
                  color: '#F8C311',
                  cursor: 'pointer',
                },
              }}
            >
              {item}
            </Link>
          ))}
        </Grid>
        {/* Categories */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ color: '#F8C311', fontSize: '18px', fontWeight: 'bold', mb: '15px' }}>CATEGORIES</Typography>
          {footerData.categories.map((item, index) => (
            <Link
              key={index}
              href="#"
              display="block"
              sx={{
                mb: '10px', color: '#FFF', textDecoration: 'none', transition: '0.5s', '&:hover': {
                  color: '#F8C311',
                  cursor: 'pointer',
                },
              }}
            >
              {item}
            </Link>
          ))}
        </Grid>
        {/* Products */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ color: '#F8C311', fontSize: '18px', fontWeight: 'bold', mb: '15px' }}>PRODUCTS</Typography>
          {footerData.products.map((item, index) => (
            <Link
              key={index}
              href="#"
              display="block"
              sx={{
                mb: '10px', color: '#FFF', textDecoration: 'none', transition: '0.5s', '&:hover': {
                  color: '#F8C311',
                  cursor: 'pointer',
                },
              }}
            >
              {item}
            </Link>
          ))}
        </Grid>
        {/* Contact */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ color: '#F8C311', fontSize: '18px', fontWeight: 'bold', mb: '15px' }}>CONTACT US</Typography>
          <Box display="flex" alignItems="center" mb={'10px'}>
            <LocationOn sx={{ mr: 1 }} />
            <Typography>{footerData.contact.address}</Typography>
          </Box>
          {footerData.contact.phone.map((phone, index) => (
            <Box key={index} display="flex" alignItems="center" mb={'10px'}>
              <Phone sx={{ mr: 1 }} />
              <Typography>{phone}</Typography>
            </Box>
          ))}
          {footerData.contact.emails.map((email, index) => (
            <Box key={index} display="flex" alignItems="center" mb={'10px'}>
              <Typography
                sx={{
                  color: '#BAA245',
                  transition: '0.5s',
                  '&:hover': {
                    color: '#F8C311',
                    cursor: 'pointer',
                  },
                }}
              >
                {email}
              </Typography>
            </Box>
          ))}
          <Box mt={2}>
            {footerData.socialLinks.map((social, index) => (
              <IconButton key={index} color="inherit" href={social.link} sx={{
                transition: '0.5s', '&:hover': {
                  color: '#F8C311',
                  cursor: 'pointer',
                },
              }} >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Box textAlign="center" mt={4} borderTop="1px solid #fff" pt={2} >
        <Typography sx={{ fontSize: '14px' }}>{footerData.footerNote}</Typography>
      </Box>
    </Box>
  );
};
export default Footer;