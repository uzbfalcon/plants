import styled from 'styled-components';

const Container = styled.div`
  max-height: 417px;
  height: 100%;
  /* background: blue; */
  color: black;
  display: flex;
  position: relative;
  justify-content: space-around;
  /* align-items: center; */
  margin: auto;
  width: 100%;
  margin-top: 96px;
  padding: 48px 70px;

  @media screen and (max-width: 1000px) {
       flex-direction: column;

    }
    @media screen and (max-width: 568px) {
     flex-direction: column;
     margin-top: 250px;
     /* text-align: center;   */
    }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 235px;
  width: 100%;

  @media screen and (max-width: 1000px) {
      text-align: center;
      margin: auto;
      align-items:center;

    }
    @media screen and (max-width: 568px) {
     
     text-align: center;  
     align-items:center;
    }
  `;

Content.Title = styled.div`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  color: #1A1A1A;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  /* justify-content: center; */

`
Content.Item = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(90, 90, 90, 1);


`

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  gap: 10px;

  img:hover {
    transform: scale(1.1);
  }

    @media screen and (max-width: 568px) {
      margin-bottom: 40px;
    }
`



export { Container, Content, Icon };