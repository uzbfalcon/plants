import React from "react";
import Navbar from "../component/Navbarcopy/Navbar";
import { Hero } from "../component/Hero";
import { Collection } from "../component/Collection";
import { AboutUs } from "../component/AboutUS";
import './style.js'
import { Wrapper } from "./style.js";
import { Product } from "../component/Best Product";
import { Socialedia } from "../component/Social Media";
import Footer from "../Footer";

export const Home = () => {
    return (
        <Wrapper>
            <Navbar />
            <Hero />
            <Collection/>
            <AboutUs/>
            <Product/>
            <Socialedia/>
            <Footer/>
        </Wrapper>
    )
}