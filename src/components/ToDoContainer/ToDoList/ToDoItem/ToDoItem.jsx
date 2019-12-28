import React, { Component } from "react";
import ListPriorities from "./Priorities/Priorities";

/** Class representing ToDo item. */
class ToDoItem extends Component {
  /**
   * @constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      done: false,
      newText: this.props.text,
      newPriority: this.props.priority
    };
  }

  /**
   * changing status of toDo
   */
  changeToDoStatus = () => {
    const { done } = this.state;
    this.setState({
      done: !done,
      editing: false
    });
    console.log(done);
  };

  /**
   * handling input of editing
   */
  onEdit = ({ target: { value } }) => {
    this.setState({
      newText: value
    });
  };

  /**
   * edit text of toDo by click
   */
  editToDo = event => {
    const { updateText, id } = this.props;
    const { newText } = this.state;
    this.setState({
      editing: true
    });
    if (event.keyCode === 13) {
      updateText(id, newText);
      this.setState({
        editing: false
      });
    }
  };

  /**
   * changing default priority of toDo by click
   */
  changePriority = ({ target: { value } }) => {
    const { updatePriority, id } = this.props;
    updatePriority(id, value);
    this.setState({
      changePriority: value
    });
  };

  render() {
    const { deleteItem, id, priority } = this.props;
    const { done, newText, editing } = this.state;

    const editStyle = {};
    const viewStyle = {};

    if (editing) {
      viewStyle.display = "none";
    } else {
      editStyle.display = "none";
    }

    return (
      <li className={`list-item${done ? " done" : ""}`} key={id}>
        <div className="priority-block">
          <select
            className="select"
            selected={priority}
            onChange={this.changePriority}
          >
            <ListPriorities />
          </select>
        </div>

        <div className="settings-block">
          <div className="edit-block">
            <input
              type="text"
              onChange={this.onEdit}
              onKeyDown={this.editToDo}
              style={editStyle}
              value={newText}
            />
          </div>
          <span className="toDo">{this.props.text}</span>
          <button
            className="editToDo"
            style={viewStyle}
            onClick={this.editToDo}
          >
            edit toDo
          </button>
          <div className="small-wrapper">
            <label>
              <input
                type="checkbox"
                className="changeble"
                onClick={this.changeToDoStatus}
              />
              changeStatus
            </label>
            <button
              className="btn-remove-by-one"
              onClick={() => deleteItem(id)}
            >
              X
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default ToDoItem;
