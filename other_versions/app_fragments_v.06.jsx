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


import CreateUsers from "./atoms/CreateUsers";

import 'bootstrap/dist/css/bootstrap.css';
import './styles/custom.scss'

const App = () => {
  const [user, setUser] = useState(null);
  const User = useMemo(() => ({ user, setUser }), [user, setUser]);
  const setAdditionalInfo = () => {
    const avatarTable = [
      'https://avatarfiles.alphacoders.com/113/113779.jpg',
      'https://avatarfiles.alphacoders.com/183/18329.jpg',
      'https://avatarfiles.alphacoders.com/154/154700.jpg',
      'https://avatarfiles.alphacoders.com/203/203437.jpg',
      'https://avatarfiles.alphacoders.com/992/99262.jpg',
      'https://avatarfiles.alphacoders.com/102/102334.jpg',
      'https://avatarfiles.alphacoders.com/166/166309.jpg',
      'https://avatarfiles.alphacoders.com/169/169057.jpg',
      'https://avatarfiles.alphacoders.com/172/172956.jpg',
      'https://avatarfiles.alphacoders.com/443/44395.jpg',
    ]
    if(UsersTable.length != undefined){
      UsersTable.forEach((element, index) =>{      
        if(index == 0){
          UsersTable[index].username = 'Tyrael';
          UsersTable[index].password = '1234';
        }else{
          UsersTable[index].password = Math.floor(1000 + Math. random() * 9000).toString();
        }
        UsersTable[index].avatar = avatarTable[index];
      });
      localStorage.setItem('Users', JSON.stringify(UsersTable))
    }
  }

  const getData = async () => {
    const res = await http.get(UsersTableLink);
    if (res) {
      setUsersTable(res);
      setAdditionalInfo()
    } 
  }


  useEffect(()=>{
    if(localStorage.getItem('UserTable') == null || localStorage.getItem('UserTable') == {}){
      const UsersTableLink = "https://jsonplaceholder.typicode.com/users";
      getData();
    }
  })
  const initialState = {
    UserTableState:
      localStorage.getItem('UserTable') == null ? [] : JSON.parse(localStorage.getItem('UserTable'))

  }
  
  
  

  const UserTableReducer =  (state, action) => {
    switch (action.type){
      case 'UPDATE':
        return {
          ...state,
          ...action.payload,
        }
        default:
          return state;
    }
  }
  const [{UserTableState}, dispatchUserTable] = useReducer(reducer, initialState);












  const [UsersTable, setUsersTable] = useState();
  
  
  const UsersTableLink = "https://jsonplaceholder.typicode.com/users";
  
  useEffect(() => {
    const getData = async () => {
      const res = await http.get(UsersTableLink);
      if (res) {
        setUsersTable(res);
        console.log('Ciekawe co tu się dzieje')
        console.log(UsersTable)
      }
    };
    getData();
    if(localStorage.getItem('Users') == null || localStorage.getItem('Users') == "{}"){
      getData();
    }else{
      
      const newItems = JSON.parse(localStorage.getItem('Users'))
      console.log("OJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJOJEJ")
      setUsersTable(newItems)
      console.log('newItems')
      console.log(newItems)
    }
    console.log('UsersTable')
    console.log(UsersTable)
    console.log("-+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+-")
    return(
      console.log('DYING'),
      console.log('UsersTable'),
      console.log(UsersTable)
    )
  }, []);

  if(localStorage.getItem('Users') == null || localStorage.getItem('Users') == "{}"){
    addPasswords();
  }
  useEffect(() => {
    // const ActiveUser = {}
    if(localStorage.getItem('ActiveUser') !== null){
      console.log('I AM ALIVE !!!!')
      const ActiveUser = localStorage.getItem('ActiveUser')
      console.log('START+++++++++++++++++++++++++++++++')
      console.log('zmienia się user?')
      console.log(User)
      console.log(ActiveUser)
      console.log('+++++++++++++++++++++++++++++++KONIEC')
      // User.setUser(ActiveUser);
    }else{
      const ActiveUser = {};
    }
    
  }, [User])

  return (
    <Router>
      
      <UserContext.Provider value={User}>
        {UsersTable[0].username}
        {/* <UserContext.Provider value={{user, setUser}}> */}
        {/* <CreateUsers /> */}

        {/* {User.user ? <Redirect to="/user/account" /> : <Redirect to="/login" />} */}
        {User.user ? <Redirect to="/user/settings" /> : <Redirect to="/login" />}
        <Route exact path="/login">

          <h2 className=" d-flex justify-content-center py-3 mb-4 bg-secondary">
                Zaloguj się aby zawitać do Sanktuarium
          </h2>
          <div className="container ">
            <Login />
          </div>
        </Route>

          {/* <div>
                        <span>name</span>
                        <span>{UsersTable.name}</span>
                    </div> */}
          {/* {User.user  ? (<button onClick={() => {
              setUser(null)
            }}>Wyloguj</button>
            ) : (false)
        } */}

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
