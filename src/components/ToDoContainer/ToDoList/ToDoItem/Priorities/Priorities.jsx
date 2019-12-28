import React, { Component } from "react";
import priorities from "../../../priorities";

/** Class representing List of Priorities */
class ListPriorities extends Component {
  render() {
    return priorities.map(val => (
      <option key={val} value={val}>
        {val}
      </option>
    ));
  }
}

export default ListPriorities;
