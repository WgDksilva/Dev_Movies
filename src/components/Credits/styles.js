
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
   from {
    transform: translateX(80%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;


const scale = keyframes`
   from {
        transform: scale(0);
   }
   to {
        transform: scale(1);
   }
`;

export const Title = styled.h4`
 color: #ffffff;
 font-size: 25px;
 font-weight: 700;
 animation: ${scale} 0.6s ease-in;

 @media (max-width: 430px) {
    margin: 0 auto;
  }
`;

export const Container = styled.div`
 display: flex;
 margin-top: 5px;
 gap: 30px;
 animation: ${slideIn} 1.2s ease-in-out;

  div {
    display: flex;
    flex-direction: column;
  }

  P {
    color: #ffffff;
  }

  img {
    height: 140px;
    border-radius: 10px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
  }

  @media (max-width: 430px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

