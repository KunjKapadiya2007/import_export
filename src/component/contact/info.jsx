import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const contactInfo = [
  {
    icon: <LocationOnIcon sx={{ fontSize: 50, color: '#f8c311' }} />,
    title: "ADDRESS",
    description: "Pragati Vihar Marris Road, Aligarh, Uttar Pradesh, India",
  },
  {
    icon: <PhoneInTalkIcon sx={{ fontSize: 50, color: '#f8c311' }} />,
    title: "PHONE",
    description: (
      <>
        +91 7599240763
        <br />
        +91 9990041840
      </>
    ),
  },
  {
    icon: <MailOutlineIcon sx={{ fontSize: 50, color: '#f8c311' }} />,
    title: "E-MAIL",
    description: (
      <>
        <a href="mailto:lav@ratanhouse.com" style={{ color: '#666' }}>
          lav@ratanhouse.com
        </a>
        <br />
        <a href="mailto:exports@ratanhouse.com" style={{ color: '#666' }}>
          exports@ratanhouse.com
        </a>
      </>
    ),
  },
];

function Info() {
  return (
    <Box sx={{ py: { xs: 10, sm: 18 } }}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {contactInfo.map((info, index) => (
            <Grid key={index} item xs={12} sm={4} textAlign="center">
              {info.icon}
              <Typography variant="h4" sx={{ fontSize: '22px', lineHeight: '1.2', fontWeight: '800', color: '#333', my: '20px', }} >
                {info.title}
              </Typography>
              <Typography sx={{ mt: '25px', mx: {sm:1,md:5}, color: "#666", fontw: '600' }}>
                {info.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Info;
