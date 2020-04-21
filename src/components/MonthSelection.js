import React from 'react'; 
import {v4} from 'uuid';

function MonthSelection(){
  function handleNewDateSelection(event){
    event.preventDefault();
  }
  return(
    <React.Fragment>
      <form onSubmit={handleNewDateSelection}>
        <select name="month">
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
          <option value="4"></option>
          <option value="5"></option>
          <option value="6"></option>
          <option value="7"></option>
          <option value="8"></option>
          <option value="9"></option>
          <option value="10"></option>
          <option value="11"></option>
          <option value="12"></option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  )
}

export default MonthSelector; 