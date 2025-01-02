import React from 'react';
import Jaggery from "../component/products/jaggery";
import bg1 from "../assets/image/products/img1.png";
import bg2 from "../assets/image/products/img2.png";
import bg3 from "../assets/image/products/img3.png";
import bg4 from "../assets/image/products/img4.png";
import {useParams} from "react-router-dom";
import bgimg from "../assets/image/contact/contact_banner.webp";
import ContactUs from "../component/globle/contactUs";

function Products(props) {
const {name} = useParams();
    console.log(name)
    return (
        <>
            <ContactUs
                backgroundImage={bgimg}
                title="Product Us"
                subtitle="Ratan House"
                textColor="#ffffff"
                height="200px"
                width="100%"
            />
            <Jaggery name = {name}/>
        </>
    );
}

export default Products;