// // import logo from './logo.svg';
// import { useContext } from 'react';
// import React from 'react'
// import { mycontext } from './Assignment18/Context';
// // import './App.css';
// import Home from './Assignment18/Home.jsx';
// import Login from './Assignment18/Login.jsx';
// import Navbar from './Assignment18/NavBar.jsx';
// function App() {
  
//     const {loggedIn} = useContext(mycontext);
//   return (
//     <div className="App">

//     {loggedIn ? (
//       <div>
//         <Navbar />
//         <Home />
//       </div>
//     ) : (
//       <Login />
//     )}
//   </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Switch from 'react-switch'
import ItemList from './Assignment13/ClassItem';
import AddItemForm from './Assignment13/AddItemForm';
import TodoApp from './TodoApp/MainTodo';
import WarpCom from './Home6/WrapCom';
import Main from './Home13/Main';
import Profile from './Home22/Profile';


function App() {
  return (
    <Profile/>
  );
}

export default App;
