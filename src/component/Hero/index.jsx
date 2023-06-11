import React from "react";
import { Animation, Container, Img, Subtitle, Texts, Title } from "./style";
import img from '../../assets/klipartz 5.png'
import img2 from '../../assets/klipartz 7.png'
import CountUp from "react-countup";
import { Button } from "../../globalStyles";
export const Hero = () => {
    return (
        <Container>
            <Texts>
                <Title>
                    <p>Growing </p>
                    <p>Beautiful Plants</p>
                    <p>at Home</p>
                </Title>
                <Subtitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
                </Subtitle>
                <Button>Learn More</Button>
                <Animation>
                    <div>
                        <CountUp start={0} end={2000} duration={7} separator=" " suffix="+" />
                        <p>Delivery</p>
                    </div>
                    <div>
                        <CountUp start={0} end={1200} duration={7} separator=" " suffix="+" />
                        <p>Customers</p>
                    </div>
                    <div>
                        <CountUp start={0} end={1000} duration={7} separator=" " suffix="+" />
                        <p>Product</p>
                    </div>
                </Animation>
                <img src={img2} alt="List" className="list" />
            </Texts>
            <Img src={img} alt="Grass" />
        </Container>
    )
}
