import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodo = () => {
  const [listItems, setListItems] = useState([]);

  const getTodo = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      setListItems(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  //Delete item when click on delete button
  const deleteItem = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      const newListItems = listItems.filter((item) => item.todo_id !== id);
      setListItems(newListItems);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <Fragment>
      <h1>List Todo</h1>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {listItems.map((item) => (
            <tr key={item.todo_id}>
              <td>{item.description}</td>
              <td><EditTodo item={item}/></td>
              <td>
                <button
                  onClick={() => deleteItem(item.todo_id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodo;
