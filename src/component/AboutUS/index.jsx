import React from "react";
import { Img, Container, Texts } from './style'
import { Button } from '../../globalStyles'


import img6 from '../../assets/Group 289.png'



export const AboutUs = () => {
    return (
        <Container>
            <Img>
                <img src={img6} alt="BigFlower" />
            </Img>
            <Texts>
                <div>
                    <span>About Us</span>
                    <h2>Continue to Develop to Became Global Company</h2>
                    <p className="long">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. </p>
                    <Button className="button">Read More</Button>
                </div>
            </Texts>
        </Container>
    )
}
