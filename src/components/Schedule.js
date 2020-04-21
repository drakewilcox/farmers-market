import React from "react";
import PropTypes from "prop-types";

function Schedule(props){
  return (
    <React.Fragment>
      <h3>{props.day}</h3>
      <h3>{props.location}</h3>
      <h3>{props.booth}</h3>
      <p><em>{props.hours}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Schedule.propTypes = {
  day: PropTypes.string, 
  location: PropTypes.string, 
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Schedule;