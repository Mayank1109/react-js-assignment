import classes from "./tableHeader.module.css";

const TableHeader = (props) => {
  const searchHandler = (event) => {
    event.preventDefault();

    const filteredTodo = props.todolist.filter((todo) => {
      if (todo.Title.includes(event.target.value)) {
        return props.todolist;
      }
    });
    props.SearchDataHandler(filteredTodo);
    // console.log(filteredTodo);
  };

  return (
    <div className={classes.header}>
      <h5>Todos</h5>
      <form className="d-flex my-2" role="search">
        <input
          onChange={searchHandler}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </div>
  );
};

export default TableHeader;
