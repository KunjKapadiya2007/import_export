import React from 'react'
import Info from '../component/contact/info'
import HeroSection from '../component/globle/heroSection'
import GetinTouch from '../component/contact/getinTouch'
import bgimg from "../assets/image/contact/contact_banner.webp";

const Contact = () => {
    return (
        <>
            <HeroSection
                backgroundImage={bgimg}
                title="Contact Us"
                subtitle="Ratan House"
                textColor="#ffffff"
                height="200px"
                width="100%"
            />
            <Info />
            <GetinTouch />
        </>
    )
}

export default Contact
