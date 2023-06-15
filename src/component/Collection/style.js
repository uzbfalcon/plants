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
        padding: 0px 20px; /* Responsiv o'lchamga moslashishi uchun paddingni o'zgartiramiz */
        margin: 40px 0; /* Responsiv o'lchamga moslashishi uchun marginni o'zgartiramiz */
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

        @media screen and (max-width: 568px) {
            font-size: 1.5rem;
            max-width: fit-content;
            align-items: center;
            text-align: center;
        }
    }
    @media screen and (max-width: 568px) {
            align-items: center;
            margin-bottom: 20px;
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

        @media screen and (max-width: 568px) {
            font-size: 1rem;
            max-width: fit-content;
            text-align: center;
        }
    }

    @media screen and (max-width: 568px) {
        margin-right: 0; /* Responsiv o'lchamga moslashishi uchun marginni o'zgartiramiz */
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

    @media screen and (max-width: 568px) {
        flex-direction: column;
        align-items: center; /* Responsiv o'lchamga moslashishi uchun elementlarni markazga o'rnatamiz */
        height: auto; /* Responsiv o'lchamga moslashishi uchun height: auto ni qo'shamiz */
        gap: 10px; /* Responsiv o'lchamga moslashishi uchun gap ni o'zgartiramiz */
    }
`