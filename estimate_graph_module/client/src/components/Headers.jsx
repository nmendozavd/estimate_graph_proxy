import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  h2 {
    font-weight: 700;
    font-size: 1.375rem;
    padding-left: 0;
    word-spacing: .125rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: inline - block;
    zoom: 1;
    color: #333;
}
`
const LinkHomeFacts = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  padding-bottom: 1rem;

  span {
    cursor: pointer;
    color: #0c82a5;
  }
`

const LinkCreateOwner = styled.div` 
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  padding-bottom: 1rem;

  span {
    cursor: pointer;
    color: #0c82a5;
  }

`

const EstimateValueHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  div {
    font-size: 1.75rem;
    margin: 0;
    padding: 0;
    border: 0;
    font-family: Libre Franklin;
    vertical-align: baseline;
  }
  
  button {
    border-radius: 2px 2px 2px 2px;
    transition: all .1s ease-out 0s;
    display: inline-block;
    height: 40px;
    padding: 12px 1.5rem;
    font-family: inherit;
    font-weight: 700;
    font-size: 1rem;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    letter-spacing: -.1px;
    line-height: 1;
    box-shadow: none;
    cursor: pointer;
    text-decoration: none;
    
  }
`
const Heading = styled.div`
  float: left;
  width: 370px;
  height: 18px;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: Libre Franklin;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  span {
    color: #75b945;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
`



class Headers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Wrapper>
        <h2>MyPad Estimate for 131 FREMONT Ave</h2>
        <LinkHomeFacts>
          <span>Edit Home Facts </span>to improve accuracy.
        </LinkHomeFacts>
        <LinkCreateOwner>
          <span>Create and Owner Estimate</span>
        </LinkCreateOwner>
        <EstimateValueHeader>
          <div>$2,474,344</div>
          <button href=''>Track This Estimate</button>
        </EstimateValueHeader>
        <Heading>
          <span>$1.1M </span>since sold in 2012
        </Heading>
      </Wrapper>
    )
  }
}

export default Headers;

