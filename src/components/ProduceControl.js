import React from 'react';
import Produce from './Produce.js'
import masterProduce from './Data/MasterProduce.js';

class ProduceControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = masterProduce[0];
  }

  handleClick = (index) => {
    this.setState(masterProduce[index]);
  };

  render() {
    return (
      <React.Fragment>
        <h4>DAYS</h4>
        <p><button onClick={() => this.handleClick(1)}>January</button></p>
        <p><button onClick={() => this.handleClick(2)}>February</button></p>
        <p><button onClick={() => this.handleClick(3)}>March</button></p>
        <p><button onClick={() => this.handleClick(4)}>April</button></p>
        <p><button onClick={() => this.handleClick(5)}>May</button></p>
        <p><button onClick={() => this.handleClick(6)}>June</button></p>
        <p><button onClick={() => this.handleClick(7)}>July</button></p>
        <p><button onClick={() => this.handleClick(8)}>August</button></p>
        <p><button onClick={() => this.handleClick(9)}>September</button></p>
        <p><button onClick={() => this.handleClick(10)}>October</button></p>
        <p><button onClick={() => this.handleClick(11)}>November</button></p>
        <p><button onClick={() => this.handleClick(0)}>December</button></p>
        <Produce
          month={this.state.month}
          selection={this.state.selection}
          />
      </React.Fragment>
    );
  }
}

export default ProduceControl; 