import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: aqua; */
    padding: 0px 90px;
    margin-top: 60px;
    margin-bottom: 160px;
    justify-content: center;
    margin: auto;
	@media screen and (max-width: 768px) {
        flex-direction: column;
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #066F14;
        border-radius: 4px;
        margin: 50px auto;
        width: 131px;
        height: 55px;
    }
    button:hover {
        transform: scale(1.01);
        border: 2px solid #066F14;
        transition: 0.5s ease-in-out;
    }

    

`
export const Texts = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-right: 117px; */




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
    font-size: 40px;
    font-weight: 700;
    text-align: left;
    margin: 20px auto;

`
export const Subtitle = styled.div`
    display: flex;
    gap:50px;
    justify-content: center;
    align-items: center;
    font-family: 'DM Sans';
    p {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        color: #4A4A4A;
     }
     p:hover {
        color: #066F14;
        cursor: pointer;
        transform: scale(1.1);
     }
`
export const Img = styled.div`
    display: flex;
     flex-direction: row;
     gap: 30px;
     margin-top: 48px;
    .hover {
        /* display: flex;
        flex-direction: column; */
        background-color: #EAF2E5;
        height: 283px;
        max-width: 270px;
        padding: 10px 89px 29px 32px;
    }
    .hover:hover {
        background: #F0EBE6;
        cursor: pointer;
        transform: scale(1.01);
    }

    .pictop {
        height: 153px;
        width: 160px;
        padding-left: 20px;
    }
    .picbottom {
        height: 85px;
        width: 154px;
    }
	@media screen and (max-width: 1100px) {
        display: grid;
        justify-content: center;
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 3rem;
	}
	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
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
`


// export {Container}