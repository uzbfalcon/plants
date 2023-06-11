import React, { useState } from "react";
import { Img, Container, Texts, Title, Subtitle } from './style'
import { FaInstagram } from 'react-icons/fa';

import img7 from '../../assets/stephanie-harvey-vHkj3fX9wCk-unsplash 1.png'
import img8 from '../../assets/remi-muller-CZxraRv02-A-unsplash 1.png'
import img9 from '../../assets/alis-po-IdVNRv-5wJo-unsplash 1.png'
import img10 from '../../assets/freddie-marriage-UcfKYTan-LU-unsplash 1.png'




export const Socialedia = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };


    return (
        <Container>
            <Texts>
                <Title>
                    Follow Us on Instagram
                </Title>
                <Subtitle>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accu msan sit amet nunc cursus. Nec tristique at in erat lectus</p>
                </Subtitle>
            </Texts>
            <Img >
                <div className="hover picture-container">
                    <div className="opacity"> </div>
                    <img src={img7} alt="Frame" className="pictop" />
                    <FaInstagram className="icon"/>
                </div>
                <div className="hover picture-container">
                    <div className="opacity"> </div>
                    <img src={img10} alt="Frame" className="pictop" />
                    <FaInstagram className="icon"/>
                </div>
                <div className="hover picture-container">
                    <div className="opacity"> </div>
                    <img src={img9} alt="Frame" className="pictop" />
                    <FaInstagram className="icon"/>
                </div>
                <div className="hover picture-container" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
                    <div className="opacity"> </div>
                    <img src={img8} alt="Frame" className="pictop" />
                    <FaInstagram className="icon"/>
                    
                </div>
                <div className="hover picture-container" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
                    <div className="opacity"> </div>
                    <img src={img10} alt="Frame" className="pictop" />
                    <FaInstagram className="icon"/>
                </div>


                {/* <div
                    className="picture-container"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src="your-image-url.jpg" alt="Your Picture" />
                    {isHovered && (
                        <div className="instagram-icon">
                            <FaInstagram size={32} />
                        </div>
                    )}
                </div> */}
            </Img>
        </Container>
    )
}
