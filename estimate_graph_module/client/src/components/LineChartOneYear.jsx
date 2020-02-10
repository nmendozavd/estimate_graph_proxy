import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
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


class LineChart1Year extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Wrapper>
        <svg viewBox="0 0 670 264">
               <g>
                 {/* parallel lines in graph*/}
                 <line x1="15" x2="610" y1="214" y2="214"></line>
                 <line x1="610" x2="15" y1="178" y2="178"></line>
                 <line x1="610" x2="15" y1="133" y2="133"></line>
                 <line x1="610" x2="15" y1="88" y2="88"></line>
                 <line x1="610" x2="15" y1="43" y2="43"></line>

                 {/* labels on x-axis */}
                 <text dx="0" dy="11.9" x="16" y="226">Jan</text>
                 <text dx="0" dy="11.9" x="93" y="226">Mar</text>
                 <text dx="0" dy="11.9" x="190" y="226">May</text>
                 <text dx="0" dy="11.9" x="289" y="226">Jul</text>
                 <text dx="0" dy="11.9" x="384" y="226">Sept</text>
                 <text dx="0" dy="11.9" x="483" y="226">Nov</text>
                 <text dx="0" dy="11.9" x="580" y="226">Jan</text>

                 {/* labels on y-axis */}
                 <text dx="0" dy="4.97" x="622" y="43">$3.0M</text>
                 <text dx="0" dy="4.97" x="622" y="88">$2.5M</text>
                 <text dx="0" dy="4.97" x="622" y="133">$2.0M</text>
                 <text dx="0" dy="4.97" x="622" y="178">$1.5M</text>
               </g>
               {/* <path d={data} /> */}

           <polyline points="
             20,90
             80,100
             130,120
             180,130
             230,140
             280,150
             320,140
             370,145
             420,160
             470,155
             550,165
             610,150
           "
           /> 
         </svg>
      </Wrapper>
    )
  }

}

export default LineChart1Year;