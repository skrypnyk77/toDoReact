import React, { Component } from "react";
import ToDoList from "./ToDoList";
import priorities from "./priorities";
import ListOfSorting from "./ListOfSorting";

/** Class representing all container for ToDos. */
class ToDoContainer extends Component {
  /**
   * @constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      userInput: "",
      list: [],
      priority: priorities
    };
  }

  /**
   * changing input of toDo
   * @param {string} todo - Input of toDo.
   */
  changeUserInput(toDo) {
    this.setState({
      userInput: toDo
    });
  }

  /**
   * @param {string} toDo - toDo text
   * Addition some fields to listArray
   */
  addToList(toDo) {
    const { list, priority } = this.state;
    const uuid = `f${(~~(Math.random() * 1e8)).toString(16)}`;
    const [Priority] = priority.filter(item => item === "medium");

    toDo !== ""
      ? list.push({ id: uuid, text: toDo, priority: Priority })
      : alert("Nothing to do! Please, enter your task!");

    this.setState({
      list: list,
      userInput: "",
      message: ""
    });
  }

  /**
   * @param {string} id - id of toDo
   * @param {string} newText - text of toDo
   * Editing the text of toDo
   */
  updateText = (id, newText) => {
    const { list } = this.state;
    const item = list.find(item => item.id === id);
    if (item) {
      item.text = newText;
    }
    this.setState({
      list: list
    });
  };

  /**
   * @param {string} id - id of toDo
   * @param {string} newPriority - priority of toDo
   * Editing the priority of toDo
   */
  updatePriority = (id, newPriority) => {
    const { list } = this.state;
    const item = list.find(item => item.id === id);
    if (item) {
      item.priority = newPriority;
    }
    this.setState({
      list: list
    });
  };

  /**
   * @param {string} property - property of toDo
   * functionality of sorting property
   */
  sortableText = property => {
    return function(a, b) {
      const result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result;
    };
  };

  /**
    calling function of sorting by Id
   */
  sortByID = () => {
    const { list } = this.state;
    const sortedArrByID = list.sort(this.sortableText("id"));
    this.setState({
      list: sortedArrByID
    });
  };

  /**
    calling function of sorting by text
   */
  sortByText = () => {
    const { list } = this.state;
    const sortedArrByText = list.sort(this.sortableText("text"));
    this.setState({
      list: sortedArrByText
    });
    console.log(sortedArrByText);
  };

  /**
   * Clearing all list of toDos
   */
  clearAll() {
    this.setState({
      list: []
    });
  }

  /**
   * @param {string} id - id of toDo
   * Delete items one by one
   */
  deleteOneByOne(id) {
    let filteredList = this.state.list.filter(item => {
      return item.id !== id;
    });
    this.setState({
      list: filteredList
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main-area">
          <input
            onChange={e => this.changeUserInput(e.target.value)}
            value={this.state.userInput}
            type="text"
            placeholder="What needs to be done?"
            className="user-input"
          />
          <button
            className="btn-add"
            onClick={() => this.addToList(this.state.userInput)}
          >
            add toDo
          </button>
          <ListOfSorting
            sortByText={this.sortByText}
            sortByID={this.sortByID}
          />
          <button
            className="btn-clear"
            onClick={() => this.clearAll(this.state.list)}
          >
            clear all
          </button>
          <span>{this.state.message}</span>
        </div>
        <ToDoList
          deleteItem={id => this.deleteOneByOne(id)}
          list={this.state.list}
          updateText={this.updateText}
          updatePriority={this.updatePriority}
        />
      </div>
    );
  }
}

export default ToDoContainer;
