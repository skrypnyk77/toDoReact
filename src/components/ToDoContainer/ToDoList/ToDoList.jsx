import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

/** Class representing only list of ToDos. */
class ToDoList extends Component {
  render() {
    const { deleteItem, list, updateText, updatePriority } = this.props;
    console.log(list);

    return (
      <ol className="todo-list">
        {list.map(({ id, text, priority }) => (
          <ToDoItem
            deleteItem={e => deleteItem(e)}
            list={list}
            id={id}
            text={text}
            key={id}
            priority={priority}
            updateText={updateText}
            updatePriority={updatePriority}
          />
        ))}
      </ol>
    );
  }
}

export default ToDoList;
