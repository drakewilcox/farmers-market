import React from "react";
import PropTypes from "prop-types";

function Produce(props){
  return (
    <React.Fragment>
      <hr/>
      <h1>{props.month}</h1>
      <p> {props.selection} </p>
    </React.Fragment>
  );
}
Produce.propTypes = {
  month: PropTypes.string, 
  selection: PropTypes.string, 
};

export default Produce;