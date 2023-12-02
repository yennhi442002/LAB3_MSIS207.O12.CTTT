import React from "react";
import ReactDOM from "react-dom";

const user = {
  firstname: 'Elon',
  lastname: 'Musk',
  age: 49
}

const element = (
  <div>
    <h1>firstname: Elon</h1>
    <h1>lastname: Musk</h1>
    <h1>age: 49</h1>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));