import React, { useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';

const GetinTouch = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        comments: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Box>
            <Grid container >
                <Grid item xs={12} sm={6}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4856623108612!2d72.88694027380323!3d21.212581681442394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f7a31c50185%3A0x87232d67295bc2a3!2sSavlia%20Cir%2C%20Sanman%20Society%2C%20Yoginagar%20Society%2C%20Surat%2C%20Gujarat%20395010!5e0!3m2!1sen!2sin!4v1735709773302!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ backgroundColor: '#333', color: '#fff', py: { xs: 8, sm: 16 }, px: { xs: 0.3, sm: 2.5 }, display: 'flex', justifyContent: 'center', }} >
                        <Container maxWidth="sm">
                            <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                <Typography variant="h3" sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '40px' }}>
                                    Get
                                </Typography>
                                <Typography variant='span' sx={{ fontWeight: 100, fontSize: '40px', textTransform: 'uppercase', ml: 2, mb: 1 }}>
                                    In Touch
                                </Typography>
                            </Box>
                            <Typography variant='inherit' sx={{ color: '#b3b3b3', mt: 4, mb: 8, fontSize: '17px' }}>
                                Have questions or need assistance? Use the form below to reach us, and we'll get back to you shortly.
                            </Typography>
                            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                                <TextField
                                    fullWidth
                                    variant="standard"
                                    placeholder="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    sx={{
                                        mb: 5,
                                        input: { color: '#fff' },
                                        label: { color: '#ccc' },
                                        '& .MuiInput-underline:before': {
                                            borderBottomColor: '#DADADA',
                                        },
                                        '& .MuiInput-underline:after': {
                                            borderBottomColor: '#DADADA',
                                        },
                                        '& .MuiInput-underline:hover:before': {
                                            borderBottomColor: '#DADADA',
                                        },
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    variant="standard"
                                    placeholder="E-mail"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    sx={{
                                        mb: 5,
                                        input: { color: '#fff' },
                                        label: { color: '#ccc' },
                                        '& .MuiInput-underline:before': {
                                            borderBottomColor: '#DADADA',
                                        },
                                        '& .MuiInput-underline:after': {
                                            borderBottomColor: '#DADADA',
                                        },
                                        '& .MuiInput-underline:hover:before': {
                                            borderBottomColor: '#DADADA',
                                        },
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    variant="standard"
                                    placeholder="Contact Number"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    sx={{
                                        mb: 5,
                                        input: { color: '#fff' },
                                        label: { color: '#ccc' },
                                        '& .MuiInput-underline:before': {
                                            borderBottomColor: '#DADADA',
                                        },
                                        '& .MuiInput-underline:after': {
                                            borderBottomColor: '#DADADA',
                                        },
                                        '& .MuiInput-underline:hover:before': {
                                            borderBottomColor: '#DADADA',
                                        },
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    variant="standard"
                                    placeholder="Comments"
                                    multiline
                                    rows={4}
                                    name="comments"
                                    value={formData.comments}
                                    onChange={handleChange}
                                    sx={{
                                        mb: 4,
                                        '& .MuiInputBase-root': {
                                            color: '#DADADA',
                                        },
                                        '& .MuiInput-underline:before': {
                                            borderBottomColor: '#DADADA',
                                        },
                                        '& .MuiInput-underline:after': {
                                            borderBottomColor: '#DADADA',
                                        },
                                        '& .MuiInput-underline:hover:before': {
                                            borderBottomColor: '#DADADA',
                                        },
                                    }}
                                />
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        borderColor: '#f8c311',
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        borderRadius: '50px',
                                        padding: '10px 0',
                                        '&:hover': {
                                            backgroundColor: '#f8c311',
                                            color: '#666',
                                        },
                                        mt: 3
                                    }}
                                    type="submit"
                                >
                                    Send
                                </Button>
                            </form>
                        </Container>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default GetinTouch;
