import {useState} from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Logo from '../../assets/image/globle/logo.webp';

const Navigation = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const navigate = useNavigate();

    const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown


    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const handleMegaMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMegaMenuClose = () => {
        setAnchorEl(null);
    };

    const navLinks = [
        {label: 'Home', href: '/'},
        {label: 'About', href: '/about'},
        {label: 'Products', href: '/:name/products', dropdown: true},
        {label: 'Certificate', href: '/certificate'},
        {label: 'Contact', href: '/contact'},
    ];

    const isMegaMenuOpen = Boolean(anchorEl);

    return (
        <Box sx={{py: 1, backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
            <Container>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={6} sm={2}>
                        <Box sx={{width: {xs: '80px', sm: '100px'}}}>
                            <Link to="/">
                            <Typography component="img" src={Logo} alt="Logo"  sx={{width: '100%', height: 'auto'}}/>
                            </Link>
                        </Box>
                    </Grid>

                    {/* Desktop Navigation */}
                    <Grid
                        item
                        xs={0}
                        sm={10}
                        sx={{display: {xs: 'none', md: 'flex'}, justifyContent: 'end', alignItems: 'center'}}
                    >
                        <Box sx={{display: 'flex', gap: 3}}>
                            {navLinks.map((link, index) =>
                                link.label === 'Products' ? (
                                    <Box
                                        key={index}
                                        onMouseEnter={handleMegaMenuOpen}
                                        onMouseLeave={handleMegaMenuClose}
                                        sx={{position: 'relative'}}
                                    >
                                        <Typography
                                            component="span"
                                            sx={{
                                                textDecoration: 'none',
                                                color: '#555',
                                                fontWeight: '500',
                                                display: 'flex',
                                                alignItems: 'center',
                                                cursor: 'pointer',
                                                position: 'relative',
                                                fontSize: '14px',
                                                '&::after': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    top: '240%',
                                                    left: 0,
                                                    width: '0%',
                                                    height: '2px',
                                                    backgroundColor: '#f8c311',
                                                    transition: 'width 0.3s ease',
                                                },
                                                '&:hover::after': {
                                                    width: '100%',
                                                }
                                            }}
                                        >
                                            {link.label}
                                            <KeyboardArrowDownIcon sx={{color: '#f8c311', ml: 0.5}}/>
                                        </Typography>

                                        {isMegaMenuOpen && (
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: '100%',
                                                    left: 0,
                                                    backgroundColor: '#333',
                                                    color: '#fff',
                                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                                    zIndex: 10,
                                                    width: '250px',
                                                    p: 1,
                                                }}
                                            >
                                                <List>
                                                    {[
                                                        {label: 'Jaggery & Molasses', path: '/jaggery/products'},
                                                        {label: 'Rice', path: '/rice/products'},
                                                        {label: 'Wheat Flour', path: '/wheat-flour/products'},
                                                        {label: 'Vegetables', path: '/vegetables/products'},
                                                        {label: 'Sweet Corns', path: '/sweet-corns/products'},
                                                        {label: 'Pulses', path: '/pulses/products'},
                                                    ].map((item, index) => (
                                                        <ListItem key={index}>
                                                            <Typography
                                                                component={Link}
                                                                to={item.path}
                                                                sx={{
                                                                    textDecoration: 'none',
                                                                    color: '#fff',
                                                                    fontWeight: '500',
                                                                    display: 'inline-block',
                                                                    cursor: 'pointer',
                                                                    position: 'relative',
                                                                    fontSize: '14px',
                                                                    '&::after': {
                                                                        content: '""',
                                                                        position: 'absolute',
                                                                        bottom: "-1%",
                                                                        left: 0,
                                                                        width: '0%',
                                                                        height: '2px',
                                                                        backgroundColor: '#f8c311',
                                                                        transition: 'width 0.3s ease',
                                                                    },
                                                                    '&:hover::after': {
                                                                        width: '20px',
                                                                    }
                                                                }}
                                                            >
                                                                {item.label}
                                                            </Typography>
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Box>
                                        )}
                                    </Box>
                                ) : (
                                    <Typography
                                        key={index}
                                        component="a"
                                        href={link.href}
                                        sx={{
                                            textDecoration: 'none',
                                            color: '#555',
                                            fontWeight: '500',
                                            position: 'relative',
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontSize: '14px',
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                top: '230%',
                                                transform: 'translateX(-50%)',
                                                left: "50%",
                                                width: '0%',
                                                height: '2px',
                                                backgroundColor: '#f8c311',
                                                transition: 'width 0.3s ease',
                                            },
                                            '&:hover::after': {
                                                width: '100%',
                                            }
                                        }}
                                    >
                                        {link.label}
                                    </Typography>
                                )
                            )}
                        </Box>
                        <Button
                            variant="outlined"
                            sx={{
                                bgcolor: '#f8c311',
                                color: '#fff',
                                border: '2px solid #f8c311',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                borderRadius: '50px',
                                padding: '10px 25px',
                                ml: 5,
                                '&:hover': {
                                    backgroundColor: '#fff',
                                    color: '#f8c311',
                                },
                            }}
                            onClick={() => navigate("/get-in-touch")}
                        >
                            GET IN TOUCH
                        </Button>
                    </Grid>

                    {/* Mobile Navigation */}
                    <Grid item xs={6} sm={0} sx={{display: {xs: 'flex', md: 'none'}, justifyContent: 'flex-end',}}>
                        {/* Hamburger Icon */}
                        <IconButton onClick={toggleDrawer(true)}>
                            <MenuIcon sx={{color: '#555'}}/>
                        </IconButton>

                        {/* Mobile Drawer */}
                        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                            <Box sx={{width: 300, p: 2}}>
                                <List>
                                    {navLinks.map((link, index) =>
                                        link.dropdown ? (
                                            <Box key={index}>
                                                {/* Dropdown Menu Item */}
                                                <Typography
                                                    component="span"
                                                    onClick={toggleDropdown}
                                                    sx={{
                                                        textDecoration: 'none',
                                                        color: '#555',
                                                        fontWeight: '500',
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        '&:hover': {
                                                            color: '#f8c311',
                                                        },
                                                    }}
                                                >
                                                    {link.label}
                                                    <KeyboardArrowDownIcon
                                                        sx={{
                                                            color: '#f8c311',
                                                            ml: 0.5,
                                                            transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                            transition: 'transform 0.3s ease',
                                                        }}
                                                    />
                                                </Typography>
                                                {/* Dropdown Menu */}
                                                {dropdownOpen && (
                                                    <Box
                                                        sx={{
                                                            mt: 1,
                                                            ml: 2,
                                                            backgroundColor: '#f1f1f1',
                                                            borderRadius: 1,
                                                            p: 1,
                                                        }}
                                                    >
                                                        <List>
                                                            {['Jaggery & Molasses', 'Rice', 'Wheat flour', 'Vegetables', 'Sweet Corns', 'Pulses'].map(
                                                                (item, idx) => (
                                                                    <ListItem key={idx}>
                                                                        <Typography
                                                                            component="a"
                                                                            href="#"
                                                                            sx={{
                                                                                textDecoration: 'none',
                                                                                color: '#555',
                                                                                fontWeight: '500',
                                                                                '&:hover': {
                                                                                    color: '#f8c311',
                                                                                },
                                                                            }}
                                                                        >
                                                                            {item}
                                                                        </Typography>
                                                                    </ListItem>
                                                                )
                                                            )}
                                                        </List>
                                                    </Box>
                                                )}
                                            </Box>
                                        ) : (
                                            // Regular Menu Item
                                            <Typography
                                                key={index}
                                                component="a"
                                                href={link.href}
                                                sx={{
                                                    textDecoration: 'none',
                                                    color: '#555',
                                                    fontWeight: '500',
                                                    '&:hover': {
                                                        color: '#f8c311',
                                                    },
                                                    mb: 1,
                                                    display: 'block',
                                                }}
                                            >
                                                {link.label}
                                            </Typography>
                                        )
                                    )}
                                    {/* Call to Action */}
                                    <ListItem>
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                bgcolor: '#f8c311',
                                                color: '#fff',
                                                border: '2px solid #f8c311',
                                                fontWeight: '600',
                                                textTransform: 'uppercase',
                                                borderRadius: '50px',
                                                padding: '10px 25px',
                                                width: '100%',
                                                '&:hover': {
                                                    backgroundColor: '#fff',
                                                    color: '#f8c311',
                                                },
                                            }}
                                        >
                                            GET IN TOUCH
                                        </Button>
                                    </ListItem>
                                </List>
                            </Box>
                        </Drawer>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Navigation;
