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
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 235px;
  width: 100%;
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
`



export { Container, Content, Icon };