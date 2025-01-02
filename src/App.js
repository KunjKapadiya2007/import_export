import React from 'react'
import Contact from './pages/contact'
import Header from './component/globle/header'
import Footer from './component/globle/footer'
import GetinTouch from './component/contact/getinTouch'
import Products from "./pages/products";
import Home from "./pages/home";

const App = () => {
    return (
        <>
            <Header />




            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/:name/products" element={<Products />} />
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
