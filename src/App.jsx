import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { MarketPlace } from "./MarketPlace";
import { Profile } from "./Profile";

function App() {
  const adminUser = {
    email: "louis.godtfredsen@gmail.com",
    password: "123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match");
      setError("Details do not match");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        {/* <div className='Login'>
         {(user.email !== "") ? (
             <div className='welcome'>
               <h2>Welcome, <span>{user.name}</span></h2>
               <button onClick ={Logout}>Logout</button>
             </div>
           ): (
             <LoginForm Login={Login} error={error}></LoginForm>
           )}
       </div> */}

        <Routes>
          <Route path="/chats" element={<div>Hello this is the Chat</div>} />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route path="/" element={<MarketPlace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
