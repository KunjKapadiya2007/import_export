import React from 'react'
import About from "./pages/about";
import Contact from './pages/contact'
import Header from './component/globle/header'
import Footer from './component/globle/footer'
import GetinTouch from './component/contact/getinTouch'
import Products from "./pages/products";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import ContactUs from './component/globle/contactUs';
import bgimg from './assets/image/contact/contact_banner.webp';

const App = () => {
  return (


    <>
      <Header />
      {/*<Contact />*/}
      {/*/!* <Footer /> *!/*/}
      {/*<Products/>*/}

        <ContactUs
            backgroundImage={bgimg}
            title="Contact Us"
            subtitle="Ratan House"
            textColor="#ffffff"
            styles={{
                py: { xs: 12, sm: 24 },
                textAlign: "center",
            }}
        />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/:name/products" element={<Products />} />
            {/*<Route path="/certificate" element={<Certificate/>} />*/}
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-in-touch" element={<GetinTouch />} />
        </Routes>
    </>


  )
}

export default App