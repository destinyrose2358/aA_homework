import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      result: 0,
      num1: "",
      num2: ""
    };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.addNums = this.addNums.bind(this);
    this.minusNums = this.minusNums.bind(this);
    this.multiplyNums = this.multiplyNums.bind(this);
    this.divideNums = this.divideNums.bind(this);
    this.resetCalc = this.resetCalc.bind(this);
  }

  setNum1(event) {
    this.setState({num1: event.currentTarget.value});
  }

  setNum2(event) {
    this.setState({ num2: event.currentTarget.value });
  }

  addNums(event) {
    event.preventDefault();
    this.setState({ result: parseInt(this.state.num1) + parseInt(this.state.num2) });
  }

  minusNums(event) {
    event.preventDefault();
    this.setState({ result: parseInt(this.state.num1) - parseInt(this.state.num2) });
  }

  multiplyNums(event) {
    event.preventDefault();
    this.setState({ result: parseInt(this.state.num1) * parseInt(this.state.num2) });
  }

  divideNums(event) {
    event.preventDefault();
    this.setState({ result: parseInt(this.state.num1) / parseInt(this.state.num2) });
  }

  resetCalc(event) {
    event.preventDefault();
    this.setState({ result: 0, num1: "", num2: ""});
  }

  render(){
    let {result, num1, num2} = this.state;
    return (
      <div>
        <h1>{result}</h1>
        <input type="text" onChange={this.setNum1} value={num1}/>
        <input type="text" onChange={this.setNum2} value={num2} />
        <br/>
        <button onClick={this.addNums}>+</button>
        <button onClick={this.minusNums}>-</button>
        <button onClick={this.multiplyNums}>*</button>
        <button onClick={this.divideNums}>/</button>
        <button onClick={this.resetCalc}>Clear</button>
      </div>
    );
  }
}

export default Calculator;
