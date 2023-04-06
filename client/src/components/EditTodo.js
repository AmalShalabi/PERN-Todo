import React, { Fragment, useState } from "react";

const EditTodo = ({ item }) => {
  const [description, setDescription] = useState(item.description);
  //edit description function
  const updateDescription = async (e) => {
    e.preventDefault(e);
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${item.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${item.todo_id}`}
        onClick={() => setDescription(item.description)}
      >
        Edit
      </button>

      <div className="modal" id={`id${item.todo_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                type="button"
                className="close btn "
                data-dismiss="modal"
                onClick={() => setDescription(item.description)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                className="form-control"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(item.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
