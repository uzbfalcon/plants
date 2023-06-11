import React from "react";
import { Img, Container, Texts, Title, Subtitle } from './style'
import {Button} from '../../globalStyles'

import img7 from '../../assets/nagy-arnold-X_IvVDuHvDQ-unsplash (1) 1.png'
import img8 from '../../assets/Frame 224.png'
import img9 from '../../assets/linh-le-Ebwp2-6BG8E-unsplash 1.png'
import img10 from '../../assets/pexels-kate-amos-2718447 (1) 1.png'
import img11 from '../../assets/galina-n-miziNqvJx5M-unsplash 1.png'




export const Product = () => {
    return (
        <Container>
            <Texts>
                <Title>
                    Our Best Product
                </Title>
                <Subtitle>
                    <p>New Plants</p>
                    <p>New Arrivals</p>
                    <p>Sale</p>
                </Subtitle>
            </Texts>
            <Img >
                <div className="hover">
                    <img src={img7} alt="Frame" className="pictop" />
                    <img src={img8} alt="Flower" className="picbottom" />
                </div>
                <div className="hover">
                    <img src={img9} alt="Frame" className="pictop" />
                    <img src={img8} alt="Flower" className="picbottom" />
                </div>
                <div className="hover">
                    <img src={img10} alt="Frame" className="pictop" />
                    <img src={img8} alt="Flower" className="picbottom" />
                </div>
                <div className="hover">
                    <img src={img11} alt="Frame" className="pictop" />
                    <img src={img8} alt="Flower" className="picbottom" />
                </div>
            </Img>
            <Button>View All</Button>
        </Container>
    )
}
