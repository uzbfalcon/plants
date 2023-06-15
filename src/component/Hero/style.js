import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    /* background-color: aqua; */
    padding: 0px 90px;
    margin-top: 140px;
    justify-content: center;
	@media screen and (max-width: 1000px) {
        flex-direction: column;
        padding: 0 40px;
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
        @media screen and (max-width: 1100px) {
            margin-top: 69px;
	    }
	    @media screen and (max-width: 568px) {
            margin-top: 69px;

     }
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
    /* font-size: 38px; */
    font-family: 'DM Sans';
    font-size: 4rem;
    font-weight: 700;
    text-align: left;

    @media screen and (max-width: 1100px) {
       padding: 0;

	}
	@media screen and (max-width: 568px) {
        font-size: 2.5rem;
        min-width: 340px;
    }

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
    @media screen and (max-width: 1100px) {
       padding: 0;
	}
	@media screen and (max-width: 568px) {
        font-size: 1rem;
        max-width: 320px;
    }
`
export const Img = styled.img`
    height: 719px;
    width: 557px;

    @media screen and (max-width: 568px) {
        width: auto;
        height: auto;
    }

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

    .animationnumber {
        @media screen and (max-width: 568px) {
            max-width: 50px;
    }
    }

   
	@media screen and (max-width: 568px) {
        display: grid;
        /* gap: 10px; */
        margin:30px auto ;
        grid-template-columns: repeat(2,1fr);
    }
`


// export {Container}