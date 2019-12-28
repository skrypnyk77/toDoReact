import React, { Component } from "react";
import sortable from "../sortable";

/** Class representing List of Sorting */
class ListOfSorting extends Component {
  handleSelect(e) {
    const {
      target: { value }
    } = e;
    const { sortByText, sortByID } = this.props;
    if (value === "text") {
      return sortByText();
    }
    if (value === "id") {
      return sortByID();
    }
    if (value === "by priority") {
      console.log("PRIORITY");
    }
  }
  render() {
    return (
      <select onChange={e => this.handleSelect(e)} className="sortable" >
        {sortable.map(val => (
          <option key={val} val={val}>
            {val}
          </option>
        ))}
      </select>
    );
  }
}

export default ListOfSorting;
