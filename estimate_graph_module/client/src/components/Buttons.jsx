import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`

`
const Span1 = styled.span`
  float: right;
  font-size: 100%;
  text-align: left;
  vertical-align: bottom;
  color: #999;
  padding: .5rem 0;
  border-bottom: .125rem solid transparent;
  transition: all .2s ease-out 0s;
  cursor: pointer;    
`

const Span2 = styled.span`
  position: relative;
  float: right;
  font-size: 100%;
  text-align: right;
  font: inherit;
  vertical-align: baseline;
  margin-left: 1rem;
  color: #333;
  border-color: currentColor;
  padding: .5rem 0;
  border-bottom: .125rem solid transparent;
  transition: all .2s ease-out 0s;
  
`

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  
  render() {
    return (
      <Wrapper>
        <Span2>5 years</Span2>
        <Span1>1 year</Span1>
      </Wrapper>
    )
  }
}

export default Buttons;