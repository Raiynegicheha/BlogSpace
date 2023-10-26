import React, { useState } from 'react';
import './App.css';
import Login from './Login';


function App() {
// const [name, setName] = React.useState("")
// const [password, setPassword] = React.useState("")


//   document.getElementById("my-form").addEventListener("submit", function(event) {
//     event.preventDefault()
//     const formElements = event.target.elements
//     const {firstName, lastName} = formElements
//     submitViaAPI({
//         firstName: firstName.value,
//         lastName: lastName.value
//     })
// })

// function submitViaAPI(data) {
//     console.log(data)
//     console.log("Submitted!")
// }


  return (
    <div className="App">

      <Login />
    </div>
  );
}

export default App;
