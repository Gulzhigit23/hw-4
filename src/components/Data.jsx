import React from "react";

function Data({ date }) {
  let oldYear = date.getFullYear();
  
  let newYear = new Date().getFullYear()
  
  let result;
  if (newYear > oldYear) {
     result = newYear - oldYear + ' Years ago'
  }else{
    result = 'error'
  }


  return <div>{result}</div>;
}

export default Data;
