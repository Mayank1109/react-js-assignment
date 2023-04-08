import React from "react";
import classes from "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftSide from "./Components/leftSide";
// import Modal from "./UI/Modal";
import { useState, useEffect, useCallback } from "react";

function App() {
  const [getTodo, setgetTodo] = useState([]);
  const [error, setError] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const fetchTodoHandler = useCallback(async () => {
    setError(null);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );

      if (!response.ok) {
        throw new Error("Something Went Wrong!");
      }
      const data = await response.json();
      //   console.log(data);
      const transformeddata = data.map((todo) => {
        return {
          userID: todo.userId,
          ToDo_ID: todo.id,
          Title: todo.title,
          Status: todo.completed ? "Complete" : "InComplete",
        };
      });

      setgetTodo(transformeddata);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchTodoHandler();
  }, [fetchTodoHandler]);
  let content;

  const searchHandler = (searchedData) => {
    setIsSearching(true);
    setgetTodo(searchedData);
  };

  content = (
    <LeftSide
      fetchTodoHandler={fetchTodoHandler}
      todolist={getTodo}
      searchHandler={searchHandler}
    />
  );

  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <React.Fragment>
      <div className="divide">{content}</div>
    </React.Fragment>
  );
}

export default App;
