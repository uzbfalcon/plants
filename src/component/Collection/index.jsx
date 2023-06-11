import React from "react";
import { Animation, Container, Texts } from './style'
import { BsArrowRightShort } from 'react-icons/bs'

import img3 from '../../assets/Frame 185.png'
import img4 from '../../assets/Frame 186.png'
import img5 from '../../assets/Frame 187.png'


export const Collection = () => {
    return (
        <Container>
            <Texts>
                <p>We have lots of plants</p>
                <p>collection for you and</p>
                <p>your family</p>

                <span>See all collection <BsArrowRightShort /></span>
            </Texts>
            <Animation>
                <img src={img3} alt="Collection" />
                <img src={img4} alt="Collection" />
                <img src={img5} alt="Collection" />
            </Animation>
        </Container>
    )
}
