import React from "react";
import PropTypes from "prop-types";

function Produce(props){
  return (
    <React.Fragment>
      <h3>{props.month}</h3>
      <ul>
      <li>{props.selection}</li>
      </ul>
      <hr/>
    </React.Fragment>
  );
}
// avaliable produce selection is an array, will i need to apply that somehow? 
Produce.propTypes = {
  month: PropTypes.string, 
  selection: PropTypes.string, 
};

export default Produce;