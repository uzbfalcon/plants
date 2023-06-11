import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    /* background-color: aqua; */
  padding: 0px 90px;
  margin: 80px 0;
  /* max-width: 1300px; */
  justify-content: center;
    

	@media screen and (max-width: 768px) {
        flex-direction: column;
    }

`
export const Texts = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 62px;

    p {
        /* width: 389px; */
        /* height: 147px; */
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        color: #1A1A1A;
    }

    span {
        /* width: 140px; */
        height: 23px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;    
        color: #4A4A4A;
        display: flex;
        align-items: center;
        margin-top: 37px;
    }
`

export const Animation = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: flex-start;
    padding: 0;
    /* gap: 10px; */
    /* width: 219px; */
    height: 207px;

    img {
        border-radius: 5px;
    }
`

