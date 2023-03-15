import React, { Fragment, useEffect, useState } from "react";

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
  return (
    <Fragment>
      <h1>ListTodo</h1>
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
                <tr>
              <td>{item.description}</td>
              <td>Edit</td>
              <td>Delete</td>
              </tr>
            ))}
          
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodo;
