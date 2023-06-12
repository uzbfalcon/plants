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


    @media screen and (max-width: 1000px) {
            text-align: center;
    }
    @media screen and (max-width: 568px) {
        text-align: center;

    }



`
export const Subtitle = styled.div`
    max-width: 544px;
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
            grid-template-columns: repeat(auto-fit, minmax(330px,1fr));
            max-width: 380px;
            position: relative;
            right: 50px;
        }

`
export const Img = styled.div`
    display: flex;
     flex-direction: row;
     /* gap: 30px; */
     
     margin-top: 48px;
    /* .hover {
        /* display: flex;
        flex-direction: column; */
        /* background-color: #EAF2E5;
        height: 283px;
        width: 270px;
        padding: 10px 89px 29px 32px;
    } */
    @media screen and (max-width: 1000px) {
        display    :grid ;
          grid-template-columns: repeat(auto-fit, minmax(330px,1fr));

    }



    @media screen and (max-width: 568px) {
            display: grid;
              grid-template-columns: repeat(auto-fit, minmax(330px,1fr));

            
        }

    .pictop {
        height: 241px;
        width: 231px;
        left: 230px;
        top: 161px;
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
}
.picture-container:hover {
    
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
    top: 49%;
    z-index: 20;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    color: white;
    padding: 10px;
    transition: opacity 0.3s;
    opacity: 0;
}

.icon:hover {
  opacity: 1;
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