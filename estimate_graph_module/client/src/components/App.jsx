import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import LineChart1Year from './LineChartOneYear.jsx';
import LineChart5Year from './LineChartFiveYear.jsx';
import Headers from './Headers.jsx';
import Buttons from './Buttons.jsx';

const Wrapper = styled.div`
  font-family: Libre Franklin;
  width: 670px;
  height: 264px;
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

  button {
    border-radius: 2px 2px 2px 2px;
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
    /* white-space: nowrap; */
    letter-spacing: -.1px;
    line-height: 1;
    box-shadow: none;
    cursor: pointer;
    text-decoration: none;
    
  }
  
`

// const getData = `
//   M${x(this.state.fiveYearData[0])} ${y(data[0].y)} 
//   ${data.slice(1).map(d => {
//     return `L${x(d.x)} ${y(d.y)}`;
//   }).join(' ')}
// `;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: true,
      fiveYearData: [],
      oneYearData: [],
      
    }
    this.changeView = this.changeView.bind(this);
  }
  
  componentDidMount() {
    this.getEstimate()
  }

  getEstimate () {
    axios.get('/homes')
      .then((response) => {
        // console.log('Data:', response.data)
        var fiveYearData = response.data[0].fiveYearPrice;
        var oneYearData = response.data[1].oneYearPrice;
        this.setState({ fiveYearData: fiveYearData });
        this.setState({ oneYearData: oneYearData });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changeView () {
    this.setState({
      view: !this.state.view
    });
  }

  

  render() {
    return (
      <Wrapper>
        <Headers></Headers>
        <Span2>
          <span onClick={this.changeView}> <button>Years</button>
            { this.state.view 
              ? <LineChart1Year></LineChart1Year> 
              : <LineChart5Year></LineChart5Year> 
            } 
          </span>
        </Span2>
        {/* <Span1>
          <span onClick={this.changeView}>1 year</span>
        </Span1>  */}
      </Wrapper>
    )
  }
}


export default App;