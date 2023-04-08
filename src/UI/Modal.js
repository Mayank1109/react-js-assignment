import classes from "./Modal.module.css";
const Modal = (props) => {
  const { id, name, email, ToDo_ID, title } = props.user;
  return (
    <div className={classes.modal}>
      <div className={classes.row}>
        <h6>ToDo ID</h6>
        <h6>{ToDo_ID}</h6>
      </div>
      <div className={classes.row}>
        <h6>ToDo Title</h6>
        <h6>{title}</h6>
      </div>
      <div className={classes.row}>
        <h6>User ID</h6>
        <h6>{id}</h6>
      </div>
      <div className={classes.row}>
        <h6>Name</h6>
        <h6>{name}</h6>
      </div>
      <div className={classes.row}>
        <h6>Email</h6>
        <h6>{email}</h6>
      </div>
    </div>
  );
};

export default Modal;
