import React from 'react';
import AgricultureFarm from "../component/about/agricultureFarm";
import House from "../component/about/house";
import OurPartners from "../component/about/ourPartners";
import bgimg from "../assets/image/about/aboutHeader..jpg";
import ContactUs from "../component/globle/contactUs";

function About(props) {
    return (
        <>
            <ContactUs
                backgroundImage={bgimg}
                title="Company"
                subtitle="About"
                textColor="#ffffff"
                height="200px"
                width="100%"
            />
            <AgricultureFarm/>
            <House/>
            <OurPartners/>
        </>
    );
}

export default About;