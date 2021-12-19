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
import { UserTableContext } from "./contexts/UserTableContext";

import 'bootstrap/dist/css/bootstrap.css';
import './styles/custom.scss'

const App = () => {
  const [user, setUser] = useState({login: null, isLogged: false });
  const User = useMemo(() => ({ user, setUser }), [user, setUser]);
  const [UsersTable, setUsersTable] = useState();
  
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
    console.log(UsersTable)
    console.log(UsersTable == undefined)
    console.log(UsersTable == 'undefined')

    if(UsersTable !== undefined){
      UsersTable.forEach((element, index) =>{      
        if(index == 0){
          UsersTable[index].username = 'Tyrael';
          UsersTable[index].password = '1234';
        }else{
          UsersTable[index].password = Math.floor(1000 + Math. random() * 9000).toString();
        }
        UsersTable[index].avatar = avatarTable[index];
      });
      localStorage.setItem('UserTable', JSON.stringify(UsersTable))
    }
  }

  const getData = async () => {
    const UsersTableLink = "https://jsonplaceholder.typicode.com/users";
    const res = await http.get(UsersTableLink);
    if (res) {
      setUsersTable(res);
      setAdditionalInfo()
    } 
  }
  useEffect(()=>{
    if(localStorage.getItem('UserTable') == null || localStorage.getItem('UserTable') == {}){
      getData();
    }else{
      console.log('hmm')
      localStorage.setItem('UserTable', JSON.stringify(UserTableState))
    }
    
  }, [])
  useEffect(() => {
    if(localStorage.getItem('isLogged')){
      setUser({login: localStorage.getItem('ActiveUser'), isLogged: true});
    }
    return () => {
      
    }
  }, [])
  const initialState = {
    UserTableState: [],
    activeUser: null,
    isLogged: false
  }
  
  
  
  

  const reduceUser =  (UserTableState, action) => {
    switch (action.type){
      case 'INIT':
        return{
          ...UserTableState,
          if(a=1){
            
          }
          UserTableState: 
          
        }
        localStorage.getItem('UserTable') == null ? [] : JSON.parse(localStorage.getItem('UserTable')),
        activeUser: localStorage.getItem('ActiveUser') == null ? [] : JSON.parse(localStorage.getItem('UserTable')),
      case 'UPDATE': 
        return {
          ...UserTableState,
          ...action.payload,
        }
        default:
          return UserTableState;
    }
  }
  const [{UserTableState}, dispatchUserTable] = useReducer(reduceUser, initialState);


  return (
    <Router>
      <UserContext.Provider value={User}>
        <UserTableContext.Provider value={{UserTableState, dispatchUserTable}} >

          {User.user.isLogged ? <Redirect to="/user/settings" /> : <Redirect to="/login" />}
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

          </UserTableContext.Provider>
      </UserContext.Provider>
      
    </Router>
  );
};

export default App;
