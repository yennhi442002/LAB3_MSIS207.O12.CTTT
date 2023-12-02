import React from "react";
import ReactDOM from "react-dom";

class UserForm extends React.Component {
  render() {
    return (
      <form>
        <label>Enter a user name:</label>
        <input />
      </form>
    );
  }
}

ReactDOM.render(<UserForm />, document.querySelector("#root"));
