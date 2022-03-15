import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
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
  const[loggedin, setLoggedin] = useState({loggedin:false})



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

      setLoggedin({
        loggedin: false
      });
    } else {
      console.log("Details do not match");
      setError("Details do not match");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  const displayLogin = () => {
   

      return(

        
        <div className='Login'>
          {(loggedin) ? (
            (user.email !== "") ? (
              <div className='welcome'>
                

                <button onClick ={Logout}>Logout</button>
              </div>
            ): (
              <LoginForm Login={Login} error={error}></LoginForm>
            )
          ) : (
            null
          )}
                    
                </div>

      )

  }

  return (
      <div className="App">
        <Navbar></Navbar>

  
        <Router>
        
            <Routes>
            
              <Route path="/chats" element={<div>Hello this is the Chat</div>} />
              <Route path="/profile" element={<Profile />}/>

              <Route path="/MarketPlace" element={<MarketPlace></MarketPlace>}/>

              <Route path="/" element={
              
                (user.email !== "") ? (
                  <MarketPlace></MarketPlace>

                ): (
                  <div className="Login">
                  <LoginForm Login={Login} error={error}></LoginForm>
                  </div>
                )}
                 />

                
          </Routes>

       </Router>
      </div>
        
  );
}
export default App;
