import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    /* background-color: aqua; */
    padding: 0px 90px;
    margin-top: 60px;
    justify-content: center;
	@media screen and (max-width: 768px) {
        flex-direction: column;
    }

`
export const Texts = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 117px;


    button {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 17px 0px 0 24px;
        gap: 10px;
        margin-top: 40px;
        width: 160px;
        height: 55px;
        background: #066F14;
        border-radius: 4px;
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

    .list {
        position: absolute;
        left: 43.31%;
        right: 44.37%;
        top: 68.06%;
        bottom: 22.58%;
        transform: rotate(0deg);
    }

	@media screen and (max-width: 768px) {
        flex-direction: column;
        .list {
            display: none;
        }
   }
`
export const Title = styled.div`
    font-size: 38px;
    font-family: 'DM Sans';
    font-size: 66px;
    font-weight: 700;
    text-align: left;

`
export const Subtitle = styled.div`
    width: 504px;
    height: 78px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: #4A4A4A;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-top: 24px;
`
export const Img = styled.img`
    height: 719px;
    width: 557px;


`
export const Animation = styled.div`
    display: flex;
    flex-direction: row;
    gap: 90px;
    font-size: 36px;
    margin-top: 60px;
    font-weight: 700;

    p {
        width: 92px;
        height: 23px;
        text-align: center;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #1A1A1A;
        flex: none;
        order: 1;
        flex-grow: 0;
    }
`


// export {Container}