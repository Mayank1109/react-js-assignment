import { useState } from "react";
import { Button } from "react-bootstrap";

const TodoList = (props) => {
  return (
    <tbody>
      {props.todolist.map((todo) => (
        <tr key={todo.ToDo_ID}>
          <th scope="row">{todo.ToDo_ID}</th>
          <td>{todo.Title}</td>
          <td>{todo.Status}</td>
          <td>
            <Button
              className="btn btn-light"
              onClick={() => props.modalDataHandler(todo.userID, todo.ToDo_ID)}
            >
              View User
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TodoList;
