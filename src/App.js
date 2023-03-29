import './App.css';
import React, { useState, useRef} from 'react';

const addUserInBackend = async (name) => {
  await fetch('http://localhost:8080/api/User/Add', {
    method: 'POST',
    body: JSON.stringify({
      name: name
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
      .then((response) => response.json())
      .then((data) => {
      })
      .catch((err) => {
        console.log(err.message);
      });
};

function App() {
  const usernameRef = useRef();

  const handleSubmit = () => {
    const username = usernameRef.current.value;
    console.log(username);
    addUserInBackend(username);
    usernameRef.current.value = null;
  }

  return (
      <div className="App">
        <input ref={usernameRef} type={"text"} />
        <button onClick={handleSubmit}>Toevoegen</button>
      </div>
  )
}

export default App;
