import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 90px;
  margin-top: 60px;
  margin-bottom: 160px;
  justify-content: center;
  margin: auto;

  @media screen and (max-width: 768px) {
    padding: 0px 20px;
    margin-top: 30px;
    margin-bottom: 60px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #066F14;
    border-radius: 4px;
    margin: 50px auto;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    .list {
      display: none;
    }
  }
`;

export const Title = styled.div`
  font-size: 38px;
  font-family: 'DM Sans';
  font-weight: 700;
  text-align: center;
  height: auto;
  margin: 20px auto;

  @media screen and (max-width: 1000px) {
    text-align: center;
  }

  @media screen and (max-width: 568px) {
    text-align: center;
  }
`;

export const Subtitle = styled.div`

  max-width: 544px;
  display: flex;
  height: 52px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  text-align: center;
  color: #4A4A4A;
  margin: auto;

  @media screen and (max-width: 1000px) {
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 568px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    max-width: 380px;
    position: relative;
    /* right: 50px; */
  }
`;

export const Img = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 48px;


  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  }

  @media screen and (max-width: 568px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    align-items: center;
    margin: 0;
    position: relative;
    top: 50px;
    left: 60px;
    max-width: 320px;
    margin-bottom: 50px;

    img {
        max-width: 300px;
    }

  }

  .pictop {
    height: 241px;
    width: 231px;
    border-radius: 0px;
  }

  .opacity {
    width: 231px;
    height: 241px;
    background-color: black;
    display: flex;
    gap: 10px;
    position: absolute;
    opacity: 0.3;
  }

  .opacity:hover {
    opacity: 0;
  }

  .picture-container {
    position: relative;
    display: inline-block;
    max-width: 300px;
  }

  .instagram-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    padding: 10px;
    transition: opacity 0.3s;
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    color: white;
    padding: 10px;
    transition: opacity 0.3s;
    opacity: 0;
  }

  .hover:hover .icon {
    opacity: 1;
  }
`;
