import styled from 'styled-components';


export const Wrapper = styled.div`
  font-family: Libre Franklin;
  width: 670px;
  height: 264px;

  svg {
    background: white;
    width: 670px;
    height: 264px;
  
    polyline {
      fill: transparent;
      stroke: rgb(51, 51, 51);
      stroke-width: 2;
      opacity: 1;
    } 

    g {
      
      line {
        color: #999;
        stroke: rgb(226, 226, 226);
        fill: transparent;
        stroke-width: 1;
        stroke-linejoin: round;

        text {
          text-anchor: "middle";
          font-size: 14px;
          stroke: transparent;
          letter-spacing: normal;
          padding: 8px;
          stroke-width: 0;
        }
      }
    } 
 }
`


