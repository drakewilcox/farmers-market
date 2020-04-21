import React from 'react';
// import NewTicketForm from './NewTicketForm';
import DaySelection from './DaySelection.js';
import ScheduleDetails from './ScheduleDetails.js';
import { render } from '@testing-library/react';

const masterScheduleList = [
  {  
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
 },
 {  
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
 },
 {  
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
 },
 {  
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
 },
 {  
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
 },
 {  
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
 }
];

class ScheduleControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = marketSchedule[0];
  }

  handleClick = (index) => {
    this.setState(marketSchedule[index]);
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
        <p><button onClick={() => this.handleClick(7)}>Sunday</button></p>
        <Schedule
          day={this.state.day}
          hours={this.state.hours}
          location={this.state.location}
          booth={this.state.booth}
          />
      </React.Fragment>
    )
  }
}




// class ScheduleControl extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       currentMarketSchedule = {}
//     }
//   }

//   handleDeterminingSchedule = (selectedDate) => {
//     this.setState({currentMarketSchedule: masterScheduleList[selectedDate]});
//   }  

//   render(){
//     return(
//       <React.Fragment>
//         <DaySelection />
//         <ScheduleDetails />
//       </React.Fragment>
//     );
//   }
// }

// export default ScheduleControl;
