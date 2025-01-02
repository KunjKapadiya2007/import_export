import React from 'react';
import AgricultureFarm from "../component/about/agricultureFarm";
import House from "../component/about/house";
import OurPartners from "../component/about/ourPartners";

function About(props) {
    return (
        <>
            <AgricultureFarm/>
            <House/>
            <OurPartners/>
        </>
    );
}

export default About;