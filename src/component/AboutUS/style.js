import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0px 90px;
  margin: 150px 0;
  justify-content: center;
  gap: 70px;

  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(460px, 1fr));
    justify-content: center;
    padding: 0px 20px;
    margin-top: 100px;
    gap: 30px;
  }
  @media screen and (max-width: 568px) {
    display: flex;
    flex-direction: column;
    max-width: 450px;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;


  .long {
    max-width: 504px;
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #4A4A4A;
  }
  @media screen and (max-width: 1000px) {
    .log {
        max-width: 100%;
        font-size: 1rem;
        margin-bottom: 30px;
    }
    }

  @media screen and (max-width: 1000px) {
    align-items: center;
    text-align: center;
  }

  > div {
    display: flex;
    flex-direction: column;
      font-family: 'DM Sans';
    margin-right: 62px;

    @media screen and (max-width: 1000px) {
      margin-right: 0;
      margin-left: 0;
      font-family: 'DM Sans';
      align-items: center;
        max-width: 300px;
      text-align: center;
    }

    @media screen and (max-width: 568px) {
        .button {
      max-width: 144px;
    }
    }
    
    p:nth-child(-n + 3) {
        
      
      
    }
    
    .short {
      max-width: 504px;
      height: 58px;
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 800;
      font-size: 18px;
      margin-bottom: 65px;
      color: #4A4A4A;
      
      @media screen and (max-width: 1000px) {
        .short{
            margin-top: 150px;
            max-width: 100%;
            font-size: 1rem;
            margin-bottom: 30px;
        }
      }
    }
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

    @media screen and (max-width: 1000px) {
      width: 100%;
      font-size: 1rem;
    }
  }

  h2 {
    width: 490px;
    max-height: 120px;
    font-family: 'DM Sans';
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 24px;
    color: #1A1A1A;

    @media screen and (max-width: 1000px) {
      width: 100%;
      font-size: 1rem;
      margin-bottom: 20px;
    }
  @media screen and (max-width: 568px) {
    max-width: 350px;

}
  }

  button {
    background: #066F14;
    border-radius: 4px;
    width: 131px;
    height: 55px;

    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }

  button:hover {
    transform: scale(1.01);
    border: 2px solid #066F14;
    transition: 0.5s ease-in-out;
  }
`;

export const Img = styled.div`
    display: flex;
  img {
    height: 480px;
    max-width: 516px;

    @media screen and (max-width: 1000px) {
      max-width: 100%;
      height: auto;

      img {
        max-width: 100%;
        height: auto;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
  @media screen and (max-width: 568px) {
    max-width: 350px;
    align-items: center;
    margin: auto;

    img {
        max-width: 300px;
        align-items: center;
        margin: auto; 
    }
    
  }
`;
