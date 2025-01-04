import React from 'react';
import {  Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Contact from './pages/contact';
import Navigation from './component/globle/navigation';
import Footer from './component/globle/footer';
import GetinTouch from './component/contact/getinTouch';
import Products from "./pages/products";
import Home from "./pages/home";

const App = () => {
    return (
        <>
            <Navigation />




            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products/:name" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/get-in-touch" element={<GetinTouch />} />
                {/* Add NotFound route */}
                <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>

            <Footer />

        </>
    );
};

export default App;