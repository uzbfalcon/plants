import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 0px 90px;
    margin: 150px 0;
    justify-content: center;
    gap: 70px;


	@media screen and (max-width: 768px) {
        flex-direction: column-reverse;
    }
`
export const Texts = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 62px;

    p:nth-child(-n + 3) {
        width: 504px;
        /* height: 156px; */
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        /* line-height: 160%; */
        color: #4A4A4A;
    }

    p {
        width: 504px;
        height: 58px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        margin-bottom: 65px;
        color: #4A4A4A;
    }

    span {
        width: 79px;
height: 23px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 23px;

color: #066F14;
    }
    h2 {
        width: 490px;
        max-height: 120px;
        font-family: 'DM Sans';
        /* font-style: normal; */
        font-weight: 700;
        font-size: 40px;
        margin-bottom:24px ;
        color: #1A1A1A;
    }

    button {
        background: #066F14;
        border-radius: 4px;
        width: 131px;
        height: 55px;
    }
    button:hover {
        transform: scale(1.01);
        border: 2px solid #066F14;
        transition: 0.5s ease-in-out;
    }
`

export const Img = styled.div`
    img {

        height: 480px;
        width: 516px;
    }
    `

