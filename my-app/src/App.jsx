import React, { useState, useMemo, useEffect, useReducer } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
} from "react-router-dom";

import Account from "./molecules/Account";
import Settings from "./molecules/Settings";
import Login from "./molecules/Login";
import Header from "./molecules/Header";
import { http } from "./utils/httpClient";
import { UserContext } from "./contexts/UserContext";

import 'bootstrap/dist/css/bootstrap.css';
import './styles/custom.scss'

const App = () => {
  const [user, setUser] = useState(null);
  const User = useMemo(() => ({ user, setUser }), [user, setUser]);
  
  const [userChecked, setUserChecked] = useState(false);
  
  const getData = async () => {
    // const getCurrentUser = "http://localhost:5000/user/current";
    const getCurrentUser = "/api/user/current";
    const CurrentUser = await http.get(getCurrentUser);
    if(CurrentUser.currentUser !== null){
      setUser(CurrentUser.currentUser)
    }

    console.log('CurrentUser')
    // console.log(CurrentUser.currentUser)
    // console.log(CurrentUser.currentUser.username)
    // console.log(CurrentUser.currentUser.id)
    
    
  }
  
  useEffect(() => {
      if(!userChecked){
        getData();
        setUserChecked(true)
      }
  }, [])

  console.log('+++++++++++++++++++++++++++++++++++After useEffect+++++++++++++++++++++++++++++++++++++++++++++++++') 
  console.log('User')
    console.log(User)
    console.log('User.user')
    console.log(User.user)
  
  console.log('userChecked')
  console.log(userChecked)

  console.log('User.user !== null')
  console.log(User.user !== null)

  console.log('userChecked')
  console.log(userChecked)
  
  console.log('userChecked || User.user !== null')
  console.log(userChecked && User.user !== null)

  console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')


  return (
    <Router>
      <UserContext.Provider value={User}>

          {/* {Object.keys(User.user).length > 0 ? <Redirect to="/user/settings" /> : <Redirect to="/login" />} */}
          {/* {userChecked && User.user !== null ? <Redirect to="/user/Settings" /> : <Redirect to="/login" />} */}
          {userChecked && User.user !== null ? <Redirect to="/user/Account" /> : <Redirect to="/login" />}

          <Route exact path="/login">

            <h2 className=" d-flex justify-content-center py-3 mb-4 bg-secondary">
                  Zaloguj się aby zawitać do Sanktuarium
            </h2>
            <div className="container ">
              <Login />
            </div>
          </Route>

            <Route path="/user">
              <Header />
              <div className="container">
                <Route exact path="/user/account">
                  <Account />
                </Route>
                <Route exact path="/user/settings">
                  <Settings />
                </Route>
              </div>
            </Route>
      </UserContext.Provider>
      
    </Router>
  );
};

export default App;
