import React from 'react';
import Schedule from './Schedule.js'
import masterSchedule from './Data/MasterSchedule.js';

class ScheduleControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = masterSchedule[0];
  }

  handleClick = (index) => {
    this.setState(masterSchedule[index]);
  };

  render() {
    return (
      <React.Fragment>
        <h4>DAYS</h4>
        <p><button onClick={() => this.handleClick(1)}>Monday</button></p>
        <p><button onClick={() => this.handleClick(2)}>Tuesday</button></p>
        <p><button onClick={() => this.handleClick(3)}>Wednesday My Dude</button></p>
        <p><button onClick={() => this.handleClick(4)}>Thursday</button></p>
        <p><button onClick={() => this.handleClick(5)}>Friday</button></p>
        <p><button onClick={() => this.handleClick(6)}>Saturday</button></p>
        <p><button onClick={() => this.handleClick(0)}>Sunday</button></p>
        <Schedule
          day={this.state.day}
          hours={this.state.hours}
          location={this.state.location}
          booth={this.state.booth}
          />
      </React.Fragment>
    );
  }
}

export default ScheduleControl; 

