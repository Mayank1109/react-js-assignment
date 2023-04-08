import TodoList from "./todoList";
import React, { useCallback, useState } from "react";
import classes from "./leftSide.module.css";
import TableHeader from "./tableHeader";
import Modal from "../UI/Modal";

const LeftSide = (props) => {
  let content = [];
  const [displayModal, setDisplayModal] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  // const [isSearching, setIsSearching] = useState(false);

  const fetchModalDataHandler = useCallback(async (id, todoid) => {
    setError(null);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      if (!response.ok) {
        throw new Error("Something Went Wrong!");
      }
      const data = await response.json();
      const transformedUser = {
        id: data.id,
        name: data.name,
        email: data.email,
        ToDo_ID: props.todolist[todoid - 1].ToDo_ID,
        title: props.todolist[todoid - 1].Title,
      };
      console.log(transformedUser);
      setUser(transformedUser);
      console.log(user);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  const modalDataHandler = (id, todoid) => {
    console.log(id);
    setDisplayModal(true);
    fetchModalDataHandler(id, todoid);
  };

  const SearchDataHandler = (searchedData) => {
    props.searchHandler(searchedData);
    console.log(searchedData);
  };

  content = (
    <TodoList modalDataHandler={modalDataHandler} todolist={props.todolist} />
  );

  return (
    <div className={classes.outer}>
      <div className={classes.main_table}>
        <TableHeader
          todolist={props.todolist}
          SearchDataHandler={SearchDataHandler}
        />
        <table className="table table-hover table-bordered ">
          <thead>
            <tr>
              <th scope="col">ToDo ID</th>
              <th scope="col">Title</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {content}
        </table>
      </div>
      {displayModal && <Modal user={user} />}
    </div>
  );
};

export default LeftSide;
