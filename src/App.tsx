import './App.css';
import * as React from "react";
import {useState, useEffect} from "react";
import UsersList from "./components/UsersList";
import Form from "./components/Form"

const App = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(usersList => {
        setUsers(usersList)
      })
      .catch(err => {
        throw new Error(err);
      })
  }, [])
  return (
    <div className="App">
      <Form />
      {/* @ts-ignore}} */ }
      <UsersList usersList={users} />
    </div>
  );
}

export default App;
