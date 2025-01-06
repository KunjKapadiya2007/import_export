import {useState} from "react";
import {
    Box,
    Button,
    Container,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Logo from "../../assets/image/globle/logo.webp";
import CloseIcon from "@mui/icons-material/Close";
import img1 from "../../assets/image/navubar/top_bar_bg-2.png";

const Navigation = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const navLinks = [
        {label: "Home", href: "/"},
        {label: "About", href: "/about"},
        {label: "Products", dropdown: true},
        {label: "Contact", href: "/contact"},
    ];

    return (
        <Box
            sx={{
                py: 1,
                backgroundColor: "#fff",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                position: "sticky",
                top: "0",
                width: "100%",
                zIndex: "1000",
            }}
        >
            <Container
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Logo */}
                <Box sx={{width: {xs: "80px", sm: "100px"}}}>
                    <Link to="/">
                        <Typography
                            component="img"
                            src={Logo}
                            alt="Logo"
                            sx={{width: "100%", height: "auto"}}
                        />
                    </Link>
                </Box>

                <Box
                    sx={{
                        display: {xs: "none", md: "flex"},
                        alignItems: "center",
                        gap: 3,
                    }}
                >
                    {navLinks.map((link, index) =>
                        link.dropdown ? (
                            <Box
                                key={index}
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                                sx={{position: "relative"}}
                            >
                                <Typography
                                    sx={{
                                        textDecoration: "none",
                                        color: "#555",
                                        fontWeight: "500",
                                        display: "flex",
                                        alignItems: "center",
                                        fontSize: "14px",
                                        cursor: "pointer",
                                        position: "relative",
                                        transition: "0.3s ease",
                                        "&::after": {
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
                                        "&:hover::after": {
                                            width: "100%",
                                        },
                                    }}
                                    onClick={toggleDropdown}
                                >
                                    {link.label}
                                    <KeyboardArrowDownIcon
                                        sx={{
                                            color: "#f8c311",
                                            ml: 0.5,
                                            transition: "transform 0.3s ease",
                                            transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                                        }}
                                    />
                                </Typography>

                                {dropdownOpen && (
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: "100%",
                                            left: 0,
                                            backgroundColor: "#000",
                                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                            zIndex: 10,
                                            width: "250px",
                                            p: 1,
                                            borderRadius: "4px",
                                            // transform: "translateY(50px)",
                                            // transformOrigin:"bottom",
                                            // transition:".3s",
                                            // '&:hover .product':{
                                            //     transform: "translateY(0)",
                                            // }
                                        }}
                                    >
                                        <List>
                                            {[
                                                {label: "Jaggery & Molasses", path: "/products/jaggery"},
                                                {label: "Rice", path: "/products/rice"},
                                                {label: "Wheat Flour", path: "/products/wheat-flour"},
                                                {label: "Vegetables", path: "/products/vegetables"},
                                                {label: "Sweet Corns", path: "/products/sweet-corns"},
                                                {label: "Pulses", path: "/products/pulses"},
                                            ].map((item, idx) => (
                                                <ListItem key={idx}>
                                                    <Typography
                                                        component={Link}
                                                        to={item.path}
                                                        onClick={toggleDrawer(false)}
                                                        sx={{
                                                            textDecoration: "none",
                                                            color: "#fff",
                                                            fontWeight: "500",
                                                            fontSize: "14px",
                                                            "&::after": {
                                                                content: '""',
                                                                position: "absolute",
                                                                bottom: "0px",
                                                                left: "15px",
                                                                width: "0%",
                                                                height: "2px",
                                                                backgroundColor: "#f8c311",
                                                                transition: "width 0.3s ease",
                                                            },
                                                            "&:hover::after": {
                                                                width: "10%",
                                                            },
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
                    <Button
                        variant="outlined"
                        sx={{
                            bgcolor: "#f8c311",
                            color: "#fff",
                            border: "2px solid #f8c311",
                            fontWeight: "600",
                            textTransform: "uppercase",
                            borderRadius: "50px",
                            padding: "10px 25px",
                            ml: 5,
                            "&:hover": {
                                backgroundColor: "#fff",
                                color: "#f8c311",
                            },
                        }}
                        onClick={() => navigate("/get-in-touch")}
                    >
                        GET IN TOUCH
                    </Button>
                </Box>

                <IconButton
                    sx={{display: {xs: "flex", md: "none"}, color: "#555"}}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon/>
                </IconButton>

                <Drawer
                    anchor="left"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                    PaperProps={{
                        sx: {
                            width: "100vw",
                            height: "100vh",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            backgroundColor: "#ffffff",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            p: 3,
                            position: "sticky",
                            top: "10px",
                            zIndex: 100,
                        }}
                    >

                        <Box sx={{width: "80px"}}>
                            <Link to="/" onClick={toggleDrawer(false)}>
                                <Typography
                                    component="img"
                                    src={Logo}
                                    alt="Logo"
                                    sx={{width: "100%", height: "auto"}}
                                />
                            </Link>
                        </Box>

                        <IconButton
                            onClick={toggleDrawer(false)}
                            sx={{
                                borderRadius: "50%",
                                color: "#000",
                                background: "#e6b600",
                            }}
                        >
                            <CloseIcon/>
                        </IconButton>
                    </Box>

                    <Box
                        sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 2,
                        }}
                    >
                        <List>
                            {navLinks.map((link, index) => (
                                link.dropdown ? (

                                    <Box key={index} sx={{width: "100%"}}>
                                        <Typography
                                            sx={{
                                                textDecoration: "none",
                                                color: "#555",
                                                fontWeight: "500",
                                                mb: 2,
                                                display: "flex",
                                                justifyContent: "start",
                                                alignItems: "center",
                                                cursor: "pointer",
                                                "&:hover": {
                                                    textDecoration: "2px underline #e6b600",
                                                },
                                            }}
                                            onClick={() => setDropdownOpen(!dropdownOpen)}
                                        >
                                            {link.label}
                                            <KeyboardArrowDownIcon sx={{ml: 1}}/>
                                        </Typography>

                                        {dropdownOpen && (
                                            <Box sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 1,
                                                alignItems: "center"
                                            }}>
                                                {[
                                                    {label: "Jaggery & Molasses", path: "/products/jaggery"},
                                                    {label: "Rice", path: "/products/rice"},
                                                    {label: "Wheat Flour", path: "/products/wheat-flour"},
                                                    {label: "Vegetables", path: "/products/vegetables"},
                                                    {label: "Sweet Corns", path: "/products/sweet-corns"},
                                                    {label: "Pulses", path: "/products/pulses"},
                                                ].map((item, idx) => (
                                                    <ListItem key={idx}>
                                                        <Typography component={Link} sx={{
                                                            textDecoration: "none",
                                                            color: "#555",
                                                            fontWeight: "400"
                                                        }}
                                                           to={item.path}
                                                           onClick={toggleDrawer(false)}
                                                        >
                                                            {item.label}
                                                        </Typography>
                                                    </ListItem>
                                                ))}
                                            </Box>
                                        )}
                                    </Box>
                                ) : (

                                    <Typography
                                        key={index}
                                        sx={{
                                            textDecoration: "none",
                                            color: "#555",
                                            fontWeight: "500",
                                            mb: 2,
                                            display: "block",
                                            textAlign: "start",
                                            "&:hover": {
                                                textDecoration: "underline",
                                            },
                                        }}
                                        component={Link}
                                        to={link.href}
                                        onClick={toggleDrawer(false)}
                                    >
                                        {link.label}
                                    </Typography>
                                )
                            ))}
                        </List>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#f8c311",
                                color: "#fff",
                                fontWeight: "bold",
                                borderRadius: "25px",
                                px: 4,
                                py: 1.5,
                                "&:hover": {
                                    backgroundColor: "#e6b600",
                                },
                            }}
                            onClick={() => navigate("/get-in-touch")}
                        >
                            GET IN TOUCH
                        </Button>
                        <Box sx={{
                            height: "250px",
                            width: "400px",
                            overflow: "hidden",
                        }}>
                            <img
                                src={img1}
                                alt="Background Image"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </Box>
                    </Box>
                </Drawer>


            </Container>
        </Box>
    );
};

export default Navigation;
